import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/service/reddit.service';
import { DetailPage } from '../details/details'; 


@Component({
    selector: 'reddit',
    templateUrl: 'reddit.html'
})
export class RedditPage implements OnInit {

  items : any;

  constructor(public navCtrl: NavController, private reddit: RedditService) {

  }

  ngOnInit(){
   // console.log('service ready');
   this.getPosts('sports', 5);
  }

  getPosts(category, limit){
    this.reddit.getPosts(category, limit).subscribe(res => {
      this.items = res.data.children;
    });
  }

  viewItem(item){
    this.navCtrl.push(DetailPage, {
      item : item
    });
  }


}
