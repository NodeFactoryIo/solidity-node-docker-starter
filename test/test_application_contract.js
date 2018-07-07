/* eslint-disable no-undef */
let Application = artifacts.require('../contracts/Application.sol');

contract('Application', function(accounts) {

  let contract;

  it('should update storage contract address', function() {
    return Application.deployed()
      .then(
        (_contract) => {
          contract = _contract;
          return contract.setStorageAddress(accounts[0]);
        }
      )
      .then(
        () => {
          return contract.getStorageAddress();
        }
      ).then(
        (newStorageAddress) => {
          return assert.equal(newStorageAddress, accounts[0]);
        }
      );

  });

});
