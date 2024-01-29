import os from 'node:os';
import path from 'node:path';
import { Worker, isMainThread } from 'node:worker_threads';

const performCalculations = async () => {
  const __dirname = import.meta.dirname;
  const workerPath = path.resolve(__dirname, 'worker.js');

  if (isMainThread) {
    const cpus = os.cpus().length;
    const result = [];

    let count = 0;

    for (let i = 0; i < cpus; i++) {
      const worker = new Worker(workerPath, { workerData: 10 + i });

      worker.on('message', (data) => {
        result[i] = { status: 'success', data };
      });

      worker.on('error', (error) => {
        result[i] = { status: 'error', data: null };
      });

      worker.on('exit', () => {
        count += 1;
        if (count === cpus) {
          console.log(result);
        }
      });
    }
  }
};

await performCalculations();
