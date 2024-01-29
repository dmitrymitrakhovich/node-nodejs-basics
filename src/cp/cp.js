import { spawn } from 'node:child_process';
import path from 'node:path';
import { stderr, stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
  const __dirname = import.meta.dirname;
  const filePath = path.resolve(__dirname, 'files', 'script.js');

  const childProcess = spawn('node', [filePath, ...args], {
    stdio: [stdin, stdout, stderr, 'ipc'],
  });

  childProcess.on('error', (error) => {
    console.error(error);
  });
};

spawnChildProcess(['hello', 'it', 'is', 'test']);
