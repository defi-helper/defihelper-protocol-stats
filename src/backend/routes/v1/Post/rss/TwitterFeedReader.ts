import RssFeedReaderDefault from "./type/RssFeedReader";
import { RssPostDefault, RssPostSocialNetworks } from "./type/RssPost";
import Parser from "rss-parser";
import axios from "axios";
import ConfigManager from "../../../../shared/ConfigManager";

interface RssFeedItem {
  title: string;
  rss_url: string;
}
export default class implements RssFeedReaderDefault {
  private async fetchRssApiRequest(
    method: string,
    paramsList?: { [key: string]: string | number }
  ): Promise<any> {
    const requestUrl = "https://fetchrss.com/api/v1/" + method;
    const params = {
      ...paramsList,
      auth: ConfigManager.get("FETCH_RSS_COM_TOKEN"),
    };

    const response: any = (await axios.get(requestUrl, { params })).data;
    if (response.success !== true) {
      const message = response.error?.message;
      if (message) {
        throw `fetchrss.com: ${message}`;
      }

      throw "fetchrss.com: unsuccessful, unable to resolve error message";
    }

    return response;
  }

  private async fetchFeedRssUrl(username: string): Promise<string> {
    // encode to hex for more safety for little-known chars
    const feedName = Buffer.from(
      `${RssPostSocialNetworks.twitter}:${username}`,
      "utf8"
    ).toString("hex");

    const availableFeeds: RssFeedItem[] = (
      await this.fetchRssApiRequest("feed/list")
    ).feeds;
    let existingFeed: RssFeedItem | undefined = availableFeeds.find(
      (v) => v.title === feedName
    );

    // create new feed if it doesn't exists
    if (!existingFeed) {
      existingFeed = (
        await this.fetchRssApiRequest("feed/create", {
          "items-per-rss": 25,
          url: "https://twitter.com/" + username,
          title: feedName,
        })
      ).feed as RssFeedItem;
    }

    return existingFeed.rss_url;
  }

  async read(username: string): Promise<RssPostDefault[]> {
    const parser: Parser = new Parser();
    const fetchFeedRssUrlByTwitterUsername = await this.fetchFeedRssUrl(
      username
    );

    const feed = await parser.parseURL(fetchFeedRssUrlByTwitterUsername);
    return feed.items.map((v) => {
      return {
        socialNetwork: RssPostSocialNetworks.twitter,
        title: v.title,
        text: v.content,
        ownerUsername: v.creator,
        link: v.link,
        createdAt: Math.floor(Date.parse(v.pubDate as string) / 1000),
      } as RssPostDefault;
    });
  }
}
