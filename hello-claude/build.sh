#!/bin/bash

# Hello Claude Build Script
# This script allows building the application in both standard and native modes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Hello Claude Build Script"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  standard    Build standard JAR file (default)"
    echo "  native      Build native executable"
    echo "  clean       Clean build artifacts"
    echo "  run         Build and run standard JAR"
    echo "  run-native  Build and run native executable"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 standard     # Build standard JAR"
    echo "  $0 native       # Build native executable"
    echo "  $0 run          # Build and run standard JAR"
    echo "  $0 run-native   # Build and run native executable"
}

# Function to check if GraalVM is available
check_graalvm() {
    if ! command -v native-image &> /dev/null; then
        print_error "GraalVM native-image not found. Please install GraalVM with native-image support."
        print_warning "You can install it using: gu install native-image"
        exit 1
    fi
    print_success "GraalVM native-image found"
}

# Function to build standard JAR
build_standard() {
    print_status "Building standard JAR file..."
    mvn clean package -DskipTests
    print_success "Standard JAR built successfully: target/hello-claude-1.0-SNAPSHOT.jar"
}

# Function to build native executable
build_native() {
    print_status "Building native executable..."
    check_graalvm
    mvn clean package -Pnative -DskipTests
    print_success "Native executable built successfully: target/hello-claude"
}

# Function to run standard JAR
run_standard() {
    print_status "Building and running standard JAR..."
    build_standard
    print_status "Starting Hello Claude application..."
    java -jar target/hello-claude-1.0-SNAPSHOT.jar
}

# Function to run native executable
run_native() {
    print_status "Building and running native executable..."
    build_native
    print_status "Starting Hello Claude native application..."
    ./target/hello-claude
}

# Function to clean build artifacts
clean_build() {
    print_status "Cleaning build artifacts..."
    mvn clean
    print_success "Build artifacts cleaned"
}

# Main script logic
case "${1:-standard}" in
    "standard")
        build_standard
        ;;
    "native")
        build_native
        ;;
    "run")
        run_standard
        ;;
    "run-native")
        run_native
        ;;
    "clean")
        clean_build
        ;;
    "help"|"-h"|"--help")
        show_usage
        ;;
    *)
        print_error "Unknown option: $1"
        echo ""
        show_usage
        exit 1
        ;;
esac 