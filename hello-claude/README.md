# Hello Claude

A Spring Boot application that exposes JVM and application statistics via REST API with real-time visualization through an Angular frontend.

## Features

- **Backend**: Spring Boot 3.4.5 with Java 21
- **Frontend**: Angular with Chart.js for real-time statistics visualization
- **Native Support**: GraalVM native image compilation
- **Real-time Monitoring**: JVM metrics, CPU usage, memory statistics
- **REST API**: OpenAPI documentation available at `/swagger-ui.html`

## Project Structure

```
claude-hello-world/
├── hello-claude/          # Spring Boot backend
│   ├── src/main/java/     # Java source code
│   ├── pom.xml           # Maven configuration
│   ├── build.sh          # Build and run script
│   └── README.md         # This file
└── hello-claude-web/      # Angular frontend
    ├── src/app/          # Angular components
    ├── package.json      # Node.js dependencies
    └── README.md         # Frontend documentation
```

## Prerequisites

- Java 21 (OpenJDK or Oracle JDK)
- Maven 3.6+
- Node.js 18+ (for frontend)
- GraalVM with native-image (optional, for native builds)

## Quick Start

### Backend

1. **Navigate to the backend directory:**
   ```bash
   cd hello-claude
   ```

2. **Build and run (standard JAR):**
   ```bash
   ./build.sh run
   ```

3. **Build and run (native executable):**
   ```bash
   ./build.sh run-native
   ```

4. **Build only:**
   ```bash
   ./build.sh standard    # Standard JAR
   ./build.sh native      # Native executable
   ```

The backend will start on `http://localhost:8080`

### Frontend

1. **Navigate to the frontend directory:**
   ```bash
   cd hello-claude-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

The frontend will start on `http://localhost:4200`

## API Endpoints

- `GET /api/stats` - Get current JVM and application statistics
- `GET /swagger-ui.html` - OpenAPI documentation

## Build Options

### Standard Build
```bash
cd hello-claude
./build.sh standard
```

### Native Build (requires GraalVM)
```bash
cd hello-claude
./build.sh native
```

### Clean Build
```bash
cd hello-claude
./build.sh clean
```

## Monitoring Features

The application provides real-time monitoring of:

- **Memory Usage**: Heap and non-heap memory statistics
- **CPU Load**: System CPU usage
- **Thread Information**: Live, daemon, and peak thread counts
- **JVM Statistics**: Various JVM metrics

## Development

### Backend Development
- Spring Boot 3.4.5
- Java 21
- Maven for dependency management
- Spring Web for REST API
- SpringDoc OpenAPI for API documentation

### Frontend Development
- Angular 17+
- Chart.js for data visualization
- ng2-charts for Angular integration
- Responsive design with dark/light themes

## License

This project is for educational and demonstration purposes. 