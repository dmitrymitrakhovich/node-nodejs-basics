import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

const checkExistPath = (path) => fs.existsSync(path);

const copy = async () => {
  const sourcePath = path.resolve(__dirname, 'files');
  const targetPath = path.resolve(__dirname, 'files_copy');

  try {
    if (!checkExistPath(sourcePath) || checkExistPath(targetPath)) {
      throw new Error('FS operation failed');
    }

    await fsp.mkdir(targetPath);

    const files = await fsp.readdir(sourcePath);

    for (const file of files) {
      await fsp.copyFile(
        path.resolve(sourcePath, file),
        path.resolve(targetPath, file)
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};

await copy();
