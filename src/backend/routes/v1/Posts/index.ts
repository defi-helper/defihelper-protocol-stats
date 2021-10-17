import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TwitterFeedReader from "./rss/TwitterFeedReader";
import MediumFeedReader from "./rss/MediumFeedReader";
import ConfigManager from "../../../shared/ConfigManager";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const twitterPosts =
    await (new TwitterFeedReader()).read(ConfigManager.get('TWITTER_RSS_FEED'));
  const mediumPosts =
    await (new MediumFeedReader()).read(ConfigManager.get('MEDIUM_RSS_FEED'));

  const posts = [ ...twitterPosts, ...mediumPosts ]
    .sort((a,b) => a.createdAt < b.createdAt ? 1 : -1);

  return res
    .status(OK)
    .json(posts);
}
