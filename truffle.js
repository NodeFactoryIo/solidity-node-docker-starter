// Allows us to use ES6 in our migrations and tests.
require('babel-register');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

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
          `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
          0
        );
      },
      gas: 4612388,
      gasPrice: 1,
      network_id: 3,
    },
  },

  compilers: {
    solc: {
      version: '0.5.7',
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
