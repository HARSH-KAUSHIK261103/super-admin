import List from '@/app/components/Jobs/Job-listings';
import 'bootstrap/dist/css/bootstrap.min.css';
const listingsData = [
    {
        id: 1,
        name: 'XYZ Copmany',
        title: 'Full Stack Developer',
        type: 'Internship',
        Phone:'0000000000',
        email: 'chadengle@dummy.com',
        image: '/listing/1.jpeg'
    },
    {
        id: 2,
        name: 'XYZ Copmany',
        title: 'Full Stack Developer',
        type: 'Internship',
        Phone:'0000000000',
        email: 'chadengle@dummy.com',
        image: '/listing/1.jpeg'
    },
    {
        id: 3,
        name: 'XYZ Copmany',
        title: 'Full Stack Developer',
        type: 'Internship',
        Phone:'0000000000',
        email: 'chadengle@dummy.com',
        image: '/listing/1.jpeg'
    },
    {
        id: 4,
        name: 'XYZ Copmany',
        title: 'Full Stack Developer',
        type: 'Internship',
        Phone:'0000000000',
        email: 'chadengle@dummy.com',
        image: '/listing/1.jpeg'
    }
];

const JobListing = () => {
    return (
    
        <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
            <div className="row">
            <div className="flex flex-row gap-4 mb-4">
                <button type='button' className="p-[10px] px-[20px] h-[56px] bg-white inline-flex items-center justify-center cursor-pointer transition-all duration-[400ms] ease-in-out rounded-md fw-medium">Active</button>
                <button type='button' className="p-[10px] px-[20px] h-[56px] bg-white inline-flex items-center justify-center cursor-pointer transition-all duration-[400ms] ease-in-out rounded-md fw-medium">Expired</button>
            </div>
            <List listings={listingsData} />
        </div>
        </div>
      
    )
};

export default JobListing;
