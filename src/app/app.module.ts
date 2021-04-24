import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
 
 
import { ShortenPipe } from './shorten.pipe';
import { WorkComponent } from './work/work.component';
 
 

  
@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    WorkComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    RouterModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
