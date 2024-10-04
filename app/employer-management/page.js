// import DashboardCards from "../components/Dashboard/Stats";
// import Company from "./Company";

import UserTable from "@/components/users/Users";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../app/globals.css"

const Users = () => {
    const usersData = [
        {
            id: 1,
            name: 'Marsha Hogan',
            city: 'Illinois, United States',
            phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            country: 'Australia',
            listings: 2,
            image: '/user/1.png'
        },
        {
            id: 1,
            name: 'Marsha Hogan',
            city: 'Illinois, United States',
            phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            country: 'Australia',
            listings: 2,
            image: '/user/1.png'
        },
        {
            id: 1,
            name: 'Marsha Hogan',
            city: 'Illinois, United States',
            phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            country: 'Australia',
            listings: 2,
            image: '/user/1.png'
        },
        {
            id: 1,
            name: 'Marsha Hogan',
            city: 'Illinois, United States',
            phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            country: 'Australia',
            listings: 2,
            image: '/user/1.png'
        },
        {
            id: 1,
            name: 'Marsha Hogan',
            city: 'Illinois, United States',
            phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            country: 'Australia',
            listings: 2,
            image: '/user/1.png'
        },
        {
            id: 1,
            name: 'Marsha Hogan',
            city: 'Illinois, United States',
            phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            country: 'Australia',
            listings: 2,
            image: '/user/1.png'
        },
        // Add more user objects...
    ];


    return (
        <div className="float-right w-[80%] p-[40px] ml-[20%] bg-[#e8edf2] absolute top-16  h-[92%]">
               
            <div class="sb2-2-3">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-inn-sp">
                                <div class="inn-title">
                                    <h4>Job Providers</h4>
                                    <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                                    <a class="dropdown-button drop-down-meta" href="#" data-activates="dr-users"><i class="material-icons">more_vert</i></a>
                                    <ul id="dr-users" class="dropdown-content">
                                        <li><a href="user-add.html">Add New</a>
                                        </li>
                                        <li><a href="user-edit.html">Edit</a>
                                        </li>
                                        <li><a href="#!">Update</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li><a href="#!"><i class="material-icons">delete</i>Delete</a>
                                        </li>
                                        <li><a href="user-view.html"><i class="material-icons">subject</i>View All</a>
                                        </li>
                                    </ul>

                                    <UserTable users={usersData} />

            </div>
            </div>
            </div>
            </div>
            </div>   

                                
            
        </div>
    )
     
  };
  
export default Users;                                           
  