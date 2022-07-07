import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as proxy from "express-http-proxy";
import ClientManager from "./clientManager";
import { Server, Socket } from "socket.io";
import "dotenv/config";
import * as cors from "cors";
import { onStart, onInfo, onError } from "./logger/logger";
import { exit } from "process";
import { createTerminus } from "@godaddy/terminus";
import { cli } from "winston/lib/winston/config";

export interface clientMessage {
  type: string;
}

export const app = express();
const run = async () => {
  try {
    const clientManager = new ClientManager();

    const port = process.env.GUI_PORT ? process.env.GUI_PORT : 9000;

    app.use(
      cors({
        origin: true,
        credentials: true,
        optionsSuccessStatus: 200,
      })
    );
    app.use(
      express.json({
        limit: "50mb",
      })
    );
    app.use(
      express.urlencoded({
        extended: false,
        limit: "50mb",
      })
    );
    app.use("/public", express.static("./public"));
    app.use(express.static("../client/build"));
    app.use(cookieParser());

    const checktoken = (req, res, next) => {
      console.log("hi alice");
      next();
    };
    app.use(
      "/file",
      checktoken,
      proxy("http://192.168.0.118:8080", {
        memoizeHost: false,
        reqBodyEncoding: null,
        proxyReqPathResolver(req, res) {
          return `http://192.168.0.118:8080${req.url}`;
        },
        limit: "2000mb",
      })
    );

    app.use((req, res, next) => {
      res.header("Content-Type", "application/json;charset=UTF-8");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    const onSignal = async () => {
      onInfo("Server is starting cleanup", "");
      io.close();
      clientManager.remove();
    };

    const onHealthCheck = async () => {
      //redis가 접속이 끊어지면 컨테이너 이미지 강제 종 료
    };

    const server = app.listen(+port, () => {
      onStart(port);
    });

    createTerminus(server, {
      signal: "SIGINT",
      healthChecks: {
        "/_health/liveness": onHealthCheck,
      },
      onSignal: onSignal,
    });

    const io = new Server(server, {
      cors: {
        origin: "*",
        credentials: true,
      },
    });

    server.on("error", (err) => {
      onError(err.message, null);
      exit(1);
    });

    io.on("connection", (client: Socket) => {
      onInfo(
        `client connected , ${client.handshake.address}`,
        client.handshake.address
      );

      clientManager.addClient(client);

      // 메시지를 받으면 --- (※5)
      client.on("message", (msg) => {
        let message: clientMessage = msg;
        if (!message.type) message = JSON.parse(msg);

        //clientHandler(client, msg);
      });

      client.on("disconnect", () => {
        onInfo(`user disconnected, ${client.id}`, client.handshake.address);
        clientManager.removeClient(client);
      });

      client.on("error", (err) => {
        onError(`received error from client:  ${client.id}`, null);
        onError(`socket.io Error ${err}`, null);
      });
    });
  } catch (ex) {
    onError(`run error : ${ex.message}`, null);
    exit(1);
  }
};

run();
