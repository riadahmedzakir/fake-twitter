import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweetApiResponse } from 'src/app/core/models/tweet.model';
import { IFollowersApiResponse, IFollowingsApiResponse, IUserApiResponse, IUserSearchApiResponse } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(
    private http: HttpClient
  ) { }

  getExlporableUsers(page: number = 1, size: number = 10): Observable<IUserApiResponse> {
    return this.http.get<IUserApiResponse>(environment.ApiBaseUrl + `/users?page=${page}&size=${size}`, {});
  }

  getFollowersByUserId(userId: number, page: number = 1, size: number = 30): Observable<IFollowersApiResponse> {
    return this.http.get<IFollowersApiResponse>(environment.ApiBaseUrl + `/users/${userId}/followers?page=${page}&size=${size}`, {});
  }

  getFollowingsByUserId(userId: number, page: number = 1, size: number = 30): Observable<IFollowingsApiResponse> {
    return this.http.get<IFollowingsApiResponse>(environment.ApiBaseUrl + `/users/${userId}/following?page=${page}&size=${size}`, {});
  }

  getTweetsByUserId(userId: number, page: number = 1, size: number = 30): Observable<ITweetApiResponse> {
    return this.http.get<ITweetApiResponse>(environment.ApiBaseUrl + `/users/${userId}/tweets?page=${page}&size=${size}`, {});
  }

  searchUser(userName: string): Observable<IUserSearchApiResponse> {
    return this.http.post<IUserSearchApiResponse>(environment.ApiBaseUrl + `/search`, {
      token: userName
    });
  }

  followUser(userId: number): Observable<any> {
    return this.http.post<any>(environment.ApiBaseUrl + `/follow`, {
      user_id: userId
    });
  }
}
