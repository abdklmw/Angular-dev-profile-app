//profile.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [NgOptimizedImage],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent{
  name: string = "Michael Whitaker";
  role: string = "Software Developer Consultant";
  location: string = "Wylie, Texas";
  profileImg: string = "https://static-assets.codecademy.com/Courses/learn-angular/01-angular-introduction/images/profile-picture.jpg"
  linkedinUrl: string = "https://www.linkedin.com/in/it-whitaker";
  githubUrl: string = "https://github_profile_url.com";
}