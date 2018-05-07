/* eslint-disable no-undef */
let Application = artifacts.require('../contracts/Application.sol');
let Storage = artifacts.require('../contracts/Storage.sol');

contract('Application', function([owner]) {

  let contract;

  it('should save something to storage', function() {
    const message = 'Great test';

    Application.deployed()
      .then(function(_contract) {
        contract = _contract;
        return contract.storeSomething(web3.fromAscii(message));
      }).then(function() {
        Storage.deployed()
          .then(
            function(storageContract) {
              return storageContract.something.call();
            }
          ).then(function(messageInBytes) {
            const retrievedMessage = web3.toUtf8(messageInBytes);
            assert.equal(retrievedMessage, message);
          });
      });
  });

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
          // Careful, this will have affect on other tests :)
          return contract.setStorageAddress(owner);
        }
      ).then(
      function() {
        return contract.getStorageAddress.call();
      }
    ).then(
      function(newStorageAddress) {
        return assert.notEqual(newStorageAddress, null);
      }
    ).catch(
      function(error) {
        console.log('error:', error);
        return assert.fail(0, 1);
      }
    );

  });
});
