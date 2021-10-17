import StatusCodes from 'http-status-codes';
import {URL} from 'url';
import { Request, Response } from 'express';
import CoinMarketCapProvider from './coins/CoinMarketCapProvider';
import CoinGeckoProvider from './coins/CoingeckoProvider';
import ApiV1BadRequestException from '../../../shared/exceptions/ApiV1BadRequestException';
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const { coinGeckoUrl, coinMarketCapUrl } = req.query;

  try {
    new URL(coinGeckoUrl as string);
    new URL(coinMarketCapUrl as string);
  } catch {
    throw new ApiV1BadRequestException;
  }

  return res
    .status(OK)
    .json({
      coinGecko:
        await (new CoinGeckoProvider())
          .get(coinGeckoUrl as string),
      coinMarketCap:
        await (new CoinMarketCapProvider())
          .get(coinMarketCapUrl as string),
    });
}
