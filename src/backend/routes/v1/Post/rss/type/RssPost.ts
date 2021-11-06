export enum RssPostSocialNetworks {
  twitter = "Twitter",
  medium = "Medium",
}

export interface RssPostDefault {
  socialNetwork: RssPostSocialNetworks;
  title: string;
  text: string;
  ownerUsername: string;
  link: string;
  createdAt: number; //unix ms
}
