import path from 'node:path';
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createUnzip } from 'node:zlib';

const decompress = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = path.resolve(__dirname, 'files', 'archive.gz');
  const targetPath = path.resolve(__dirname, 'files', 'fileToCompress.txt');

  const unzip = createUnzip();

  try {
    const rs = fs.createReadStream(sourcePath);
    const ws = fs.createWriteStream(targetPath);
    await pipeline(rs, unzip, ws);
  } catch (error) {
    throw new Error(error);
  }
};

await decompress();
