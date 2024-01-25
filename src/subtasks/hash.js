import fs from 'node:fs';
import fsPr from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export const hash = async (filePath) => {
  const targetFilePath = path.resolve(filePath);

  try {
    await fsPr.access(targetFilePath);
  } catch (error) {
    throw new Error();
  }

  const hashStream = crypto.createHash('sha256');
  const rs = fs.createReadStream(targetFilePath);

  hashStream.on('error', (error) => {
    console.error(`Error calculating hash: ${error.message}`);
  });

  rs.pipe(hashStream).on('finish', () => {
    const hash = hashStream.digest('hex');
    console.log(hash);
  });
};
