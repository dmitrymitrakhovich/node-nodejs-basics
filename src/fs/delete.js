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

const remove = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  const isFileExists = await checkExist(filePath);

  try {
    if (!isFileExists) {
      throw new Error('FS operation failed');
    }

    await fsp.rm(filePath);
  } catch (error) {
    throw new Error(error);
  }
};

await remove();
