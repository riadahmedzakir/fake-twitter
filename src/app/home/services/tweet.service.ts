import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { IMakeTweetApiResponse, IMyTweetApiResponse, ITimelineApiResponse, ITimelineView } from 'src/app/core/models/tweet.model';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  getTweet(page: number = 1, size: number = 30): Observable<IMyTweetApiResponse> {
    return this.http.get<IMyTweetApiResponse>(environment.ApiBaseUrl + `/my-tweets?page=${page}&size=${size}`, {});
  }

  getTimeline(page: number = 1, size: number = 30): Observable<ITimelineView> {
    return new Observable(observer => {
      this.http.get<ITimelineApiResponse>(environment.ApiBaseUrl + `/timeline?page=${page}&size=${size}`, {})
        .pipe(first()).subscribe(response => {
          const timelineViewModel: ITimelineView = {
            count: response.count,
            timeline: []
          };

          response.timeline.forEach(tweet => {

            timelineViewModel.timeline.push({
              id: tweet.id,
              content: tweet.content,
              published: tweet.published,
              color: this.utilityService.getRandomColor(),
              user: tweet.user
            });
          });

          observer.next(timelineViewModel);
        }, error => {
          observer.next(error.error);
        });
    });
  }

  makeTweet(tweet: string): Observable<IMakeTweetApiResponse> {
    return this.http.post<IMakeTweetApiResponse>(environment.ApiBaseUrl + `/tweet`, {
      content: tweet
    });
  }
}
