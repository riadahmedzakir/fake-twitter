import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FeedsComponent } from './components/feeds/feeds.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AvatarModule } from 'ngx-avatars';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExploreUserComponent } from './components/explore-user/explore-user.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: FeedsComponent
      },
      {
        path: 'explore',
        component: ExploreUserComponent
      },
      {
        path: 'network',
        loadChildren: () => import('../network/network.module').then(m => m.NetworkModule),
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    FeedsComponent,
    ExploreUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AvatarModule,
    ScrollingModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
