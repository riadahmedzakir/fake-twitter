import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';
import { ExploreService } from '../../services/explore.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-view-user-followers',
  templateUrl: './view-user-followers.component.html',
  styleUrls: ['./view-user-followers.component.scss']
})
export class ViewUserFollowersComponent implements OnInit {
  user!: IUser;
  followers: IUser[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false;
  isLoading: boolean = true;

  constructor(
    private exploreService: ExploreService
  ) { }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.followers.length - 1) {
      this.pageNumber += 1;
      this.getFollowings(this.user.id, this.pageNumber, 30);
    }
  }

  getFollowings(userId: number, page: number, size: number): void {
    this.isLoading = true;
    this.exploreService.getFollowersByUserId(userId, page, size).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.followers = [...this.followers, ...res.followers];
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

    this.getFollowings(this.user.id, this.pageNumber, 30);
  }
}
