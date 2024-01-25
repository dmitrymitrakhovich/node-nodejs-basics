import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'path';

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    const content = await fsp.readFile(filePath, { encoding: 'utf-8' });
    console.log(content);
  } catch (error) {
    throw new Error(error);
  }
};

await read();
