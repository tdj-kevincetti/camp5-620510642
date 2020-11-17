//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from './environment';
//component
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { HomeComponent } from './home/home.component';
import { DisplayTweetComponent } from './display-tweet/display-tweet.component';
import { FirebaseService } from './firebase.service';
//service
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: "time-line",component: TimeLineComponent},
    {path: "add-tweet",component: AddTweetComponent},
  ]),
  ReactiveFormsModule ,
  AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    AddTweetComponent, 
    TimeLineComponent, 
    HomeComponent, DisplayTweetComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }
