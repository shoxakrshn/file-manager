import fs from 'node:fs/promises';
import path from 'node:path';

export const add = async (filename) => {
  try {
    const filePath = path.resolve(filename);

    await fs.writeFile(filePath, '');
  } catch {
    throw new Error();
  }
};
