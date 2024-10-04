import UserListingTable from "@/app/components/Jobs/Job-Approval";
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

const Approval = () => {
    return (
    
    <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
            <div className="row">
            <UserListingTable listings={listingsData} />
        </div>
        </div>
      
    )
};

export default Approval;
