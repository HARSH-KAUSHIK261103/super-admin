import DashboardCards from "../components/Dashboard/Stats";
import Company from "./Company";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../app/globals.css"

const Dashboard = () => {
    const campaignsData1 = [
        { location: 'Australia', client: 'Beavis', change: 2.43, budget: '$1478', status: 'Active' },
        { location: 'Cuba', client: 'Felix', change: 1.43, budget: '$951', status: 'Closed' },
        { location: 'France', client: 'Cannibus', change: -8.43, budget: '$632', status: 'Hold' },
        { location: 'Norway', client: 'Neosoft', change: 7.43, budget: '$325', status: 'Hold' },
        { location: 'South Africa', client: 'Hencework', change: 9.43, budget: '$258', status: 'Active' },
    ];
    
    const campaignsData2 = [
        { location: 'California', client: 'Beavis', change: 2.43, budget: '$1478', status: 'Active' },
        { location: 'Florida', client: 'Felix', change: 1.43, budget: '$951', status: 'Closed' },
        { location: 'Hawaii', client: 'Cannibus', change: -8.43, budget: '$632', status: 'Hold' },
        { location: 'Alaska', client: 'Neosoft', change: 7.43, budget: '$325', status: 'Hold' },
        { location: 'New Jersey', client: 'Hencework', change: 9.43, budget: '$258', status: 'Active' },
    ];

    return (
        <div className="float-left w-[90%] p-[40px] ml-[20%] bg-[#e8edf2]">
            <div className="row">
            <Company title="Comany Details" subtitle="Comanies registered with ous" campaigns={campaignsData1} />
            <Company title="Insitutes Details" subtitle="Insitutes registered with ous" campaigns={campaignsData2} />
        </div>
        </div>
    )
     
  };
  
export default Dashboard;                                           
  