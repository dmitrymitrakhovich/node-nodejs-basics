import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  try {
    const rs = fs.createReadStream(filePath, { encoding: 'utf-8' });
    await pipeline(rs, process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await read();
