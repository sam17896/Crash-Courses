import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers : [PostsService]
})
export class UserComponent  {
   name : string; 
   email : string;
   address : address;
   hobbies : string[];
   showHobbies : boolean;
   posts : Post[]; 

   constructor(private postService : PostsService){
        this.name = 'John Doe'; 
        this.email = 'john@gmail.com';
        this.address = {
            street : '12 Main st',
            city : 'Boston',
            state : 'MA'
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
        this.postService.getPosts().subscribe(posts=>{
            console.log(posts);
            this.posts = posts;
        });
    }

    toggleHobbies(){
        if(!this.showHobbies){
            this.showHobbies = true;
        } else {
            this.showHobbies = false;
        }
    }

    addHobby(hobby: string){
        console.log(hobby);
        this.hobbies.push(hobby);
    }

    deleteHobby(i){
        this.hobbies.splice(i,1);
    }

  }


interface address{
    street : string;
    city : string;
    state : string;
}

interface Post{
    id: number;
    title : String;
    body: String;
}