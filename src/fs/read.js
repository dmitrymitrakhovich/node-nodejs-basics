import fsp from 'node:fs/promises';
import path from 'path';

const checkExist = async (path) => {
  try {
    await fsp.access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const read = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  const isFileExists = await checkExist(filePath);

  try {
    if (!isFileExists) {
      throw new Error('FS operation failed');
    }

    const content = await fsp.readFile(filePath, { encoding: 'utf-8' });
    console.log(content);
  } catch (error) {
    throw new Error(error);
  }
};

await read();
