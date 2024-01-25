import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    await fsp.rm(filePath);
  } catch (error) {
    throw new Error(error);
  }
};

await remove();
