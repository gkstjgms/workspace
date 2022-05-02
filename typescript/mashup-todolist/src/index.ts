import 'reflect-metadata';
import { createConnections, ConnectionOptions, Connection } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { Request, Response } from 'express';
import Routes from './routes';
import Entity from './entity';

import { exit } from 'process';
import { createTerminus } from '@godaddy/terminus';

import 'dotenv/config';

const connectionOptions: ConnectionOptions[] = [];

connectionOptions.push({
    name: process.env.INTERNAL_NAME ? process.env.INTERNAL_NAME : 'default',
    type: 'mysql',
    port: process.env.INTERNAL_PORT ? +process.env.INTERNAL_PORT : 5000,
    synchronize: process.env.INTERNAL_SYNC === '1' ? true : false,
    host: process.env.INTERNAL_HOST ? process.env.INTERNAL_HOST : '127.0.0.1',
    username: process.env.INTERNAL_AUTH ? process.env.INTERNAL_AUTH : 'root',
    database: process.env.INTERNAL_DATABASE ? process.env.INTERNAL_DATABASE : 'todoList',
    password: process.env.INTERNAL_PASSWORD ? process.env.INTERNAL_PASSWORD : 'tj3gms4!',
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
        app.use(express.static('../ui/build'));
        app.use(
            morgan(`":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`, {}),
        );


       // register express routes from defined application routes
        Routes.forEach((route) => {
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = new (route.controller as any)()[route.action](req, res, next);
                if (result instanceof Promise) {
                    result
                        .catch((ex) => {
                            res.json(ex.message);
                        })
                        .then((result) => (result !== null && result !== undefined ? res.send(result) : undefined));
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        });

       
        const server = app.listen(8002);

        const onSignal = async () => {            
            connection.forEach(async (c) => await c.close());
        };

        const onHealthCheck = async () => {
            return true;
            //return subscriberRedis.onHealthCheck();
        };

        server.on('error', (err) => {
            exit(1);
        });

        createTerminus(server, {
            signal: 'SIGINT',
            healthChecks: { 
                '/_health/liveness': onHealthCheck,
            },
            onSignal: onSignal,
        });

        connectionOptions.forEach((op: MysqlConnectionOptions, index: number) => {
            console.info(`Server ConnectionOptions ${index + 1}`);
            console.info(`Typeorm Name: ${op.name}`);
            console.info(`Typeorm type: ${op.type}`);
            console.info(`Typeorm databaseName: ${op.name}`);
            console.info(`Typeorm databaseHost: ${op.host}`);
            console.info(`Typeorm databaseHost: ${op.port}`);
        });
        console.info('SEMI-TS DBM server has started on port 8002');
    } catch (ex) {
        console.error(ex.message);
        exit(1);
    }
};

run(connectionOptions);
