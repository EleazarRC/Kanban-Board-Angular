import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialCdkModule } from './../material-cdk/material-cdk.module';
import { MatCardModule } from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
/* import { Routes } from '@angular/router'; */



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialCdkModule,
    MatCardModule
  ]
})
export class HomeModule { }
