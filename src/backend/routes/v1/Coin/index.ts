import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import CoinMarketCapProvider from "./coins/CoinMarketCapProvider";
import CoingeckoProvider from "./coins/CoingeckoProvider";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  return res
    .status(OK)
    .json({
      coingecko:
        await (new CoingeckoProvider())
          .get('https://coingecko.com/en/coins/waves'),
      coinMarketCap:
        await (new CoinMarketCapProvider())
          .get('https://coinmarketcap.com/en/currencies/waves'),
    });
}
