import fsp from 'node:fs/promises';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

async function isFileExist(path) {
  try {
    return (await fsp.stat(path)).isFile();
  } catch (e) {
    return false;
  }
}

const create = async () => {
  const fileName = 'fresh.txt';
  const filePath = path.resolve(__dirname, 'files', fileName);
  const fileContent = 'I am fresh and young';

  try {
    if (await isFileExist(filePath)) {
      throw new Error('FS operation failed');
    }

    await fsp.writeFile(filePath, fileContent);
  } catch (error) {
    throw new Error(error);
  }
};

await create();
