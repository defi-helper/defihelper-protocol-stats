import SocialNetworkFollowersProvider, {SocialNetworkEntityDefault} from "./type/SocialNetworkFollowersProvider";
import TelegramBot from 'node-telegram-bot-api';
import ConfigManager from "../../../../shared/ConfigManager";

export default class implements SocialNetworkFollowersProvider {
  async get(id: string | number): Promise<SocialNetworkEntityDefault> {
    const telegramBot =
      new TelegramBot(
        ConfigManager.get('TELEGRAM_BOT_TOKEN'), {polling: false}
      )
    ;

    return {
      followers: await telegramBot.getChatMembersCount('@'+id),
      anotherProperty: null,
    };
  }
}