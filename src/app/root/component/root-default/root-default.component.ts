import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/login/services/login.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      console.log(val);
    });
  }

  setRequiedCookcies(): void {
    this.loginService.setCookie('client_id', "test_123");
    this.loginService.setCookie('client_secret', "test_123");
  }

  ngOnInit(): void {
    const TenantId = this.loginService.getCookies('client_id');

    if (!TenantId) {
      this.setRequiedCookcies();
    } else if (TenantId !== environment.TenantId) {
      this.setRequiedCookcies();
    }
  }
}
