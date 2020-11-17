//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//firebase

//component
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { HomeComponent } from './home/home.component';
//service
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: "time-line",component: TimeLineComponent},
    {path: "add-tweet",component: AddTweetComponent},
  ]) 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    AddTweetComponent, 
    TimeLineComponent, 
    HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
