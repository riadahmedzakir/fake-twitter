import { Component } from '@angular/core';
import { TweetService } from '../../services/tweet.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-make-tweet',
  templateUrl: './make-tweet.component.html',
  styleUrls: ['./make-tweet.component.scss']
})
export class MakeTweetComponent {
  tweet: string = '';
  isLoading: boolean = false;

  constructor(
    private tweetService: TweetService,
    private snackbarService: SnackbarService
  ) { }

  makeTweet(): void {
    this.isLoading = true;

    this.tweetService.makeTweet(this.tweet).pipe(first()).subscribe(res => {
      this.snackbarService.openSnackBar(res.message);
      this.tweet = '';
      this.isLoading = false;
    });
  }
}
