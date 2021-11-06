import StatusCodes from "http-status-codes";
import { Request, Response } from "express";
import TwitterFeedReader from "./rss/TwitterFeedReader";
import MediumFeedReader from "./rss/MediumFeedReader";
import ApiV1BadRequestException from "../../../shared/exceptions/ApiV1BadRequestException";
import ApiV1InternalErrorException from "../../../shared/exceptions/ApiV1InternalErrorException";
import { RssPostSocialNetworks } from "./rss/type/RssPost";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const { provider, username } = req.params;

  let readerInstance;
  switch (provider.toLowerCase()) {
    case RssPostSocialNetworks.medium.toLowerCase():
      readerInstance = new MediumFeedReader();
      break;

    case RssPostSocialNetworks.twitter.toLowerCase():
      readerInstance = new TwitterFeedReader();
      break;

    default:
      throw new ApiV1BadRequestException("Unknown provider: " + provider);
  }

  let posts;
  try {
    posts = await readerInstance.read(username);
  } catch (e) {
    throw new ApiV1InternalErrorException(e as string);
  }

  return res.status(OK).json(posts);
};
