import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Subscription, debounceTime, distinctUntilChanged, first, skip } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { ExploreService } from '../../services/explore.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-explore-user',
  templateUrl: './explore-user.component.html',
  styleUrls: ['./explore-user.component.scss']
})
export class ExploreUserComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport | undefined;

  onModelChangeSubject = new Subject<string>();

  users: IUser[] = [];
  currentUsers: number = 0;
  pageNumber: number = 1;
  theEnd: boolean = false
  isLoading: boolean = true;
  search: string = "";

  constructor(
    private exploreService: ExploreService,
    private snackBar: MatSnackBar,
    private ngModel: NgModel
  ) { }

  getUsers(page: number, size: number): void {
    this.isLoading = true;
    this.exploreService.getExlporableUsers(page, size)
      .pipe(first())
      .subscribe(res => {
        if (res.count !== 0) {
          this.users = [...this.users, ...res.users];
          this.currentUsers += res.count;
        } else {
          this.theEnd = true;
        }

        this.isLoading = false;
      });
  }

  scrollhandler(event: any): void {
    if (this.theEnd) { return; }
    if (this.search) { return; }

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
    this.exploreService.followUser(userId).pipe(first()).subscribe(res => {
      this.openSnackBar(res.resp);
    });
  }

  searchUsers(userName: string): void {
    this.exploreService.searchUser(userName).pipe(first()).subscribe(res => {
      this.users = res.search_results;
    });
  }

  ngOnInit(): void {
    this.getUsers(this.pageNumber, 30);

    this.onModelChangeSubject.pipe(debounceTime(500)).subscribe(event => {
      this.search = event;
      if (this.search) {
        this.searchUsers(this.search);
      } else {
        this.pageNumber = 1;
        this.users = [];
        this.getUsers(this.pageNumber, 30);
      }
    });
  }
}
