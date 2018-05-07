import { help, run } from 'runjs';

export function test() {
  run('docker-compose run --no-deps --rm backend npm run test');
}

export function dev() {
  run('docker-compose up');
}

help(test, 'Runs nodejs tests');
help(dev, 'Starts application and all dependent services');
