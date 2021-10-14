export interface SocialNetworkEntityDefault {
  anotherProperty: string|null;
  followers: number;
}

export default interface SocialNetworkFollowersProvider {
  get(id: string|number): Promise<SocialNetworkEntityDefault>
}
