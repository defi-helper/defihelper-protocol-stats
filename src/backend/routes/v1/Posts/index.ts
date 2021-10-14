import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TwitterFeedReader from "./rss/TwitterFeedReader";
import MediumFeedReader from "./rss/MediumFeedReader";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const twitterPosts =
    await (new TwitterFeedReader()).read('https://rss.app/feeds/16mc8dXw4wDlWdOQ.xml');
  const mediumPosts =
    await (new MediumFeedReader()).read('https://bondappetit.medium.com/feed');

  const posts = [ ...twitterPosts, ...mediumPosts ]
    .sort((a,b) => a.createdAt < b.createdAt ? 1 : -1);

  return res
    .status(OK)
    .json(posts);
}
