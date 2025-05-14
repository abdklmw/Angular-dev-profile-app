//app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, ProjectComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Developer Portfolio';
}