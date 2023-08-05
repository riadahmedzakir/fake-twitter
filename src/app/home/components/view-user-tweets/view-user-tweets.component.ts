import { Component, OnInit } from '@angular/core';
import { ITweet } from 'src/app/core/models/tweet.model';
import { IUser } from 'src/app/core/models/user.model';
import { ExploreService } from '../../services/explore.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-view-user-tweets',
  templateUrl: './view-user-tweets.component.html',
  styleUrls: ['./view-user-tweets.component.scss']
})
export class ViewUserTweetsComponent implements OnInit {
  user!: IUser;
  tweets: ITweet[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false;
  isLoading: boolean = true;

  constructor(
    private exploreService: ExploreService
  ){}

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.tweets.length - 1) {
      this.pageNumber += 1;
      this.getTweets(this.user.id, this.pageNumber, 30);
    }
  }

  getTweets(userId: number, page: number, size: number): void {
    this.isLoading = true;
    this.exploreService.getTweetsByUserId(userId, page, size).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.tweets = [...this.tweets, ...res.tweets];
        this.currentUsers += res.count;
      } else {
        this.theEnd = true;
      }

      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    const userString = localStorage.getItem("current_visited_user") ?? "{}";
    this.user = JSON.parse(userString);

    this.getTweets(this.user.id, this.pageNumber, 30);
  }
}
