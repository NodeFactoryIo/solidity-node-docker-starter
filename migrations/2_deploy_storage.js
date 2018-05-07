// eslint-disable-next-line no-undef
const Storage = artifacts.require('./Storage.sol');

module.exports = function(deployer) {
  deployer.deploy(Storage);
};
