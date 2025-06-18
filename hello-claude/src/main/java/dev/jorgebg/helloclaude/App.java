package dev.jorgebg.helloclaude;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hello Claude Spring Boot Application
 * 
 * This application provides a simple "Hello Claude" greeting and includes
 * a CPU consumer thread to generate some load for monitoring purposes.
 */
@SpringBootApplication
public class App implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) {
        greet();
        Thread cpuThread = new Thread(this::consumeCpu);
        cpuThread.setDaemon(true);
        cpuThread.start();
    }

    public void greet() {
        System.out.println("Hello, Claude!");
    }

    public void consumeCpu() {
        java.util.Random random = new java.util.Random();
        double result = 0;
        while (true) {
            for (int i = 0; i < 1_000_000; i++) {
                result += Math.sin(random.nextDouble()) * Math.cos(random.nextDouble());
            }
            if (result > 1e10) result = 0; // Avoid overflow
            // Small optional pause to avoid saturating the system
            try { Thread.sleep(100); } catch (InterruptedException e) { break; }
        }
    }
}
