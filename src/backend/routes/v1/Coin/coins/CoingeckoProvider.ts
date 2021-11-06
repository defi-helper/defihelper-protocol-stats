import CoinDetailsProvider from "./type/CoinDetailsProvider";
import { CoinDefault } from "./type/Coin";
import axios from "axios";
import cheerio from "cheerio";

export default class implements CoinDetailsProvider {
  async get(id: string): Promise<CoinDefault> {
    let coinOverviewRawHtml;
    try {
      coinOverviewRawHtml = (
        await axios.get(`https://coingecko.com/en/coins/${id}`)
      ).data as string;
    } catch {
      throw "Service didn't respond";
    }

    const $ = cheerio.load(coinOverviewRawHtml);
    const watchersHtmlNode = $('div:contains("people like this")').last();
    const watchersCountInt = parseInt(
      watchersHtmlNode.text().replace(/[^0-9]/g, "")
    );

    if (!Number.isInteger(watchersCountInt)) {
      throw "Unable to parse html";
    }

    return {
      watchers: watchersCountInt,
      price: 0,
      rank: 0,
    };
  }
}
