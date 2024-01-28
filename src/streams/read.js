import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

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
