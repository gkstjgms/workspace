import { logger } from './logger.config';

export const onStart = (port) => {
    logger.info(`Server Started http://localhost:${port}`);
};

export const onReciveMessage = (msg) => {
    logger.info(`Recive Command: ${JSON.stringify(msg)}`);
};

export const onInfo = (msg, address) => {
    if(process.env.NODE_ENV !== 'test') logger.log({ level: 'info', message: msg, IPAddress: address });
};

export const onError = (msg, address) => {
    logger.log({ level: 'error', message: msg, IPAddress: address });
};

export const onDebug = (msg, address) => {
    logger.log({ level: 'debug', message: msg, IPAddress: address });
};
