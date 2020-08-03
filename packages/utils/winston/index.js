import winston from 'winston';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { LoggingWinston } = require('@google-cloud/logging-winston');

const loggingWinston = new LoggingWinston({
  projectId: 'hurtzoo-parser',
  keyFilename: resolve(__dirname, './key.json'),
});

export const logger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console(), loggingWinston],
});

export const HURTZOO_PARSER = 'hurtzoo-parser --- ';
export const CENEO_PARSER = 'ceneo-parser --- ';
export const DATA_DISPLAY = 'data-display --- ';
