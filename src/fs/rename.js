import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const targetPath = path.resolve(__dirname, 'files', 'properFilename.md');

  try {
    if (!fs.existsSync(sourcePath) || fs.existsSync(targetPath)) {
      throw new Error('FS operation failed');
    }

    await fsp.rename(sourcePath, targetPath);
  } catch (error) {
    throw new Error(error);
  }
};

await rename();
