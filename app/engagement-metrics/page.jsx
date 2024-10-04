"use client"
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { getEngagementMetrics } from '../data';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     PointElement,
//     LineElement,
//     ArcElement,
//   } from 'chart.js';
  
//   // Register required chart components
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     PointElement,
//     LineElement,
//     ArcElement
//   );
  
// const EngagementMetrics = () => {
//   const engagementStats = getEngagementMetrics();

//   const chartData = {
//     labels: ['Clicks', 'Applications', 'Job Views'],
//     datasets: [
//       {
//         label: 'Engagement Metrics',
//         data: [
//           engagementStats.totalClicks,
//           engagementStats.totalApplications,
//           engagementStats.jobViews,
//         ],
//         backgroundColor: ['#007bff', '#28a745', '#ffc107'],
//       },
//     ],
//   };

//   return (
//     <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
//             <div className="row">
//     <div className="stats-container">
//       <h2>Engagement Metrics</h2>
//       <p>Total Clicks: {engagementStats.totalClicks}</p>
//       <p>Total Applications: {engagementStats.totalApplications}</p>
//       <p>Job Views: {engagementStats.jobViews}</p>

//       <div className="chart-container">
//         <Line data={chartData} />
//       </div>
//     </div>
//     </div>
//     </div>
    
//   );
// };

// export default EngagementMetrics;

import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const EngagementMetrics = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const syntheticData = generateSyntheticData();
        setData(syntheticData);
    }, []);

    const generateSyntheticData = () => {
        const daysInMonth = 30;
        const categories = ['Clicks', 'Applications', 'Job Views'];

        const data = {
            month: {
                engagementBreakdown: [],
                categoryEngagement: {},
            },
            total: {
                engagement: 0,
            },
            categories: {
                Clicks: 0,
                Applications: 0,
                'Job Views': 0,
            },
        };

        let totalEngagement = 0;

        // Initialize category engagement
        categories.forEach(category => {
            data.month.categoryEngagement[category] = 0;
        });

        // Generate synthetic data for engagement over the last month (30 days)
        for (let i = 0; i < daysInMonth; i++) {
            const clicks = Math.floor(Math.random() * 1000);
            const applications = Math.floor(Math.random() * 300);
            const jobViews = Math.floor(Math.random() * 1200);

            const dailyTotal = clicks + applications + jobViews;

            data.month.engagementBreakdown.push(dailyTotal);

            // Add to category engagement
            data.month.categoryEngagement['Clicks'] += clicks;
            data.month.categoryEngagement['Applications'] += applications;
            data.month.categoryEngagement['Job Views'] += jobViews;

            totalEngagement += dailyTotal;
        }

        data.total.engagement = totalEngagement;

        return data;
    };

    if (!data) return <div>Loading...</div>;

    const monthLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

    // Data for monthly engagement breakdown (bar chart)
    const monthlyEngagementGraphData = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Engagement',
                data: data.month.engagementBreakdown,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Data for category engagement distribution (pie chart)
    const categoryEngagementData = {
        labels: Object.keys(data.month.categoryEngagement),
        datasets: [
            {
                label: 'Engagement Distribution',
                data: Object.values(data.month.categoryEngagement),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
            },
        ],
    };

    const graphStyle = {
        width: '600px', // Adjusted size to make smaller
        height: '300px', // Adjusted size to make smaller
    };

    return (
      <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
      <div className="row">
            <h1>Engagement Metrics</h1>

            {/* Display total engagement */}
            <p>Total Engagement this Month: {data.total.engagement}</p>

            {/* Monthly Engagement Breakdown */}
            <div>
                <h2>Monthly Engagement Breakdown</h2>
                <Bar data={monthlyEngagementGraphData} style={graphStyle} />
                <p>Total Engagement for this Month: {data.total.engagement}</p>
            </div>

            {/* Engagement Distribution by Categories */}
            <div>
                <h2>Engagement Distribution by Source</h2>
                <Pie data={categoryEngagementData} style={graphStyle} />

                {/* Category Engagement Data Below the Pie Chart */}
                <div>
                    <h3>Engagement Breakdown by Category</h3>
                    <table style={{ width: '100%', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Engagement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data.month.categoryEngagement).map((category, index) => (
                                <tr key={index}>
                                    <td>{category}</td>
                                    <td>{data.month.categoryEngagement[category]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default EngagementMetrics;

