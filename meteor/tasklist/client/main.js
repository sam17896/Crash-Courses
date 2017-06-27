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
    
    Meteor.call('addTask', name);
    
    
    event.target.name.value = "";
    return false;
  } , 
  "click .delete-task" : function(event){
    if(confirm("Are you sure you want to delete")){
      Meteor.call('deleteTask', this._id);
    }
    return false;
  }
});

