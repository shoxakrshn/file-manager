import os from 'node:os';
import {
  farewell,
  getUserName,
  greetUser,
  showCurrentDir,
} from './helpers/index.js';
import { controller } from './controller.js';

export const app = () => {
  const userName = getUserName();
  greetUser(userName);

  process.chdir(os.homedir());
  showCurrentDir();

  const rs = process.stdin;

  rs.on('data', (chunk) => {
    const chunkStringified = chunk.toString().trim();

    if (chunkStringified === '.exit') {
      farewell(userName);
    }

    controller(chunkStringified);
  });

  process.on('SIGINT', () => {
    farewell(userName);
  });
};
