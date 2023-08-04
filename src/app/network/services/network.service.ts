import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFollowersApiResponse, IFollowingsApiResponse } from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private http: HttpClient
  ) { }

  getFollowers(page: number = 1, size: number = 30): Observable<IFollowersApiResponse> {
    return this.http.get<IFollowersApiResponse>(environment.ApiBaseUrl + `/followers?page=${page}&size=${size}`, {});
  }

  getFollowings(page: number = 1, size: number = 30): Observable<IFollowingsApiResponse> {
    return this.http.get<IFollowingsApiResponse>(environment.ApiBaseUrl + `/following?page=${page}&size=${size}`, {});
  }

  unFollow(userId: number): Observable<any> {
    return this.http.post<any>(environment.ApiBaseUrl + `/unfollow`, {
      user_id: userId
    });
  }
}
