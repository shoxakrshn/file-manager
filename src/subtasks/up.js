import { showCurrentDir } from '../helpers/index.js';

export const up = () => {
  process.chdir('..');
};
