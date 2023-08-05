import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AvatarModule } from 'ngx-avatars';
import { MaterialModule } from '../shared/material.module';
import { ExploreUserComponent } from './components/explore-user/explore-user.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ViewUserFollowersComponent } from './components/view-user-followers/view-user-followers.component';
import { ViewUserFollowingsComponent } from './components/view-user-followings/view-user-followings.component';

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
      },
      {
        path: 'user/:id',
        component: ViewUserComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    FeedsComponent,
    ExploreUserComponent,
    ViewUserComponent,
    ViewUserFollowersComponent,
    ViewUserFollowingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AvatarModule,
    ScrollingModule,
    RouterModule.forChild(routes),
  ],
  providers: [NgModel]
})
export class HomeModule { }
