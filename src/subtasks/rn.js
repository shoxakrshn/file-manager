import path from 'node:path';
import fs from 'node:fs/promises';

export const rn = async (srcFilename, dstFilename) => {
  try {
    const srcFilenamePath = path.resolve(srcFilename);
    const dstFilenamePath = path.resolve(dstFilename);

    await fs.rename(srcFilenamePath, dstFilenamePath);
  } catch {
    throw new Error();
  }
};
