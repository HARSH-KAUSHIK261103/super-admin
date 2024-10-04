export const getUserStatistics = () => {
    return {
      activeUsers: 1200,
      newSignups: 150,
      dailyActiveUsers: 800,
    };
  };
  
  export const getJobPostingStatistics = () => {
    return {
      totalPosts: 400,
      popularCategories: ['Engineering', 'Marketing', 'IT'],
      activeEmployers: 50,
      categories: [
        { name: 'Engineering', count: 120 },
        { name: 'Marketing', count: 90 },
        { name: 'IT', count: 130 },
        { name: 'Others', count: 60 },
      ],
    };
  };
  
  export const getRevenueReports = () => {
    return {
      jobPostingFees: 5000,
      subscriptions: 1200,
      advertisements: 800,
    };
  };
  
  export const getEngagementMetrics = () => {
    return {
      totalClicks: 3000,
      totalApplications: 1200,
      jobViews: 5000,
    };
  };
  