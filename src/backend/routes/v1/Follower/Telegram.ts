import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TelegramProvider from './followers/TelegramProvider';
import ApiV1InternalErrorException from "../../../shared/exceptions/ApiV1InternalErrorException";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const {username} = req.params;

  let response;
  try {
    response = await (new TelegramProvider()).get(username);
  } catch {
    throw new ApiV1InternalErrorException();
  }

  return res
    .status(OK)
    .json(response);
}
