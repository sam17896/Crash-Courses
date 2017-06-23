import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/service/reddit.service';
import { RedditPage } from '../reddits/reddit';

@Component({
    templateUrl: 'settings.html'
})
export class SettingPage{

  category: any;
  limit:any;

  constructor(public navCtrl: NavController, private reddit: RedditService) {
    this.getDefaults();
  }

  getDefaults(){
    
    if(localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if(localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }

  }

  setDefaults(){
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditPage);

  }

}
