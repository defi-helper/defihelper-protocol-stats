import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TwitterFeedReader from "./rss/TwitterFeedReader";
import MediumFeedReader from "./rss/MediumFeedReader";
import {URL} from "url";
import ApiV1BadRequestException from "../../../shared/exceptions/ApiV1BadRequestException";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const { twitterRssFeedUrl, mediumRssFeedUrl } = req.query;

  try {
    new URL(twitterRssFeedUrl as string);
    new URL(mediumRssFeedUrl as string);
  } catch {
    throw new ApiV1BadRequestException;
  }

  const twitterPosts =
    await (new TwitterFeedReader()).read(twitterRssFeedUrl as string);
  const mediumPosts =
    await (new MediumFeedReader()).read(mediumRssFeedUrl as string);

  const posts = [ ...twitterPosts, ...mediumPosts ]
    .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);

  return res.status(OK).json(posts);
}
