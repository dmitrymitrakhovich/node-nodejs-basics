import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
  const __dirname = import.meta.dirname;
  const dirPath = path.resolve(__dirname, 'files');

  try {
    if (!fs.existsSync(dirPath)) {
      throw new Error('FS operation failed');
    }

    const files = await fsp.readdir(dirPath);
    const names = [];

    for (const file of files) {
      names.push(file);
    }

    console.log(files);
  } catch (error) {
    throw new Error(error);
  }
};

await list();
