import path from 'node:path';
import { release, type, version } from 'node:os';
import { createServer as createServerHttp } from 'http';

import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };
import * as c from './files/c.js';

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };