import {RssPostDefault} from './RssPost';

export default interface RssFeedReaderDefault {
  read(url: string): Promise<RssPostDefault[]>
}
