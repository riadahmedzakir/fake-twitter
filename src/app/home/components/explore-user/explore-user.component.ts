import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, first } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ExploreService } from '../../services/explore.service';

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
    private snackbarService: SnackbarService,
    private router: Router
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

        this.isLoading = false;
      });
  }

  searchUsers(userName: string): void {
    this.exploreService.searchUser(userName).pipe(first()).subscribe(res => {
      this.users = res.search_results;
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

  follow(userId: number): void {
    this.exploreService.followUser(userId).pipe(first()).subscribe(res => {
      this.snackbarService.openSnackBar(res.resp);
    });
  }

  viewUser(user: IUser): void {
    localStorage.setItem("current_visited_user", JSON.stringify(user));

    this.router.navigate([`home/user/${user.id}`]);
  }

  ngOnInit(): void {
    this.getUsers(this.pageNumber, 30);

    this.onModelChangeSubject.pipe(debounceTime(500)).subscribe(event => {
      this.search = event;
      this.isLoading = true;

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
