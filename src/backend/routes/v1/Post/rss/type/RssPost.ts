export enum RssPostSocialNetworks {
  twitter = 'twitter',
  medium = 'medium',
}

export interface RssPostDefault {
  socialNetwork: RssPostSocialNetworks;
  title: string;
  text: string;
  ownerUsername: string;
  link: string;
  createdAt: number; //unix ms
}
