import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { ExploreService } from '../../services/explore.service';

@Component({
  selector: 'app-explore-user',
  templateUrl: './explore-user.component.html',
  styleUrls: ['./explore-user.component.scss']
})
export class ExploreUserComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport | undefined;

  users: IUser[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false

  constructor(
    private exploreService: ExploreService,
    private snackBar: MatSnackBar,
  ) { }

  getUsers(page: number, size: number): void {
    this.exploreService.getExlporableUsers(page, size)
      .pipe(first())
      .subscribe(res => {
        if (res.count !== 0) {
          this.users = [...this.users, ...res.users];
          this.currentUsers += res.count;
        } else {
          this.theEnd = true;
        }
      });
  }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (event === this.users.length - 1) {
      this.pageNumber += 1;
      this.getUsers(this.pageNumber, 30);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 3000
    });
  }

  follow(userId: number): void {
    console.log(userId);
    this.exploreService.followUser(userId).pipe(first()).subscribe(res => {
      this.openSnackBar(res.resp);
    });
  }

  ngOnInit(): void {
    this.getUsers(this.pageNumber, 30);
  }
}
