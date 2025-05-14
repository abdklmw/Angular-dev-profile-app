import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects: object[] = [
    {id: 1, name: "Project 1", description: "Description of Project 1", status: "Completed"},
    {id: 2, name: "Project 2", description: "Description of Project 2", status: "In Progress"},
    {id: 3, name: "Project 3", description: "Description of Project 3", status: "Completed"},
    {id: 4, name: "Project 4", description: "Description of Project 4", status: "In Progress"},
    {id: 5, name: "Project 5", description: "Description of Project 5", status: "Completed"},
    {id: 6, name: "Project 6", description: "Description of Project 6", status: "Completed"}
  ]
}
