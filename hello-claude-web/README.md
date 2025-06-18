# Hello Claude Web

Angular frontend for the Hello Claude application that provides real-time visualization of JVM and application statistics.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Features

- **Real-time Charts**: Live visualization of JVM metrics using Chart.js
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Themes**: Toggle between theme modes
- **Multiple Metrics**: Memory usage, CPU load, thread counts, and more
- **Historical Data**: Shows up to 1 hour of historical data

## Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

## Development server

To start a local development server, run:

```bash
npm start
```

Or alternatively:
```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

**Note**: Make sure the backend server is running on `http://localhost:8080` for the charts to display data.

## Backend Integration

The frontend connects to the Spring Boot backend API at `http://localhost:8080`. The backend provides:

- `GET /api/stats` - Real-time JVM and application statistics
- `GET /swagger-ui.html` - API documentation

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Project Structure

```
hello-claude-web/
├── src/
│   ├── app/
│   │   ├── stats-chart/     # Main chart component
│   │   ├── app.component.*  # Root component
│   │   └── app.config.ts    # Application configuration
│   ├── styles.css          # Global styles
│   └── main.ts             # Application entry point
├── package.json            # Dependencies and scripts
└── angular.json           # Angular CLI configuration
```

## Technologies Used

- **Angular 17+**: Frontend framework
- **Chart.js**: Charting library
- **ng2-charts**: Angular wrapper for Chart.js
- **TypeScript**: Programming language
- **CSS3**: Styling with responsive design

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
