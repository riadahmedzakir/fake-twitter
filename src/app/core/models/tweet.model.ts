import { IUser } from "./user.model";

export interface ITweet {
  content: string;
  id: number;
  published: Date;
  user: IUser;
}

export interface ITweetApiResponse {
  count: number;
  tweets: ITweet[];
}
