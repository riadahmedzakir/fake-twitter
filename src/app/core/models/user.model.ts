export interface IUser {
  active: boolean;
  email: string;
  id: number;
  join_date: Date;
  username: string;
}

export interface IUserApiResponse {
  count: number;
  users: IUser[];
}

export interface IUserSearchApiResponse {
  count: number;
  search_results: IUser[];
}

export interface IFollowingsApiResponse {
  count: number;
  followings: IUser[];
}

export interface IFollowersApiResponse {
  count: number;
  followers: IUser[];
}
