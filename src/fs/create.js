import fs from 'node:fs';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

const create = async () => {
  const fileName = 'fresh.txt';
  const filePath = path.resolve(__dirname, 'files', fileName);
  const fileContent = 'I am fresh and young';

  const isFileExists = fs.existsSync(filePath);

  if (isFileExists) {
    throw new Error('FS operation failed');
  }

  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
};

await create();
