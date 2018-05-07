/* eslint-disable no-undef */
let Application = artifacts.require('../contracts/Application.sol');
let Storage = artifacts.require('../contracts/Storage.sol');

contract('Application', function([owner]) {

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

  it('should save something to storage', function(accounts) {
    const message = 'Great test';

    Application.deployed()
      .then(function(_contract) {
        contract = _contract;
        return contract.storeSomething(web3.fromAscii(message));
      }).then(function(result) {
        console.log(result);
        /*Storage.deployed()
          .then(
            function(storageContract) {
              console.log(storageContract);
              return storageContract.something.call();
            }
          ).then(function(messageInBytes) {
            console.log(messageInBytes);
            const retrievedMessage = web3.toAscii(messageInBytes);
            console.log(retrievedMessage);
            assert.equal(retrievedMessage, message);
          });*/
      });
  });
});
