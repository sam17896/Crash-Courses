import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Todo from './components/todos';
import Project from './components/Project';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      dataType: 'json',
      cache : true,
      success: function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        });
      }.bind(this),
      error : function(xhr, status,err){
        console.log(err);
      }
    });
  }

  componentWillMount(){
    this.getTodos();
    this.setState({projects : [
      {
        id: uuid.v4(),
        title : 'Business Website',
        category : 'Web Design'
      },
      {
        id: uuid.v4(),
        title : 'Social App',
        category : 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title : 'Ecommerce Shopping Cart',
        category : 'Web Development'
      }
    ]});
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    //console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDelete(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x=> x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Project projects={this.state.projects} onDelete={this.handleDelete.bind(this)}/>
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
