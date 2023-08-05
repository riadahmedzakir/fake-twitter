import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { NetworkService } from '../../services/network.service';

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
    private router: Router
  ) { }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.followers.length - 1) {
      this.pageNumber += 1;
      this.getFollowers(this.pageNumber, 30);
    }
  }

  getFollowers(page: number, size: number): void {
    this.networkService.getFollowers(page, size).pipe(first()).subscribe(res => {
      if (res.count !== 0) {
        this.followers = [...this.followers, ...res.followers];
        this.currentUsers += res.count;
      } else {
        this.theEnd = true;
      }
    });
  }

  viewUser(user: IUser): void {
    localStorage.setItem("current_visited_user", JSON.stringify(user));

    this.router.navigate([`home/user/${user.id}`]);
  }

  ngOnInit(): void {
    this.getFollowers(this.pageNumber, 30);
  }
}
