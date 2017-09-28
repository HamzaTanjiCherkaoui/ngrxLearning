import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  declarations: [
  AppComponent,
  ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
  HttpModule,
  NoopAnimationsModule,
  RouterModule.forRoot([
 
      // { path: 'talk/:id', component: TalkDetailsComponent }
      ], {useHash: true})
  ],
  bootstrap: [AppComponent]
  })


export class AppModule { }
