import { IUser } from "./user.model";

export interface ITweet {
  content: string;
  id: number;
  published: Date;
  user: IUser;
}

export interface IMakeTweetApiResponse {
  message: string;
  tweet: ITweet;
}
export interface ITweetApiResponse {
  count: number;
  tweets: ITweet[];
}

export interface IMyTweetApiResponse {
  count: number;
  my_tweets: ITweet[];
}
