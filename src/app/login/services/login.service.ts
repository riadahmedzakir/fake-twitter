import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { map as _map, find as _find } from 'lodash';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IRegistration } from 'src/app/core/models/registration.model';
import { IUser } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  getCookies(type: string): string {
    const currentCookies = _map(document.cookie.split(';'), (o: string) => o.trim());
    const regex = new RegExp(type, 'i');
    let requestCookieValue = null;

    _find(currentCookies, (o: string) => {
      if (o.match(regex)) {
        requestCookieValue = o.split('=')[1];
      }
    });

    return requestCookieValue ?? '';
  }

  setCookie(type: string, value: string): void {
    document.cookie = `${type}=${value}`;
  }

  getGetIdentity(): Observable<any> {
    return this.http.get<any>(environment.ApiBaseUrl + '/GetIdentity', {});
  }

  getToken(granttype: string, user?: IUser): Observable<any> {
    return new Observable(observer => {
      switch (granttype) {
        case 'refresh_token':

          const refreshTokenData = `client_id=${this.getCookies('client_id')}&client_secret=${this.getCookies('client_secret')}&grant_type=refresh_token&refresh_token=${this.getCookies('refresh_token')}`;
          this.http.post<any>(environment.ApiBaseUrl + '/login', refreshTokenData, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }).pipe(first()).subscribe(res => {
            observer.next(res);
          }, error => {
            observer.next(false);
          });

          break;
        case 'password':
          this.http.post<any>(environment.ApiBaseUrl + '/login', user).pipe(first()).subscribe(res => {
            observer.next(res);
          }, error => {
            observer.next(false);
          });
          break;
        default:
          observer.next(false);
      }
    });
  }

  getDecodedAccessToken(token: string): any {
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }
}
