import {CoinDefault} from './Coin';

export default interface CoinDetailsProvider {
  get(providersCoinPageUrl: string): Promise<CoinDefault>
}
