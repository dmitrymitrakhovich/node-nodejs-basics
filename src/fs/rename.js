import fsp from 'node:fs/promises';
import path from 'node:path';

const checkExist = async (path) => {
  try {
    await fsp.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const targetPath = path.resolve(__dirname, 'files', 'properFilename.md');

  const isSourcePathExists = await checkExist(sourcePath);
  const isTargetPathExists = await checkExist(targetPath);

  try {
    if (!isSourcePathExists || isTargetPathExists) {
      throw new Error('FS operation failed');
    }

    await fsp.rename(sourcePath, targetPath);
  } catch (error) {
    throw new Error(error);
  }
};

await rename();
