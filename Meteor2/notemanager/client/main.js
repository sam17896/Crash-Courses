import { Template } from 'meteor/templating';
import {Notes} from '../lib/collection'
import './main.html';

Template.body.helpers({
    /*notes:[
        {text:"My Note 1"},
        {text:"My Note 2"},
        {text:"My Note 3"}
    ]
*/
    notes(){
        return Notes.find({});
    }
});

Template.add.events({
    'submit .add-form' :function(){
        event.preventDefault();
        
        //Get Input Value
        const target = event.target;
        const text =target.text.value;

        //Inset into Collection
        Notes.insert({
            text:text,
            createdAt: new Date()
        });

        target.text.value = '';


        return false;
    }
});

Template.note.events({
    'click .delete-note':function(){
        Notes.remove(this._id);
        return false;
    }
});