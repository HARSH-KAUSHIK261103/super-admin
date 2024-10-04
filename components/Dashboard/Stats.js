import { FaChartBar, FaAddressCard, FaEnvelopeOpen , FaArrowUp } from 'react-icons/fa';
import { IoLogoUsd } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../app/globals.css"

const DashboardCards = ({ items }) => {
  const icons = [FaChartBar, IoLogoUsd, FaAddressCard, FaEnvelopeOpen];

  return (
    <div class="ad-v2-hom-info">
    <div class="relative overflow-hidden my-6 mx-0">
      <ul>
        <li className='float-left w-1/4'>
          <div class="bg-white m-1 flex flex-row relative overflow-hidden rounded shadow-md ad-hom-box-1">
            <span class="text-center h-24 w-[100px] inline-block float-left ad-hom-col-1"><FaChartBar className='text-white text-[90px] text-center pt-8'/></span>
            <div class="p-5 float-left">
            <p className='text-[#9a9a9a] flex'><FaArrowUp className='text-[12px]'/> TodayViews</p>
            <h3>22,520</h3>
            </div>
          </div>
        </li>
        <li>
          <div class="bg-white m-1 relative overflow-hidden rounded shadow-md ad-hom-box-2">
            <span class="text-center ad-hom-col-com ad-hom-col-2"><IoLogoUsd /></span>
            <div class="p-5 float-left">
            <p><FaArrowUp/> Earnings</p>
            <h3>22,520</h3>
            </div>
          </div>
        </li>
        <li>
          <div class="bg-white m-1 relative overflow-hidden rounded shadow-md ad-hom-box-3">
            <span class="text-center ad-hom-col-com ad-hom-col-3">< FaAddressCard/></span>
            <div class="p-5 float-left">
            <p><FaArrowUp/> Users</p>
            <h3>22,520</h3>
            </div>
          </div>
        </li>
        <li>
          <div class="bg-white m-1 relative overflow-hidden rounded shadow-md ad-hom-box-4">
            <span class="text-center ad-hom-col-com ad-hom-col-4"><FaEnvelopeOpen/></span>
            <div class="p-5 float-left">
            <p><FaArrowUp/> Enquiry</p>
            <h3>22,520</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
          </div>
  );
};

export default DashboardCards;
