import winston from 'winston';
import { LoggingWinston } from '@google-cloud/logging-winston';

const loggingWinston = new LoggingWinston({
  projectId: 'hurtzoo-parser',
  keyFilename: './key.json',
});

export const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console(), loggingWinston],
});

export const HURTZOO_PARSER = 'hurtzoo-parser --- ';
export const CENEO_PARSER = 'ceneo-parser --- ';
export const DATA_DISPLAY = 'data-display --- ';
