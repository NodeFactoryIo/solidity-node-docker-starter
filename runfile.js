import { run, help } from 'runjs';

export function clean() {
  run('rm -rf node_modules');
}

export function build() {
  run('docker-compose down');
  run('docker-compose -f docker-compose-cleanup.yml down -v');
  run('docker-compose build');
}

export function test() {
  run('docker-compose run --rm backend npm run test');
}

export function dev() {
  run('docker-compose up');
}

help(clean, 'Removes all build directories and dependencies');
help(build, 'Builds new docker image');
help(test, 'Runs nodejs tests');
help(dev, 'Starts application and all dependent services');
