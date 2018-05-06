import Web3Config from '../config/web3';
import Web3 from 'web3';

let web3 = new Web3(new Web3.providers.HttpProvider(Web3Config.url()));

export default class Web3Service {

  static toHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
  }

  static web3() {
    return web3;
  }

}
