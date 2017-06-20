import React, { Component } from 'react';

class ProjectItem extends Component {
  handleDelete(id){
    //console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="project">
        <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)}> X </a>
      </li>
    );
  }
}

export default ProjectItem;
