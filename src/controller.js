import * as subtask from './subtasks/index.js';
import { showCurrentDir } from './helpers/showCurrentDir.js';
import { commandList } from './static/commands.js';

export const controller = async (chunk) => {
  const [command, ...args] = chunk.split(' ');

  try {
    if (!commandList.includes(command)) {
      console.log('Invalid input');
      return;
    }

    await subtask[command](...args);
  } catch {
    console.log('\nOperation failed\n');
  } finally {
    showCurrentDir();
  }
};
