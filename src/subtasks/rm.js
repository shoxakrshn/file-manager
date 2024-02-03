import fs from 'node:fs/promises';
import path from 'node:path';

export const rm = async (filePath) => {
  try {
    const targetFilenamePath = path.resolve(filePath);
    await fs.rm(targetFilenamePath);
  } catch {
    throw new Error();
  }
};
