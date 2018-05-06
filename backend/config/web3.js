import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const networkHost = env.ETHEREUM_NETWORK_HOST || 'ethereum';
const networkPort = 8545;

export default class Web3Config {

  static url() {
    return `http://${networkHost}:${networkPort}`;
  }

}
