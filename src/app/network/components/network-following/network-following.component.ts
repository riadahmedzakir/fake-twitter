import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { first } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-network-following',
  templateUrl: './network-following.component.html',
  styleUrls: ['./network-following.component.scss']
})
export class NetworkFollowingComponent implements OnInit {
  followings: IUser[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false

  constructor(
    private networkService: NetworkService,
    private loginService: LoginService
  ) {

  }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.followings.length - 1) {
      this.pageNumber += 1;
      this.getFollowings(this.pageNumber, 30);
    }
  }

  getFollowings(page: number, size: number): void {
    this.networkService.getFollowings(page, size).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.followings = [...this.followings, ...res.followings];
        this.currentUsers += res.count;
      } else {
        this.theEnd = true;
      }
    });
  }

  unfollow(userId: number): void {
    this.pageNumber = 0;

    this.networkService.unFollow(userId).pipe(first()).subscribe(res => {
      this.followings = [];
      this.getFollowings(this.pageNumber, 30);
    });
  }

  ngOnInit(): void {
    this.getFollowings(this.pageNumber, 30);
  }
}
