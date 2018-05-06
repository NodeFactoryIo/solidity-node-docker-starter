pragma solidity 0.4.21;


import "./Storage.sol";


contract Application {

    address private storageAddress;

    function Application(address _storageAddress) public {
        setStorageAddress(_storageAddress);
    }

    function getStorageAddress() public view returns(address _storageAddress){
        return storageAddress;
    }


    function setStorageAddress(address _storageAddress) public {
        storageAddress = _storageAddress;
    }

    function storeSomething(bytes32 _something) public {
        Storage(storageAddress).storeSomethingForMe(_something);
    }

}

