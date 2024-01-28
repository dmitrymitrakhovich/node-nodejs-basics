import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

const write = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  try {
    const ws = fs.createWriteStream(filePath);
    await pipeline(process.stdout, ws);
  } catch (error) {
    throw new Error(error);
  }
};

await write();
