import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../services/network.service';
import { first } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-network-followers',
  templateUrl: './network-followers.component.html',
  styleUrls: ['./network-followers.component.scss']
})
export class NetworkFollowersComponent implements OnInit {
  followers: IUser[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false

  constructor(
    private networkService: NetworkService,
    private loginService: LoginService
  ) { }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.followers.length - 1) {
      this.pageNumber += 1;
      this.getFollowers(this.pageNumber, 30);
    }
  }

  getFollowers(page: number, size: number): void {
    const userString = this.loginService.getCookies('user_id');
    const userId = parseInt(userString);
    this.networkService.getFollowers(userId).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.followers = [...this.followers, ...res.followers];
        this.currentUsers += res.count;
      } else {
        this.theEnd = true;
      }
    });
  }

  ngOnInit(): void {
    this.getFollowers(this.pageNumber, 30);
  }
}
