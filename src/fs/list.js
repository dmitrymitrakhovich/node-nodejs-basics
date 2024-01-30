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

const list = async () => {
  const __dirname = import.meta.dirname;
  const dirPath = path.resolve(__dirname, 'files');

  const isDirectoryExists = await checkExist(dirPath);

  try {
    if (!isDirectoryExists) {
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
