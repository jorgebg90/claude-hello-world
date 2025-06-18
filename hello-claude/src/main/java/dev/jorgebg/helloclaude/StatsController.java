package dev.jorgebg.helloclaude;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.lang.management.OperatingSystemMXBean;
import java.lang.management.RuntimeMXBean;
import java.lang.management.ThreadMXBean;
import java.time.Duration;
import java.util.Properties;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
@Tag(name = "JVM Statistics", description = "Reading JVM and application consumption statistics")
public class StatsController {

    @GetMapping("/stats")
    @Operation(summary = "Get JVM and consumption statistics", description = "Returns current JVM and application consumption statistics in JSON format.")
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();
        
        // Memory stats
        MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();
        MemoryUsage heap = memoryBean.getHeapMemoryUsage();
        MemoryUsage nonHeap = memoryBean.getNonHeapMemoryUsage();
        stats.put("heapUsedMB", heap.getUsed() / (1024 * 1024));
        stats.put("heapMaxMB", heap.getMax() / (1024 * 1024));
        stats.put("nonHeapUsedMB", nonHeap.getUsed() / (1024 * 1024));
        stats.put("nonHeapMaxMB", nonHeap.getMax() / (1024 * 1024));
        
        // Thread stats
        ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
        stats.put("liveThreads", threadBean.getThreadCount());
        stats.put("daemonThreads", threadBean.getDaemonThreadCount());
        stats.put("peakThreads", threadBean.getPeakThreadCount());
        
        // JVM info
        RuntimeMXBean runtimeMxBean = ManagementFactory.getRuntimeMXBean();
        Properties props = System.getProperties();
        stats.put("jvmName", runtimeMxBean.getVmName());
        stats.put("jvmVendor", runtimeMxBean.getVmVendor());
        stats.put("javaVersion", props.getProperty("java.version"));
        
        // OS info
        OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();
        stats.put("os", osBean.getName() + " " + osBean.getVersion() + " (" + osBean.getArch() + ")");
        
        // CPU load (if available)
        double cpuLoad = -1;
        try {
            // For modern JVMs (Java 8+), cast to com.sun.management.OperatingSystemMXBean
            if (osBean instanceof com.sun.management.OperatingSystemMXBean) {
                cpuLoad = ((com.sun.management.OperatingSystemMXBean) osBean).getProcessCpuLoad();
            }
        } catch (Exception e) {
            // CPU load might not be available on all systems
        }
        stats.put("cpuLoad", cpuLoad);
        
        // Uptime
        long uptime = runtimeMxBean.getUptime();
        Duration duration = Duration.ofMillis(uptime);
        String uptimeStr = String.format("%d:%02d:%02d", 
            duration.toHours(), 
            duration.toMinutesPart(), 
            duration.toSecondsPart());
        stats.put("uptime", uptimeStr);
        
        return stats;
    }
} 