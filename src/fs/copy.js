import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = path.resolve(__dirname, 'files');
  const targetPath = path.resolve(__dirname, 'files_copy');

  try {
    if (!fs.existsSync(sourcePath) || fs.existsSync(targetPath)) {
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
