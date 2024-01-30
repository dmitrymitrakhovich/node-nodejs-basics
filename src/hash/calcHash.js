import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const calculateHash = async () => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );

  const hash = crypto.createHash('sha256');

  const stream = fs.createReadStream(filePath);
  stream.on('data', (data) => hash.update(data));
  stream.on('end', () => {
    const hex = hash.digest('hex');
    console.log(hex);
  });
  stream.on('error', (error) => {
    throw new Error(error);
  });
};

await calculateHash();
