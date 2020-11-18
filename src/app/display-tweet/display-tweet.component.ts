import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { Tweet } from '../tweet'
import { FirebaseService } from '../firebase.service'
@Component({
  selector: 'app-display-tweet',
  templateUrl: './display-tweet.component.html',
  styleUrls: ['./display-tweet.component.css']
})
export class DisplayTweetComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  @Input() tweet: Tweet;
  ngOnInit() {
    this.tweet = {
      ...this.tweet,
      date: this.timeAgo(this.tweet.date.toDate())
    }
    
  }
  timeAgo(val: Date){
    const now = new Date();
    const diff = Math.abs(now.getTime() - val.getTime());
    const diffYear = Math.floor(diff/(1000*3600*24*365))
    const diffWeek = Math.floor(diff/(1000*3600*24*7))
    const diffDay = Math.floor(diff / (1000* 3600 *24));
    const diffHour = Math.floor(diff / (1000 * 3600));
    const diffMinute = Math.floor(diff / (1000 * 60));
    const diffSecond = Math.floor(diff / 1000);

    if(diffSecond < 60){
      return "Just now.";
    }

    if(diffMinute < 60){
      return `${diffMinute} minute(s) ago.`;
    }

    if(diffHour < 24){
      return `${diffHour} hour(s) ago.`;
    }
    if(diffWeek<7)
      return `${diffDay} day(s) ago.`;
    if(diffYear<52)
      return `${diffWeek} week(s) ago.`
    return `${diffYear} year(s) ago.`
  }
  del(){
    if(window.confirm("confirm")){
      this.firebaseService
      .deleteTweet(this.tweet.id)
      .then(()=>{
        alert('deleteComplete')
      })
      .catch(err =>{
        alert("deleteFailure")
      })
    }
  }

}