/* eslint-disable no-undef */
let Storage = artifacts.require('./Storage.sol');

module.exports = function(deployer) {
  deployer.deploy(Storage);
};
