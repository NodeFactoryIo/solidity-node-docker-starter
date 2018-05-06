require('babel-register');
require('dotenv').config();

const initApp = require('./index').initApp;
const bindApp = require('./index').bindApp;

initApp().then(app => bindApp(app));
