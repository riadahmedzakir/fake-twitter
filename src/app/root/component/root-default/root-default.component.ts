import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { map as _map, find as _find } from 'lodash';

import { ConfiqService } from './../../../shared/services/confiq.service';
import { environment } from './../../../../environments/environment';
import { Navigations } from '../../navgiation';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss']
})
export class RootDefaultComponent implements OnInit {
  private navigation = Navigations;

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
