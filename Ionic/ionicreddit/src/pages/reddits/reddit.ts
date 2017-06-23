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

  ngOnInit(){
   // console.log('service ready');
   this.getPosts(this.category, this.limit);
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

  changeCategory(){
    this.getPosts(this.category, this.limit);  
  }


}
