import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/services/login.service';
import { Navigations } from 'src/app/root/navgiation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  navigation = Navigations;

  constructor(
    private loginService: LoginService
  ) { }

  logout(): void {
    this.loginService.logout();
  }

  ngOnInit(): void {
  }
}
