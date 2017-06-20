import React, { Component } from 'react';
import ProjectItem from './projectitem';

class Project extends Component {
  deleteProject(id){
  // /  console.log(id);
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project =>{
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
        );
      });
    }

    return (
      <div className="project">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Project;
