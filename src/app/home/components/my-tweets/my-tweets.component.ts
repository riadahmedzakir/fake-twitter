import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ITweet } from 'src/app/core/models/tweet.model';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.scss']
})
export class MyTweetsComponent implements OnInit {
  tweets: ITweet[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false;
  isLoading: boolean = true;

  constructor(
    private tweetService: TweetService
  ) { }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.tweets.length - 1) {
      this.pageNumber += 1;
      this.getTweets(this.pageNumber, 30);
    }
  }

  getTweets(page: number, size: number): void {
    this.tweetService.getTweet(page, size).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.tweets = [...this.tweets, ...res.my_tweets];
        this.currentUsers += res.count;
      } else {
        this.theEnd = true;
      }

      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.getTweets(this.pageNumber, 30);
  }
}
