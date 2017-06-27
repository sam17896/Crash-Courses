import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Tasks = new Mongo.Collection('tasks');

Template.tasks.helpers({
  tasks : function(){
    return Tasks.find({}, {sort: {created_at: -1}});
  }
});

Template.tasks.events({
  "submit .add-task" : function(event){
    var name = event.target.name.value;
    
    Tasks.insert({
      name: name,
      created_at : new Date()
    });
    
    
    event.target.name.value = "";
    return false;
  } 
});