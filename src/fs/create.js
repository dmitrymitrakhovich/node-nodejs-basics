import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

const create = async () => {
  const __dirname = import.meta.dirname;
  const fileName = 'fresh.txt';
  const filePath = path.resolve(__dirname, 'files', fileName);
  const fileContent = 'I am fresh and young';

  try {
    if (fs.existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    await fsp.writeFile(filePath, fileContent);
  } catch (error) {
    throw new Error(error);
  }
};

await create();
