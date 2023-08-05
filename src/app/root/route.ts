// tslint:disable: object-literal-shorthand
import { Route } from '@angular/router';
import { NavigationGuard } from '../shared/services/navigation-guard.service';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const authFailedRedirection: any = [
  {
    redirectTo: '/login',
  }
];

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule),
    canActivate: [NavigationGuard],
    title: 'Login - Fake Twitter',
    data: {
      authFailedRedirection: authFailedRedirection,
    }
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [NavigationGuard],
    title: 'Feed - Fake Twitter',
    data: {
      authFailedRedirection: authFailedRedirection,
    }
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

