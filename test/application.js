/* eslint-disable no-undef */
let Application = artifacts.require('../contracts/Application.sol');

contract('Application', function(owner) {

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
        function(originalStorageAddress) {
          return contract.setStorageAddress(owner);
        }
      ).then(
        function() {
          return contract.getStorageAddress();
        }
      ).then(
        function(newStorageAddress) {
          return assert.isNotEqual(newStorageAddress, null);
        }
      ).catch(
        function(error) {
          console.log('error:', error);
          return assert.fail(0, 1);
        }
      );

  });

});
