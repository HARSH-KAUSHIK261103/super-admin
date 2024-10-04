"use client"
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { getJobPostingStatistics } from '../data';
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
  
// const JobPostingStatistics = () => {
//   const jobStats = getJobPostingStatistics();

//   const chartData = {
//     labels: jobStats.categories.map((category) => category.name),
//     datasets: [
//       {
//         label: 'Job Posting Categories',
//         data: jobStats.categories.map((category) => category.count),
//         backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
//       },
//     ],
//   };

//   return (
//     <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
//     <div className="row">
//     <div className="stats-container">
//       <h2>Job Posting Statistics</h2>
//       <p>Total Job Posts: {jobStats.totalPosts}</p>
//       <p>Popular Categories: {jobStats.popularCategories}</p>
//       <p>Active Employers: {jobStats.activeEmployers}</p>

//       <div className="chart-container">
//         <Pie data={chartData} />
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default JobPostingStatistics;

import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const JobPostingStatistics = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const syntheticData = generateSyntheticData();
        setData(syntheticData);
    }, []);

    const generateSyntheticData = () => {
        const daysInMonth = 30;
        const daysInWeek = 7;

        const categories = ['Engineering', 'Healthcare', 'Sales', 'Marketing', 'Education'];

        const data = {
            month: {
                jobPostings: [],
                employerActivity: [],
                categoryPopularity: {},
            },
            week: {
                jobPostings: [],
                employerActivity: [],
            },
            total: {
                jobPostings: 0,
                employerActivity: 0,
            },
            categories: {
                Engineering: 0,
                Healthcare: 0,
                Sales: 0,
                Marketing: 0,
                Education: 0,
            },
        };

        let totalJobPostings = 0;
        let totalEmployerActivity = 0;

        // Initialize categories popularity
        categories.forEach(category => {
            data.month.categoryPopularity[category] = 0;
        });

        // Generate data for the last month (30 days)
        for (let i = 0; i < daysInMonth; i++) {
            const jobPostings = Math.floor(Math.random() * 100);
            const employerActivity = Math.floor(Math.random() * 50);

            // Randomly assign job postings to categories
            categories.forEach(category => {
                const postingsInCategory = Math.floor(Math.random() * 10);
                data.month.categoryPopularity[category] += postingsInCategory;
            });

            data.month.jobPostings.push(jobPostings);
            data.month.employerActivity.push(employerActivity);

            totalJobPostings += jobPostings;
            totalEmployerActivity += employerActivity;
        }

        // Generate data for the last week (7 days)
        for (let i = 0; i < daysInWeek; i++) {
            const jobPostings = Math.floor(Math.random() * 100);
            const employerActivity = Math.floor(Math.random() * 50);

            data.week.jobPostings.push(jobPostings);
            data.week.employerActivity.push(employerActivity);
        }

        data.total.jobPostings = totalJobPostings;
        data.total.employerActivity = totalEmployerActivity;

        return data;
    };

    if (!data) return <div>Loading...</div>;

    const monthLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    const weekLabels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);

    // Data for monthly job posting trends
    const monthJobPostingsGraphData = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Job Postings',
                data: data.month.jobPostings,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Data for weekly job posting trends
    const weekJobPostingsGraphData = {
        labels: weekLabels,
        datasets: [
            {
                label: 'Job Postings (Week)',
                data: data.week.jobPostings,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Data for employer activity trends
    const monthEmployerActivityGraphData = {
        labels: monthLabels,
        datasets: [
            {
                label: 'Employer Activity',
                data: data.month.employerActivity,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    // Data for popular job categories
    const categoryPopularityData = {
        labels: Object.keys(data.month.categoryPopularity),
        datasets: [
            {
                label: 'Category Popularity',
                data: Object.values(data.month.categoryPopularity),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
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
            <h1>Job Posting Statistics</h1>
            {/* Display total numbers */}
            <p>Total Job Postings this Month: {data.total.jobPostings}</p>
            <p>Total Employer Activity this Month: {data.total.employerActivity}</p>

            {/* Monthly Job Posting Trends */}
            <div>
                <h2>Monthly Job Posting Trends</h2>
                <Bar data={monthJobPostingsGraphData} style={graphStyle} />
                <p>Growth/Fall in Job Postings: {data.total.jobPostings}</p>
            </div>

            {/* Weekly Job Posting Trends */}
            <div>
                <h2>Weekly Job Posting Trends</h2>
                <Bar data={weekJobPostingsGraphData} style={graphStyle} />
                <p>Growth/Fall in the Last Week: Job Postings: {data.week.jobPostings.reduce((a, b) => a + b, 0)}</p>
            </div>

            {/* Monthly Employer Activity */}
            <div>
                <h2>Monthly Employer Activity</h2>
                <p>This report shows number of employers posting jobs daily.</p>
                <Bar data={monthEmployerActivityGraphData} style={graphStyle} />
                <p>Employer Activity this Month: {data.total.employerActivity}</p>
            </div>

            {/* Popular Job Categories */}
            <div>
                <h2>Popular Job Categories</h2>
                <Pie data={categoryPopularityData} style={graphStyle} />
                <h3>Category Popularity Data</h3>
                    <table style={{ width: '100%', textAlign: 'left' }}>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Number of Job Postings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data.month.categoryPopularity).map((category, index) => (
                                <tr key={index}>
                                    <td>{category}</td>
                                    <td>{data.month.categoryPopularity[category]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
        </div>
    );
};

export default JobPostingStatistics;
