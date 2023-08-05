import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyTweetApiResponse } from 'src/app/core/models/tweet.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(
    private http: HttpClient
  ) { }

  getTweet(page: number = 1, size: number = 30): Observable<IMyTweetApiResponse> {
    return this.http.get<IMyTweetApiResponse>(environment.ApiBaseUrl + `/my-tweets?page=${page}&size=${size}`, {});
  }
}
