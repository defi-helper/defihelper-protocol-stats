import RssFeedReaderDefault from './type/RssFeedReader';
import {RssPostDefault, RssPostSocialNetworks} from './type/RssPost';
import Parser from 'rss-parser';

export default class implements RssFeedReaderDefault {
  async read(url: string): Promise<RssPostDefault[]> {
    const parser: Parser = new Parser();

    const feed = await parser.parseURL(url);
    return feed.items.map(v => {
      return {
        socialNetwork: RssPostSocialNetworks.twitter,
        title: v.title,
        text: v.content,
        ownerUsername: v.creator,
        link: v.link,
        createdAt: Date.parse(v.pubDate as string),
      } as RssPostDefault;
    });
  }
}