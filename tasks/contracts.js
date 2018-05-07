import { help, run } from 'runjs';

export function clean() {
  run('rm -rf build');
}

export function deploy(env) {
  if (!env) {
    env = 'development';
  }
  run(`docker-compose run --rm backend truffle migrate --network ${env}`);
}

export function redeploy(env) {
  if (!env) {
    env = 'development';
  }
  run(
    `docker-compose run --rm backend truffle migrate --reset --network ${env}`
  );
}

export function compile() {
  run(
    'docker-compose run --no-deps --rm backend truffle "compile --all"'
  );
}

export function test(testName) {
  if (!testName) {
    testName = '*';
  }
  run(
    `docker-compose run --rm backend truffle "test ${testName}"`
  );
}

help(
  deploy,
  'Run all missing migrations to deploy contracts' +
  ' to ethereum network. Command accepts param with id of network'
);
help(
  redeploy,
  'Run all migrations again to deploy contracts ' +
  'to ethereum network. Command accepts param with id of network'
);
help(
  compile,
  'Compiles all contracts'
);

help(
  test,
  'Runs tests against contracts in docker. It accepts test name as optional argument'
);

help(
  clean,
  'Delete contract artifacts'
);
