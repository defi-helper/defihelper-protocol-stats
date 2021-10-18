import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TwitterFeedReader from './rss/TwitterFeedReader';
import MediumFeedReader from './rss/MediumFeedReader';
import {URL} from 'url';
import ApiV1BadRequestException from '../../../shared/exceptions/ApiV1BadRequestException';
import ApiV1InternalErrorException from "../../../shared/exceptions/ApiV1InternalErrorException";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const { username } = req.params;

  let posts;
  try {
    posts = await (new MediumFeedReader()).read(username);
  } catch {
    throw new ApiV1InternalErrorException;
  }

  return res.status(OK).json(posts);
}
