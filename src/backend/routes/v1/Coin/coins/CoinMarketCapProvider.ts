import CoinDetailsProvider from './type/CoinDetailsProvider';
import {CoinDefault} from './type/Coin';
import axios from 'axios';
import cheerio from 'cheerio';

export default class implements CoinDetailsProvider {
  async get(providersCoinPageUrl: string): Promise<CoinDefault> {
    let coinOverviewRawHtml = '';

    try {
      coinOverviewRawHtml =
        (await axios.get(providersCoinPageUrl)).data as string;
    } catch {
      return {
        watchers: 0,
        price: 0,
        rank: 0
      };
    }

    let $ = cheerio.load(coinOverviewRawHtml);
    const watchersHtmlNode =
      $('.top-summary-container .nameSection')
        .find('div.namePill:contains("watchlists")').last();

    const watchersCountInt =
      parseInt((watchersHtmlNode.text().replace(/[^0-9]/g,'')));

    return {
      watchers: watchersCountInt,
      price: 0,
      rank: 0
    };
  }
}
