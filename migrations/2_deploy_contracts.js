// eslint-disable-next-line no-undef
const Application = artifacts.require('./Application.sol');
// eslint-disable-next-line no-undef
const Storage = artifacts.require('./Storage.sol');

module.exports = function(deployer) {
  deployer.deploy(Storage)
    .then(() => deployer.deploy(Application, Storage.address));
};
