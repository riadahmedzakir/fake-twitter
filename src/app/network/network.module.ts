import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkContainerComponent } from './components/network-container/network-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material.module';
import { NetworkFollowersComponent } from './components/network-followers/network-followers.component';
import { NetworkFollowingComponent } from './components/network-following/network-following.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

const routes: Routes = [
  {
    path: '',
    component: NetworkContainerComponent,
  }
];


@NgModule({
  declarations: [
    NetworkContainerComponent,
    NetworkFollowersComponent,
    NetworkFollowingComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ScrollingModule,
    RouterModule.forChild(routes),
  ]
})
export class NetworkModule { }
