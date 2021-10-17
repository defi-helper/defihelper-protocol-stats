import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TelegramProvider from "./followers/TelegramProvider";
import ApiV1BadRequestException from "../../../shared/exceptions/ApiV1BadRequestException";
const { OK } = StatusCodes;

export default async (req: Request, res: Response) => {
  const telegramChannel = req.query.telegramChannel as string|undefined;

  if(telegramChannel === undefined) {
    throw new ApiV1BadRequestException;
  }

  return res
    .status(OK)
    .json({
      telegram:
        await (new TelegramProvider()).get(telegramChannel)
    });
}
