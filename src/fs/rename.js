import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

const checkExistPath = (path) => fs.existsSync(path);

const rename = async () => {
  const sourcePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const targetPath = path.resolve(__dirname, 'files', 'properFilename.md');

  try {
    if (!checkExistPath(sourcePath) || checkExistPath(targetPath)) {
      throw new Error('FS operation failed');
    }

    await fsp.rename(sourcePath, targetPath);
  } catch (error) {
    throw new Error(error);
  }
};

await rename();
