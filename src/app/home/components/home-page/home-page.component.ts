import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { Navigations } from 'src/app/root/navgiation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  private mediaSubscription: Subscription | undefined;

  navigation = Navigations;
  openNav = true;
  isSmallScreen = false;
  mode: MatDrawerMode = 'side';

  constructor(
    private loginService: LoginService,
    private media: MediaObserver
  ) { }

  detectDevice(): void {
    this.mediaSubscription = this.media
      .asObservable()
      .subscribe((change) => {
        if (change[0].mqAlias === 'xs' || change[0].mqAlias == 'sm' || change[0].mqAlias == 'md') {
          this.isSmallScreen = true;
          this.sidenav?.close();
          this.mode = 'over';
        } else {
          this.isSmallScreen = false;
          this.sidenav?.open();
          this.mode = 'side';
        }
      });
  }

  logout(): void {
    this.loginService.logout();
  }

  ngOnInit(): void {
    this.detectDevice();
  }

  ngOnDestroy(): void {
    this.mediaSubscription?.unsubscribe();
  }
}
