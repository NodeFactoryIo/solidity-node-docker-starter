/* eslint-disable no-undef */
let Application = artifacts.require('../contracts/Application.sol');

contract('Application', function(accounts) {

  let contract;

  it('should update storage contract address', function() {
    Application.deployed()
      .then(
        function(_contract) {
          contract = _contract;
          return contract.getStorageAddress();
        }
      )
      .then(
        function() {
          return contract.setStorageAddress(accounts[0]);
        }
      ).then(
        function() {
          return contract.getStorageAddress();
        }
      ).then(
        function(newStorageAddress) {
          return assert.equal(newStorageAddress, accounts[0]);
        }
      ).catch(
        function(error) {
          console.log('error:', error);
          return assert.fail(0, 1);
        }
      );

  });

});
