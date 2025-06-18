import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-stats-chart',
  standalone: true,
  imports: [HttpClientModule, BaseChartDirective],
  templateUrl: './stats-chart.html',
  styleUrl: './stats-chart.css'
})
export class StatsChart implements OnInit {
  public heapChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Heap Used (MB)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
        tension: 0.4,
        type: 'line',
        spanGaps: true
      }
    ]
  };
  public heapChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        },
        ticks: {
          maxTicksLimit: 12,
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          autoSkipPadding: 10
        },
        grid: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'MB'
        },
        min: 0,
        max: 200,
        grid: {
          display: true
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 6
      }
    }
  };

  public cpuChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'CPU Load (%)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
        tension: 0.4,
        type: 'line',
        spanGaps: true
      }
    ]
  };
  public cpuChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        },
        ticks: {
          maxTicksLimit: 12,
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          autoSkipPadding: 10
        },
        grid: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: '%'
        },
        min: 0,
        max: 100,
        grid: {
          display: true
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 6
      }
    }
  };

  public threadsChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Live Threads',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.4,
        type: 'line',
        spanGaps: true
      },
      {
        data: [],
        label: 'Daemon Threads',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
        tension: 0.4,
        type: 'line',
        spanGaps: true
      },
      {
        data: [],
        label: 'Peak Threads',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
        tension: 0.4,
        type: 'line',
        spanGaps: true
      }
    ]
  };

  public memoryChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Non-Heap Used (MB)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgba(255, 205, 86, 1)',
        pointBackgroundColor: 'rgba(255, 205, 86, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 205, 86, 1)',
        fill: false,
        tension: 0.4,
        type: 'line',
        spanGaps: true
      }
    ]
  };

  public threadsChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        },
        ticks: {
          maxTicksLimit: 12,
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          autoSkipPadding: 10
        },
        grid: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Threads'
        },
        min: 0,
        max: 50, // Higher limit for threads to prevent always being at the top
        grid: {
          display: true
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 6
      }
    }
  };

  public memoryChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time'
        },
        ticks: {
          maxTicksLimit: 12,
          maxRotation: 45,
          minRotation: 0,
          autoSkip: true,
          autoSkipPadding: 10
        },
        grid: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'MB'
        },
        min: 0,
        max: 100, // Higher limit for non-heap memory to prevent always being at the top
        grid: {
          display: true
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 6
      }
    }
  };

  private apiUrl = 'http://localhost:8080/api/stats';

  constructor(private http: HttpClient) {
    console.log('StatsChart constructor called');
  }

  ngOnInit() {
    console.log('StatsChart initialized, starting polling...');
    this.initializeTimeLabels();
    this.fetchStats();
    setInterval(() => {
      console.log('Polling interval triggered');
      this.fetchStats();
    }, 2000);
  }

  initializeTimeLabels() {
    const now = new Date();
    const labels = [];
    const heapData = [];
    const cpuData = [];
    const liveThreadsData = [];
    const daemonThreadsData = [];
    const peakThreadsData = [];
    const nonHeapData = [];
    
    // Generate time labels for 180 points (1 hour)
    // Start from 30 minutes before current time
    for (let i = 0; i < 180; i++) {
      const time = new Date(now.getTime() - (90 - i) * 2000); // Start 30 minutes before
      labels.push(time.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
      }));
      
      // All points will be null initially
      heapData.push(null);
      cpuData.push(null);
      liveThreadsData.push(null);
      daemonThreadsData.push(null);
      peakThreadsData.push(null);
      nonHeapData.push(null);
    }
    
    this.heapChartData.labels = labels;
    this.cpuChartData.labels = labels;
    this.threadsChartData.labels = labels;
    this.memoryChartData.labels = labels;
    
    this.heapChartData.datasets[0].data = heapData;
    this.cpuChartData.datasets[0].data = cpuData;
    this.threadsChartData.datasets[0].data = liveThreadsData;
    this.threadsChartData.datasets[1].data = daemonThreadsData;
    this.threadsChartData.datasets[2].data = peakThreadsData;
    this.memoryChartData.datasets[0].data = nonHeapData;
  }

  fetchStats() {
    console.log('Fetching stats from:', this.apiUrl);
    this.http.get<any>(this.apiUrl).subscribe({
      next: (stats) => {
        console.log('Received stats:', stats);
        
        // Get current time
        const currentTime = new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit',
          hour12: false
        });
        
        // Create new references to force Chart.js update
        let newHeapData = [...this.heapChartData.datasets[0].data];
        let newCpuData = [...this.cpuChartData.datasets[0].data];
        let newLiveThreadsData = [...this.threadsChartData.datasets[0].data];
        let newDaemonThreadsData = [...this.threadsChartData.datasets[1].data];
        let newPeakThreadsData = [...this.threadsChartData.datasets[2].data];
        let newNonHeapData = [...this.memoryChartData.datasets[0].data];
        let newLabels = [...this.heapChartData.labels!];
        
        // Find center index (point 90 of 180)
        const centerIndex = 90;
        
        // If center is empty, put first data there
        if (newHeapData[centerIndex] === null) {
          newHeapData[centerIndex] = stats.heapUsedMB;
          newCpuData[centerIndex] = (stats.cpuLoad >= 0 ? stats.cpuLoad * 100 : null);
          newLiveThreadsData[centerIndex] = stats.liveThreads;
          newDaemonThreadsData[centerIndex] = stats.daemonThreads;
          newPeakThreadsData[centerIndex] = stats.peakThreads;
          newNonHeapData[centerIndex] = stats.nonHeapUsedMB;
          newLabels[centerIndex] = currentTime;
        } else {
          // If data already exists, expand to both sides
          // Find range of existing data
          let startIndex = 0;
          let endIndex = 179;
          
          for (let i = 0; i < newHeapData.length; i++) {
            if (newHeapData[i] !== null) {
              startIndex = i;
              break;
            }
          }
          
          for (let i = newHeapData.length - 1; i >= 0; i--) {
            if (newHeapData[i] !== null) {
              endIndex = i;
              break;
            }
          }
          
          // If there's space on the right, add there
          if (endIndex < 179) {
            newHeapData[endIndex + 1] = stats.heapUsedMB;
            newCpuData[endIndex + 1] = (stats.cpuLoad >= 0 ? stats.cpuLoad * 100 : null);
            newLiveThreadsData[endIndex + 1] = stats.liveThreads;
            newDaemonThreadsData[endIndex + 1] = stats.daemonThreads;
            newPeakThreadsData[endIndex + 1] = stats.peakThreads;
            newNonHeapData[endIndex + 1] = stats.nonHeapUsedMB;
            newLabels[endIndex + 1] = currentTime;
          } else {
            // If no space on the right, shift everything to the left
            newHeapData.shift();
            newCpuData.shift();
            newLiveThreadsData.shift();
            newDaemonThreadsData.shift();
            newPeakThreadsData.shift();
            newNonHeapData.shift();
            newLabels.shift();
            
            newHeapData.push(stats.heapUsedMB);
            newCpuData.push((stats.cpuLoad >= 0 ? stats.cpuLoad * 100 : null));
            newLiveThreadsData.push(stats.liveThreads);
            newDaemonThreadsData.push(stats.daemonThreads);
            newPeakThreadsData.push(stats.peakThreads);
            newNonHeapData.push(stats.nonHeapUsedMB);
            newLabels.push(currentTime);
          }
        }
        
        // Calculate dynamic range for heap
        const validHeapData = newHeapData.filter(val => val !== null) as number[];
        const maxHeap = Math.max(...validHeapData, 1); // Minimum 1 to avoid 0
        const heapMax = Math.max(200, maxHeap * 10); // At least 10 times the maximum value
        
        // Create new objects to force update
        this.heapChartData = {
          labels: newLabels,
          datasets: [{
            ...this.heapChartData.datasets[0],
            data: newHeapData
          }]
        };
        
        this.cpuChartData = {
          labels: newLabels,
          datasets: [{
            ...this.cpuChartData.datasets[0],
            data: newCpuData
          }]
        };
        
        this.threadsChartData = {
          labels: newLabels,
          datasets: [
            {
              ...this.threadsChartData.datasets[0],
              data: newLiveThreadsData
            },
            {
              ...this.threadsChartData.datasets[1],
              data: newDaemonThreadsData
            },
            {
              ...this.threadsChartData.datasets[2],
              data: newPeakThreadsData
            }
          ]
        };
        
        this.memoryChartData = {
          labels: newLabels,
          datasets: [{
            ...this.memoryChartData.datasets[0],
            data: newNonHeapData
          }]
        };
        
        // Update heap Y axis range dynamically
        this.heapChartOptions = {
          ...this.heapChartOptions,
          scales: {
            ...this.heapChartOptions.scales,
            y: {
              ...this.heapChartOptions.scales!['y'],
              max: heapMax
            }
          }
        };
        
        console.log('Updated all chart data');
        console.log('Heap Y axis max:', heapMax);
      },
      error: (error) => {
        console.error('Error fetching stats:', error);
      }
    });
  }
}
