import { run, help } from 'runjs';
import * as node from './tasks/node';
import * as contracts from './tasks/contracts';

export { node, contracts };

export function clean() {
  contracts.clean();
  run('rm -rf node_modules');
}


export function lint() {
  run('docker-compose run --rm backend npm run lint');
}

export function build() {
  run('docker-compose down');
  run('docker-compose -f docker-compose-cleanup.yml down -v');
  run('docker-compose build');
}

help(clean, 'Removes all build directories and dependencies');
help(lint, 'Runs eslint on current project');
help(build, 'Builds new docker image');
