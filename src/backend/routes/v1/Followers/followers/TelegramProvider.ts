import SocialNetworkFollowersProvider, {SocialNetworkEntityDefault} from "./type/SocialNetworkFollowersProvider";
import TelegramBot from 'node-telegram-bot-api';

export default class implements SocialNetworkFollowersProvider {
  async get(id: string | number): Promise<SocialNetworkEntityDefault> {
    const telegramBot =
      new TelegramBot(
        '1223767470:AAGRIHH6OkJd2unqkMTUe7v3GPOoPsWwZ1Y',
        {polling: false}
      )
    ;

    return {
      followers: await telegramBot.getChatMembersCount('@'+id),
      anotherProperty: null,
    };
  }
}