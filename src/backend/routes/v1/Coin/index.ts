import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import CoinMarketCapProvider from "./coins/CoinMarketCapProvider";
import ConfigManager from "../../../shared/ConfigManager";
import CoinGeckoProvider from "./coins/CoingeckoProvider";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  return res
    .status(OK)
    .json({
      coinGecko:
        await (new CoinGeckoProvider())
          .get(ConfigManager.get('COINGECKO_COIN_PAGE_URL')),
      coinMarketCap:
        await (new CoinMarketCapProvider())
          .get(ConfigManager.get('COINMARKETCAP_COIN_PAGE_URL')),
    });
}
