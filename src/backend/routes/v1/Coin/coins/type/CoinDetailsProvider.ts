import { CoinDefault } from "./Coin";

export default interface CoinDetailsProvider {
  get(id: string): Promise<CoinDefault>;
}
