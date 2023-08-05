import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { ITweet } from 'src/app/core/models/tweet.model';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline: ITweet[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false;
  isLoading: boolean = true;

  constructor(
    private tweetService: TweetService
  ) { }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.timeline.length - 1) {
      this.pageNumber += 1;
      this.getTimeline(this.pageNumber, 30);
    }
  }

  getTimeline(page: number, size: number): void {
    this.tweetService.getTimeline(page, size).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.timeline = [...this.timeline, ...res.timeline];
        this.currentUsers += res.count;
      } else {
        this.theEnd = true;
      }

      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.getTimeline(this.pageNumber, 30);
  }
}
