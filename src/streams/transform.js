import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
  try {
    const ts = new Transform({
      transform(chunk, encoding, callback) {
        const chunkStr = chunk.toString().trim();
        const reversedChunkStr = chunkStr.split('').reverse().join('');

        callback(null, reversedChunkStr + '\n');
      },
    });

    await pipeline(process.stdin, ts, process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await transform();
