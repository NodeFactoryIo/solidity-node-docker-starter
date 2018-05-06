// Allows us to use ES6 in our migrations and tests.
require('babel-register');
require('dotenv').config();
let HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: process.env.ETHEREUM_NETWORK_HOST || 'ethereum',
      port: '8545',
      network_id: '*',
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.ROPSTEN_MNEMONIC,
          `https://ropsten.infura.io/${process.env.INFURA_ACCESS_TOKEN}`,
          0
        );
      },
      gas: 4612388,
      gasPrice: 1,
      network_id: 3,
    },
  },
  mocha: {
    useColors: true,
    reporter: 'mocha-multi-reporters',
    reporterOptions: {
      configFile: './mocha-smart-contracts-config.json',
    },
  },

};
