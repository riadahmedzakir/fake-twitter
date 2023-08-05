import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { ILogin } from 'src/app/core/models/login.model';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { LoginService } from '../../services/login.service';
import { RegistrationComponent } from '../registration/registration.component';
import { ConfiqService } from './../../../shared/services/confiq.service';

@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.scss']
})
export class LoginDefaultComponent {
  patterns = this.confiqService.getPatternConfig();
  loginDisabled = false;
  isInactive: boolean = false;
  user: ILogin = {
    email: '',
    password: ''
  }

  constructor(
    private confiqService: ConfiqService,
    private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog,
    private snackbarService: SnackbarService
  ) { }



  login(): void {
    this.loginDisabled = true;

    this.loginService.getToken('password', this.user).pipe(first()).subscribe(res => {
      if (res.error) {
        this.snackbarService.openSnackBar(res.error);
        this.loginDisabled = false;
        return;
      }

      if (res) {
        const accessToken = res.token;
        const refreshToken = res.token;

        this.loginService.setCookie('access_token', accessToken);
        this.loginService.setCookie('refresh_token', refreshToken);

        localStorage.setItem('access_token', accessToken);

        const userInfo = this.loginService.getDecodedAccessToken(accessToken);
        const userId = userInfo.id;
        this.loginService.setCookie('user_id', userId);
        const isApplicationUser = userId ? true : false;

        if (isApplicationUser) {
          this.router.navigate(['/home']);
        }
      }

      this.loginDisabled = false;
    });
  }

  openRegistrationModal(): void {
    this.dialog.open(RegistrationComponent, {
      width: '35vw',
      data: {},
    });
  }
}
