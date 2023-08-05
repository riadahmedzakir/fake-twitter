import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserApiResponse, IUserSearchApiResponse } from 'src/app/core/models/user.model';
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
