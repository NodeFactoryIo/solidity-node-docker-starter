import express from 'express';
import routes from './routes';

const app = express();

const initApp = async() => {
  app.use('/', routes());

  return app;
};

const bindApp = async(appToBind) => {
  const port = process.env.DEPLOY_PORT || 3000;

  appToBind.listen(port, () => {
    console.log(`Express Listening at http://localhost:${port}`);
  });
};


export {
  initApp,
  bindApp,
};
