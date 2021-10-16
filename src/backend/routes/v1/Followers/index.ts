import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import TelegramProvider from "./followers/TelegramProvider";
import ConfigManager from "../../../shared/ConfigManager";
const { OK } = StatusCodes;


export default async (req: Request, res: Response) => {
  return res
    .status(OK)
    .json({
      telegram: await (new TelegramProvider()).get(ConfigManager.get('TELEGRAM_CHANNEL_USERNAME'))
    });
}
