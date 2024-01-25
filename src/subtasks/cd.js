import path from 'node:path';

export const cd = (pathDir) => {
  const dirPath = path.resolve(pathDir);
  process.chdir(dirPath);
};
