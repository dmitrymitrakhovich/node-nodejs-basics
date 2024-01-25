import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

const checkExistPath = (path) => fs.existsSync(path);

const remove = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  try {
    if (!checkExistPath(filePath)) {
      throw new Error('FS operation failed');
    }

    await fsp.rm(filePath);
  } catch (error) {
    throw new Error(error);
  }
};

await remove();
