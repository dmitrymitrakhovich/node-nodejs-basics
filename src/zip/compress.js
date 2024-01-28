import path from 'node:path';
import fs from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
  const __dirname = import.meta.dirname;
  const sourcePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const targetPath = path.resolve(__dirname, 'files', 'archive.gz');

  const gzip = createGzip();

  try {
    const rs = fs.createReadStream(sourcePath);
    const ws = fs.createWriteStream(targetPath);
    await pipeline(rs, gzip, ws);
  } catch (error) {
    throw new Error(error);
  }
};

await compress();
