# Developer Portfolio

This is an Angular-based web application designed to showcase a developer's profile and projects. The application provides a clean, modern interface to display personal information, social media links, and a portfolio of projects with their respective statuses.

## Features

- **Profile Section**: Displays the developer's name, role, location, and profile image, with a link to their LinkedIn profile.
- **Projects Section**: Lists multiple projects, each with a name, description, and status (Completed or In Progress).
- **Responsive Design**: Adapts to various screen sizes, ensuring usability on both desktop and mobile devices.
- **Angular Components**: Built with standalone components for modularity and maintainability.
- **Optimized Images**: Uses Angular's `NgOptimizedImage` for efficient image loading.

## Project Structure

The project is organized into the following key files and components:

### Components
- **AppComponent** (`src/app/app.component.ts`): The root component that serves as the entry point, rendering the main layout and importing the `ProfileComponent`. It includes a title ("Developer Portfolio") and a styled layout with an Angular logo, social media links, and resource links.
- **ProfileComponent** (`src/app/profile/profile.component.ts`): Displays the developer's profile information, including name, role, location, profile image, and a LinkedIn link.
- **ProjectComponent** (`src/app/project/project.component.ts`): Renders a list of projects, each with a name, description, and status, styled as cards.

### Templates
- **app.component.html**: Defines the main layout, including the Angular logo, a greeting with the app title, resource links (e.g., Angular Docs, Tutorials), and social media icons (GitHub, Twitter, YouTube). It uses CSS custom properties for gradients and responsive design.
- **profile.component.html**: Structures the profile section with an image, name, role, location, and a LinkedIn button.
- **project.component.html**: Uses Angular's `@for` directive to iterate over a list of projects, displaying each as a card with conditional styling based on project status.

### Configuration
- **app.config.ts**: Configures the application with zone change detection and router providers.
- **app.routes.ts**: Defines the application's routes (currently empty, ready for expansion).

### Testing
- **Spec Files**: Each component includes a corresponding `.spec.ts` file with basic unit tests to ensure the component is created successfully.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- Angular CLI (v17 or later)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/abdklmw/Angular-dev-profile-app.git
   cd developer-portfolio
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm start
   ```
4. Open your browser and navigate to `http://localhost:4200`.

### Building for Production
To create a production build:
   ```bash
   ng build
   ```
The output will be in the `dist/` directory.

## Usage
- Update the `ProfileComponent` (`src/app/profile/profile.component.ts`) with your personal details, such as name, role, location, profile image URL, and social media links.
- Modify the `projects` array in `ProjectComponent` (`src/app/project/project.component.ts`) to include your own projects, specifying the `id`, `name`, `description`, and `status`.
- Customize the styles in the component-specific CSS files or the global styles in `app.component.html` to match your branding.

## Potential Future Enhancements
I do not plan to make any future enhancements as this is just intended to be an example/learning project, but below are some potential updated that could be done.
- Add routing to support multiple pages (e.g., Home, About, Projects).
- Implement a backend service to fetch profile and project data dynamically.
- Expand the social media links to include additional platforms.
- Add animations for smoother transitions and interactions.

## License
This project is completely free for you to copy and modify as you desire.

## Acknowledgments
- Built with [Angular](https://angular.dev/).