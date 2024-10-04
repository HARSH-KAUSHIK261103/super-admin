
import BlogPostsTable from '@/app/components/blogs/ALLblogs';

const AllBlogPage = () => {
  // Sample data
  const posts=[
    {
        id: 1,
        title: 'Online Business Directory in Port Blair, Andaman',
        categories: ['Directory'],
        date: '2017-05-24',
      },
      {
        id: 2,
        title: 'Grid systems are used for creating page layouts through',
        categories: ['Directory'],
        date: '2017-05-24',
      },
  ]
 

  

  return (
    <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
    <div className="row">
      <BlogPostsTable posts={posts}  />
    </div>
    </div>
  );
};

export default AllBlogPage;
