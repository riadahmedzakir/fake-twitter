import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { LoginService } from '../../services/login.service';
import { RegistrationComponent } from '../registration/registration.component';
import { ConfiqService } from './../../../shared/services/confiq.service';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.scss']
})
export class LoginDefaultComponent implements OnInit {
  patterns = this.confiqService.getPatternConfig();
  loginDisabled = false;
  isInactive: boolean = false;
  user: IUser = {
    email: '',
    password: ''
  }

  constructor(
    private confiqService: ConfiqService,
    private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  login(): void {
    this.loginDisabled = true;

    this.loginService.getToken('password', this.user).pipe(first()).subscribe(res => {
      if (res) {
        const accessToken = res.token;
        const refreshToken = res.token;

        this.loginService.setCookie('access_token', accessToken);
        this.loginService.setCookie('refresh_token', refreshToken);

        const userInfo = this.loginService.getDecodedAccessToken(accessToken);
        const userId = userInfo.id;
        this.loginService.setCookie('user_id', userId);
        const isApplicationUser = userId ? true : false;

        if (isApplicationUser) {
          this.router.navigate(['/home']);
        }
      } else {
        console.log(res);
      }

      this.loginDisabled = false;
    });
  }

  openRegistrationModal(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: '35vw',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {

  }
}
