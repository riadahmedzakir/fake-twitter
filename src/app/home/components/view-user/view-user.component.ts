import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { IUser } from 'src/app/core/models/user.model';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ExploreService } from '../../services/explore.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user!: IUser;

  constructor(
    private exploreService: ExploreService,
    private snackbarService: SnackbarService
  ){}

  follow(): void {
    this.exploreService.followUser(this.user.id).pipe(first()).subscribe(res => {
      this.snackbarService.openSnackBar(res.resp);
    });
  }

  ngOnInit(): void {
    const userString = localStorage.getItem("current_visited_user") ?? "{}";
    this.user = JSON.parse(userString);
  }
}
