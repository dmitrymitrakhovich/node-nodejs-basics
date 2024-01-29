import { fork } from 'node:child_process';
import path from 'node:path';

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'script.js');

  fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hello', 'it', 'is', 'test']);
