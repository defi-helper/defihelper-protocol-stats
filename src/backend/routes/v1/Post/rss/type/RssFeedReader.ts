import {RssPostDefault} from './RssPost';

export default interface RssFeedReaderDefault {
  read(username: string): Promise<RssPostDefault[]>
}
