"use client"
import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  // Import Chart.js
import { Bar, Line } from 'react-chartjs-2';
// const UserStatistics = () => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const syntheticData = generateSyntheticData();
//         setData(syntheticData);
//     }, []);

//     // Synthetic data generation for 1 month and 1 week
//     const generateSyntheticData = () => {
//         const daysInMonth = 30;
//         const daysInWeek = 7;
        
//         const data = {
//             month: {
//                 jobProviders: [],
//                 jobSeekers: [],
//                 newSignUps: {
//                     jobProviders: [],
//                     jobSeekers: []
//                 },
//                 dailyActiveUsers: {
//                     jobProviders: [],
//                     jobSeekers: []
//                 }
//             },
//             week: {
//                 jobProviders: [],
//                 jobSeekers: [],
//                 newSignUps: {
//                     jobProviders: [],
//                     jobSeekers: []
//                 },
//                 dailyActiveUsers: {
//                     jobProviders: [],
//                     jobSeekers: []
//                 }
//             },
//             total: {
//                 jobProviders: 0,
//                 jobSeekers: 0,
//                 newSignUps: {
//                     jobProviders: 0,
//                     jobSeekers: 0
//                 },
//                 dailyActiveUsers: {
//                     jobProviders: 0,
//                     jobSeekers: 0
//                 }
//             }
//         };
        
//         let totalJobProviders = 0;
//         let totalJobSeekers = 0;
//         let totalNewSignUpsJobProviders = 0;
//         let totalNewSignUpsJobSeekers = 0;
//         let totalDAUJobProviders = 0;
//         let totalDAUJobSeekers = 0;

//         // Generate data for the last month (30 days)
//         for (let i = 0; i < daysInMonth; i++) {
//             const jobProviders = Math.floor(Math.random() * 100);
//             const jobSeekers = Math.floor(Math.random() * 200);
//             const newSignUpsJobProviders = Math.floor(Math.random() * 30);
//             const newSignUpsJobSeekers = Math.floor(Math.random() * 50);
//             const dailyActiveJobProviders = Math.floor(Math.random() * 70);
//             const dailyActiveJobSeekers = Math.floor(Math.random() * 150);

//             data.month.jobProviders.push(jobProviders);
//             data.month.jobSeekers.push(jobSeekers);
//             data.month.newSignUps.jobProviders.push(newSignUpsJobProviders);
//             data.month.newSignUps.jobSeekers.push(newSignUpsJobSeekers);
//             data.month.dailyActiveUsers.jobProviders.push(dailyActiveJobProviders);
//             data.month.dailyActiveUsers.jobSeekers.push(dailyActiveJobSeekers);

//             totalJobProviders += jobProviders;
//             totalJobSeekers += jobSeekers;
//             totalNewSignUpsJobProviders += newSignUpsJobProviders;
//             totalNewSignUpsJobSeekers += newSignUpsJobSeekers;
//             totalDAUJobProviders += dailyActiveJobProviders;
//             totalDAUJobSeekers += dailyActiveJobSeekers;
//         }

//         data.total.jobProviders = totalJobProviders;
//         data.total.jobSeekers = totalJobSeekers;
//         data.total.newSignUps.jobProviders = totalNewSignUpsJobProviders;
//         data.total.newSignUps.jobSeekers = totalNewSignUpsJobSeekers;
//         data.total.dailyActiveUsers.jobProviders = totalDAUJobProviders;
//         data.total.dailyActiveUsers.jobSeekers = totalDAUJobSeekers;

//         // Generate data for the last week (7 days)
//         for (let i = 0; i < daysInWeek; i++) {
//             const jobProviders = Math.floor(Math.random() * 100);
//             const jobSeekers = Math.floor(Math.random() * 200);
//             const newSignUpsJobProviders = Math.floor(Math.random() * 30);
//             const newSignUpsJobSeekers = Math.floor(Math.random() * 50);
//             const dailyActiveJobProviders = Math.floor(Math.random() * 70);
//             const dailyActiveJobSeekers = Math.floor(Math.random() * 150);

//             data.week.jobProviders.push(jobProviders);
//             data.week.jobSeekers.push(jobSeekers);
//             data.week.newSignUps.jobProviders.push(newSignUpsJobProviders);
//             data.week.newSignUps.jobSeekers.push(newSignUpsJobSeekers);
//             data.week.dailyActiveUsers.jobProviders.push(dailyActiveJobProviders);
//             data.week.dailyActiveUsers.jobSeekers.push(dailyActiveJobSeekers);
//         }

//         return data;
//     };

//     if (!data) return <div>Loading...</div>;

//     // Data for graphs
//     const monthGraphData = {
//         labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
//         datasets: [
//             {
//                 label: 'Job Providers',
//                 data: data.month.jobProviders,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 fill: false,
//             },
//             {
//                 label: 'Job Seekers',
//                 data: data.month.jobSeekers,
//                 borderColor: 'rgba(153, 102, 255, 1)',
//                 fill: false,
//             },
//         ],
//     };

//     const weekGraphData = {
//         labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
//         datasets: [
//             {
//                 label: 'Job Providers',
//                 data: data.week.jobProviders,
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 fill: false,
//             },
//             {
//                 label: 'Job Seekers',
//                 data: data.week.jobSeekers,
//                 borderColor: 'rgba(153, 102, 255, 1)',
//                 fill: false,
//             },
//         ],
//     };

//     const newLoginsGraphData = {
//       labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
//       datasets: [
//           {
//               label: 'Job Providers Logins',
//               data: data.month.logins.jobProviders,
//               borderColor: 'rgba(255, 159, 64, 1)',
//               backgroundColor: 'rgba(255, 159, 64, 0.2)',
//               fill: true,
//               tension: 0.1,
//           },
//           {
//               label: 'Job Seekers Logins',
//               data: data.month.logins.jobSeekers,
//               borderColor: 'rgba(54, 162, 235, 1)',
//               backgroundColor: 'rgba(54, 162, 235, 0.2)',
//               fill: true,
//               tension: 0.1,
//           },
//       ],
//   };

//   // const dailyActiveUsersGraphData = {
//   //     labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
//   //     datasets: [
//   //         {
//   //             label: 'Daily Active Job Providers',
//   //             data: data.month.dailyActiveUsers.jobProviders,
//   //             borderColor: 'rgba(75, 192, 192, 1)',
//   //             fill: true,
//   //             tension: 0.1,
//   //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//   //         },
//   //         {
//   //             label: 'Daily Active Job Seekers',
//   //             data: data.month.dailyActiveUsers.jobSeekers,
//   //             borderColor: 'rgba(153, 102, 255, 1)',
//   //             fill: true,
//   //             tension: 0.1,
//   //             backgroundColor: 'rgba(153, 102, 255, 0.2)',
//   //         },
//   //     ],
//   // };


//     // Growth or decline calculations
   
   
//     const lastMonthGrowth = {
//         jobProviders: ((data.month.jobProviders[data.month.jobProviders.length - 1] - data.month.jobProviders[0]) / data.month.jobProviders[0]) * 100,
//         jobSeekers: ((data.month.jobSeekers[data.month.jobSeekers.length - 1] - data.month.jobSeekers[0]) / data.month.jobSeekers[0]) * 100,
//     };

//     const lastWeekGrowth = {
//         jobProviders: ((data.week.jobProviders[data.week.jobProviders.length - 1] - data.week.jobProviders[0]) / data.week.jobProviders[0]) * 100,
//         jobSeekers: ((data.week.jobSeekers[data.week.jobSeekers.length - 1] - data.week.jobSeekers[0]) / data.week.jobSeekers[0]) * 100,
//     };

//     const graphStyle = {
//       width: '600px', // Set the width smaller
//       height: '300px', // Set the height smaller
//   };


//     return (
//       <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
//       <div className="row">
//             {/* Text Statistics */}
//             <h1>User Statistics</h1>
//             <p>Total Job Providers this Month: {data.total.jobProviders}</p>
//             <p>Total Job Seekers this Month: {data.total.jobSeekers}</p>
//             <p>New Sign-ups this Month: Job Providers: {data.total.newSignUps.jobProviders} | Job Seekers: {data.total.newSignUps.jobSeekers}</p>
//             <p>Daily Active Users this Month: Job Providers: {data.total.dailyActiveUsers.jobProviders} | Job Seekers: {data.total.dailyActiveUsers.jobSeekers}</p>

//             {/* Monthly Graph */}
//             <div>
//                 <h2>Monthly Trends</h2>
//                 <Line data={monthGraphData} />
//                 <p>
//                     Last Month Growth: Job Providers: {lastMonthGrowth.jobProviders.toFixed(2)}% 
//                     | Job Seekers: {lastMonthGrowth.jobSeekers.toFixed(2)}%
//                 </p>
//             </div>

//             {/* Weekly Graph */}
//             <div>
//                 <h2>Weekly Trends</h2>
//                 <Line data={weekGraphData} />
//                 <p>
//                     Last Week Growth: Job Providers: {lastWeekGrowth.jobProviders.toFixed(2)}% 
//                     | Job Seekers: {lastWeekGrowth.jobSeekers.toFixed(2)}%
//                 </p>
//             </div>

           
            
//         </div>
//         </div>
//     );
// };



// You can now render this component in your app
// export default UserStatistics;


const ReportsAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const syntheticData = generateSyntheticData();
      setData(syntheticData);
  }, []);

  const generateSyntheticData = () => {
      const daysInMonth = 30;
      const daysInWeek = 7;

      const data = {
          month: {
              jobProviders: [],
              jobSeekers: [],
              newJobProviderLogins: [],
              newJobSeekerLogins: [],
              dailyActiveJobProviders: [],
              dailyActiveJobSeekers: [],
          },
          week: {
              jobProviders: [],
              jobSeekers: [],
          },
          total: {
              jobProviders: 0,
              jobSeekers: 0,
              newJobProviderLogins: 0,
              newJobSeekerLogins: 0,
              dailyActiveJobProviders: 0,
              dailyActiveJobSeekers: 0,
          },
      };

      let totalJobProviders = 0;
      let totalJobSeekers = 0;
      let totalNewJobProviderLogins = 0;
      let totalNewJobSeekerLogins = 0;
      let totalDailyActiveJobProviders = 0;
      let totalDailyActiveJobSeekers = 0;

      // Generate data for the last month (30 days)
      for (let i = 0; i < daysInMonth; i++) {
          const jobProviders = Math.floor(Math.random() * 100);
          const jobSeekers = Math.floor(Math.random() * 200);
          const newJobProviderLogins = Math.floor(Math.random() * 50);
          const newJobSeekerLogins = Math.floor(Math.random() * 50);
          const dailyActiveJobProviders = Math.floor(Math.random() * 80);
          const dailyActiveJobSeekers = Math.floor(Math.random() * 150);

          data.month.jobProviders.push(jobProviders);
          data.month.jobSeekers.push(jobSeekers);
          data.month.newJobProviderLogins.push(newJobProviderLogins);
          data.month.newJobSeekerLogins.push(newJobSeekerLogins);
          data.month.dailyActiveJobProviders.push(dailyActiveJobProviders);
          data.month.dailyActiveJobSeekers.push(dailyActiveJobSeekers);

          totalJobProviders += jobProviders;
          totalJobSeekers += jobSeekers;
          totalNewJobProviderLogins += newJobProviderLogins;
          totalNewJobSeekerLogins += newJobSeekerLogins;
          totalDailyActiveJobProviders += dailyActiveJobProviders;
          totalDailyActiveJobSeekers += dailyActiveJobSeekers;
      }

      // Generate data for the last week (7 days)
      for (let i = 0; i < daysInWeek; i++) {
          const jobProviders = Math.floor(Math.random() * 100);
          const jobSeekers = Math.floor(Math.random() * 200);

          data.week.jobProviders.push(jobProviders);
          data.week.jobSeekers.push(jobSeekers);
      }

      data.total.jobProviders = totalJobProviders;
      data.total.jobSeekers = totalJobSeekers;
      data.total.newJobProviderLogins = totalNewJobProviderLogins;
      data.total.newJobSeekerLogins = totalNewJobSeekerLogins;
      data.total.dailyActiveJobProviders = totalDailyActiveJobProviders;
      data.total.dailyActiveJobSeekers = totalDailyActiveJobSeekers;

      return data;
  };

  if (!data) return <div>Loading...</div>;

  const monthLabels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
  const weekLabels = Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`);

  // Data for monthly graphs (job providers and job seekers trends)
  const monthGraphData = {
      labels: monthLabels,
      datasets: [
          {
              label: 'Job Providers',
              data: data.month.jobProviders,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
              label: 'Job Seekers',
              data: data.month.jobSeekers,
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
      ],
  };

  // Data for weekly trends
  const weekGraphData = {
      labels: weekLabels,
      datasets: [
          {
              label: 'Job Providers (Week)',
              data: data.week.jobProviders,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
              label: 'Job Seekers (Week)',
              data: data.week.jobSeekers,
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
      ],
  };

  // Data for new logins and daily active users (monthly), categorized by job providers and seekers
  const loginsAndDAUCategoryGraphData = {
      labels: monthLabels,
      datasets: [
          {
              label: 'New Job Provider Logins',
              data: data.month.newJobProviderLogins,
              backgroundColor: 'rgba(255, 159, 64, 0.6)',
          },
          {
              label: 'New Job Seeker Logins',
              data: data.month.newJobSeekerLogins,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
          {
              label: 'Daily Active Job Providers',
              data: data.month.dailyActiveJobProviders,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
              label: 'Daily Active Job Seekers',
              data: data.month.dailyActiveJobSeekers,
              backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
      ],
  };

  const graphStyle = {
      width: '200px', // Adjusted size to make smaller
      height: '100px', // Adjusted size to make smaller
  };

  return (
    <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
      <div className="row">
          <h1>User Statistics</h1>
          {/* Display total numbers */}
          <p>Total Job Providers this Month: {data.total.jobProviders}</p>
          <p>Total Job Seekers this Month: {data.total.jobSeekers}</p>
          <p>New Job Provider Logins this Month: {data.total.newJobProviderLogins}</p>
          <p>New Job Seeker Logins this Month: {data.total.newJobSeekerLogins}</p>
          <p>Daily Active Job Providers this Month: {data.total.dailyActiveJobProviders}</p>
          <p>Daily Active Job Seekers this Month: {data.total.dailyActiveJobSeekers}</p>

          {/* Monthly Job Providers & Seekers */}
          <div>
              <h2>Monthly Job Providers & Seekers</h2>
              <Bar data={monthGraphData} style={graphStyle} />
              <p>Growth/Fall in the Last Month: Job Providers: {data.total.jobProviders} | Job Seekers: {data.total.jobSeekers}</p>
          </div>

          {/* Weekly Job Providers & Seekers */}
          <div>
              <h2>Weekly Job Providers & Seekers</h2>
              <Bar data={weekGraphData} style={graphStyle} />
              <p>Growth/Fall in the Last Week: Job Providers: {data.week.jobProviders.reduce((a, b) => a + b, 0)} | Job Seekers: {data.week.jobSeekers.reduce((a, b) => a + b, 0)}</p>
          </div>

          {/* Monthly New Logins & Daily Active Users (Categorized) */}
          <div>
              <h2>Monthly New Logins & Daily Active Users (By Category)</h2>
              <Bar data={loginsAndDAUCategoryGraphData} style={graphStyle} />
              <p>
                  New Job Provider Logins: {data.total.newJobProviderLogins} | New Job Seeker Logins: {data.total.newJobSeekerLogins}
                  <br />
                  Daily Active Job Providers: {data.total.dailyActiveJobProviders} | Daily Active Job Seekers: {data.total.dailyActiveJobSeekers}
              </p>
          </div>
      </div>
      </div>
  );
};

export default ReportsAnalytics;