import { run, help } from 'runjs';

export function clean() {
  run('rm -rf node_modules');
}

help(clean, 'Removes all build directories and dependencies');
