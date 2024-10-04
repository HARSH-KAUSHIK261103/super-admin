import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/globals.css"
import { 
    FaCommentDots,
    FaEnvelope,
    FaTag,
    FaSearch,
    FaAngleDown,
    FaCogs,
    FaListUl,
    FaBuilding,
    FaUmbrella,
    FaFlagCheckered,
    FaTags,
    FaUserPlus,
    FaUndo,
    FaSignOutAlt
    
} from 'react-icons/fa';

const Header = () => {
  return (
    <div class="container-fluid h-[60px] bg-white fixed w-full top-0 z-[9999] shadow-[0px_2px_5px_rgba(0,0,0,0.17)]">
    <div class="row">
        
        <div class="col-md-2 col-sm-3 col-xs-6 sb1-1">
            <a href="#" class="btn-close-menu"><i class="fa fa-times" aria-hidden="true"></i></a>
            <a href="#" class="atab-menu"><i class="fa fa-bars tab-menu" aria-hidden="true"></i></a>
            <a href="index.html" class="logo"><Image src="/logo.png" alt="" className='w-[150px] pt-[13px]' width={150} height={110}/>
            </a>
        </div>
        
        <div class="col-md-6 col-sm-6 mob-hide">
            <form class="relative m-[12px_15px_8px_5px] text-[13px] text-[#626773] pl-[20px] pr-[40px] bg-transparent border border-[rgba(122,125,132,0.15)] shadow-none rounded-[30px] h-[36px] font-semibold w-full  flex items-center">
                <input type="text" placeholder="Search..." class="form-control border-none outline-none ring-0 focus:ring-0 focus:border-none !border-none !outline-none !ring-0 !focus:ring-0 !focus:border-none border-b-2 h-[25px] text-[#666666] font-normal"/>
                <a href="" className='absolute top-[11px] right-[16px] text-[#7a7d84]'><FaSearch/></a>
            </form>
        </div>
        
        <div class="col-md-2 tab-hide">
            <div class="pt-[20px] flex gap-2 ">
                <a class='relative w-[20px] h-[] cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300 btn-noti' href='#'><FaCommentDots/><span className='absolute transform -translate-x-1/2 top-[-8px] h-[14px] rounded-[10px] min-w-[15px] bg-[#4CAF50] text-white leading-[14px] px-[2px] text-[11px] whitespace-nowrap origin-[left_center] shadow-[0_0_0_1px_#3d793f] text-center font-[tahoma]'>5</span></a>
                <a class='relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300 btn-noti' href='#'><FaEnvelope/><span className='absolute transform -translate-x-1/2 top-[-8px] h-[14px] rounded-[10px] min-w-[15px] bg-[#4CAF50] text-white leading-[14px] px-[2px] text-[11px] whitespace-nowrap origin-[left_center] shadow-[0_0_0_1px_#3d793f] text-center font-[tahoma]'>5</span></a>
                <a class='relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300 btn-noti' href='#'><FaTag/><span className='absolute transform -translate-x-1/2 top-[-8px] h-[14px] rounded-[10px] min-w-[15px] bg-[#4CAF50] text-white leading-[14px] px-[2px] text-[11px] whitespace-nowrap origin-[left_center] shadow-[0_0_0_1px_#3d793f] text-center font-[tahoma]'>5</span></a>
            </div>
        </div>
       
        <div class="col-md-2 col-sm-3 col-xs-6">
           
            <a class='relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300 dropdown-button p-[18px_20px] text-[#666666] float-right flex items-center no-underline' href='#' data-activates='top-menu'><Image src="/user/6.png" alt="" className='w-[35px] mr-[10px] rounded-[35px] border-2 border-[#a1adb3]' width={35} height={35}/>My Account <FaAngleDown className='ml-[5px]'/>
            </a>

           
            <ul id='top-menu' class='dropdown-content top-menu-sty'>
                <li><a href="setting.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaCogs/>Admin Setting</a>
                </li>
                <li><a href="listing-all.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaListUl/> Listings</a>
                </li>
                <li><a href="hotel-all.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaBuilding/> Hotels</a>
                </li>
                <li><a href="package-all.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaUmbrella/> Tour Packages</a>
                </li>
                <li><a href="event-all.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaFlagCheckered/> Events</a>
                </li>
                <li><a href="offers.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaTags/> Offers</a>
                </li>
                <li><a href="user-add.html" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaUserPlus/> Add New User</a>
                </li>
                <li><a href="#" class="relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300"><FaUndo/> Backup Data</a>
                </li>
                <li class="divider"></li>
                <li><a href="#" class="ho-dr-con-last relative cursor-pointer inline-block overflow-hidden select-none align-middle z-[1] transition ease-out duration-300">< FaSignOutAlt/> Logout</a>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default Header;
