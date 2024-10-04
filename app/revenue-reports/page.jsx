"use client"
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { getRevenueReports } from '../data';
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
  

// const RevenueReports = () => {
//   const revenueStats = getRevenueReports();

//   const chartData = {
//     labels: ['Job Posting Fees', 'Subscriptions', 'Advertisements'],
//     datasets: [
//       {
//         label: 'Revenue Reports',
//         data: [
//           revenueStats.jobPostingFees,
//           revenueStats.subscriptions,
//           revenueStats.advertisements,
//         ],
//         backgroundColor: ['#007bff', '#28a745', '#ffc107'],
//       },
//     ],
//   };

//   return (
//     <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
//     <div className="row">
//     <div className="stats-container">
//       <h2>Revenue Reports</h2>
//       <p>Job Posting Fees: ${revenueStats.jobPostingFees}</p>
//       <p>Subscriptions: ${revenueStats.subscriptions}</p>
//       <p>Advertisements: ${revenueStats.advertisements}</p>

//       <div className="chart-container">
//         <Line data={chartData} />
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default RevenueReports;

import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const RevenueReports = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const syntheticData = generateSyntheticData();
        setData(syntheticData);
    }, []);

    const generateSyntheticData = () => {
        const daysInMonth = 30;
        const categories = ['Job Posting Fees', 'Subscriptions', 'Advertisements'];

        const data = {
            month: {
                revenueBreakdown: [],
                categoryRevenue: {},
            },
            total: {
                revenue: 0,
            },
            categories: {
                'Job Posting Fees': 0,
                Subscriptions: 0,
                Advertisements: 0,
            },
        };

        let totalRevenue = 0;

        // Initialize category revenue
        categories.forEach(category => {
            data.month.categoryRevenue[category] = 0;
        });

        // Generate synthetic data for revenue for the last month (30 days)
        for (let i = 0; i < daysInMonth; i++) {
            const jobPostingFees = Math.floor(Math.random() * 500);
            const subscriptions = Math.floor(Math.random() * 300);
            const advertisements = Math.floor(Math.random() * 200);

            const dailyTotal = jobPostingFees + subscriptions + advertisements;

            data.month.revenueBreakdown.push(dailyTotal);

            // Add to category revenue
            data.month.categoryRevenue['Job Posting Fees'] += jobPostingFees;
            data.month.categoryRevenue['Subscriptions'] += subscriptions;
            data.month.categoryRevenue['Advertisements'] += advertisements;

            totalRevenue += dailyTotal;
        }

        data.total.revenue = totalRevenue;

        return data;
    };

    if (!data) return <div>Loading...</div>;

    const monthLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

    // Data for monthly revenue breakdown (bar chart)
    const monthlyRevenueGraphData = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Revenue',
                data: data.month.revenueBreakdown,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    // Data for category revenue distribution (pie chart)
    const categoryRevenueData = {
        labels: Object.keys(data.month.categoryRevenue),
        datasets: [
            {
                label: 'Revenue Distribution',
                data: Object.values(data.month.categoryRevenue),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
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
            <h1>Revenue Reports</h1>

            {/* Display total revenue */}
            <p>Total Revenue this Month: ${data.total.revenue}</p>

            {/* Monthly Revenue Breakdown */}
            <div>
                <h2>Monthly Revenue Breakdown</h2>
                <Bar data={monthlyRevenueGraphData} style={graphStyle} />
                <p>Total Revenue for this Month: ${data.total.revenue}</p>
            </div>

            {/* Revenue Distribution by Categories */}
            <div>
                <h2>Revenue Distribution by Source</h2>
                <Pie data={categoryRevenueData} style={graphStyle} />
                
                {/* Category Revenue Data Below the Pie Chart */}
                <div>
                    <h3>Revenue Breakdown by Category</h3>
                    <table style={{ width: '100%', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Revenue ($)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data.month.categoryRevenue).map((category, index) => (
                                <tr key={index}>
                                    <td>{category}</td>
                                    <td>{data.month.categoryRevenue[category]}</td>
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

export default RevenueReports;
