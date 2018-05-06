import { Router } from 'express';


export default () => {
  const api = Router();

  api.get('/', (req, res) => {
    res.send('You have reached backend server!');
  });

  return api;
};
