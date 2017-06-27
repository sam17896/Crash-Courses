Tasks = new Mongo.Collection('tasks');

Meteor.publish('tasks' ,function(){
  return Tasks.find();
});





Meteor.methods({
  addTask : function(name){
    if(!Meteor.userId()){
      throw new Meteor.Error("You don't hava access");
    }

    Tasks.insert({
      name: name,
      created_at : new Date(),
      userId: Meteor.userId()
    });

  },
  deleteTask : function(taskId){
    Tasks.remove(taskId);
  }

});