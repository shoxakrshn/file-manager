import path from 'node:path';
import fs from 'node:fs';
import { stdout } from 'node:process';

export const cat = (filename) => {
  const filePath = path.resolve(filename);
  const rs = fs.createReadStream(filePath);

  rs.pipe(stdout);

  rs.on('end', () => stdout.write('\n'));

  rs.on('error', () => {
    console.log('\nOperation Failed\n');
  });
};
