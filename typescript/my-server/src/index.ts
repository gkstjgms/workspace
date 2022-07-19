import "reflect-metadata";
import { createConnections, ConnectionOptions, Connection } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import * as morgan from "morgan";
import Routes from "./routes/todoItem";
import Entity from "./entity/entity";

import { exit } from "process";
import { createTerminus } from "@godaddy/terminus";

import "dotenv/config";

const connectionOptions: ConnectionOptions[] = [];

connectionOptions.push({
  type: "mysql",
  username: process.env.INTERNAL_AUTH ? process.env.INTERNAL_AUTH : "root",
  password: process.env.INTERNAL_PASSWORD
    ? process.env.INTERNAL_PASSWORD
    : "tj3gms4!",
  database: process.env.INTERNAL_DATABASE
    ? process.env.INTERNAL_DATABASE
    : "myTodoList",
  logging: true,
  entities: Entity,
});

const run = async (options) => {
  try {
    const connection: Connection[] = await createConnections(options);

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static("../client/build"));
    app.use(
      morgan(
        `":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`,
        {}
      )
    );

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result
              .catch((ex) => {
                res.json(ex.message);
              })
              .then((result) =>
                result !== null && result !== undefined
                  ? res.send(result)
                  : undefined
              );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    const port = 8000;
    const server = app.listen(port);

    const onSignal = async () => {
      connection.forEach(async (c) => await c.close());
    };

    const onHealthCheck = async () => {
      return true;
    };

    server.on("error", (err) => {
      exit(1);
    });

    createTerminus(server, {
      signal: "SIGINT",
      healthChecks: {
        "/_health/liveness": onHealthCheck,
      },
      onSignal: onSignal,
    });

    connectionOptions.forEach((op: MysqlConnectionOptions, index: number) => {
      console.info(`---Server ConnectionOptions---`);
      console.info(`Typeorm type: ${op.type}`);
    });
    console.info(`My server has started on port ${port}`);
  } catch (ex) {
    console.error(ex.message);
    exit(1);
  }
};

run(connectionOptions);
