import Image from 'next/image';
import Link from 'next/link';
import { FaChartBar, FaListUl, FaUser, FaUmbrella, FaHotel, FaCamera, FaCalendarAlt, FaBraille, FaDollarSign, FaTag, FaTicketAlt, FaRss, FaPlusSquare, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app/globals.css"
const Sidebar = () => {
  
  return (
   
        <div className="float-left w-[20%] bg-[#e8edf2] text-white h-[91%] fixed top-14 transition-all duration-500 ease-in-out overflow-y-auto sb2-1">
          
          <div className="sb2-12">
            <ul>
              <li>
                <Image className='ml-24 w-[75px] rounded-full border-3 border-white shadow-[0px_1px_10px_1px_rgba(0,0,0,0.15)]' src="/6.png" alt="" width={100} height={100} />
              </li>
              <li>
                <h5>
                  Deepak Das <span> Bangalore</span>
                </h5>
              </li>
              <li></li>
            </ul>
          </div>
          
          <div className="sb2-13">
            <ul className="shadow-[0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12),_0_3px_1px_-2px_rgba(0,0,0,0.2)] collapsible" data-collapsible="accordion">
              <li >
                <Link href="index.html" className="bg-[#167ee6] text-white link ">
                  <div  className='flex items-center gap-x-4'><FaChartBar aria-hidden="true" /> Dashboard </div>
                </Link>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4'><FaListUl aria-hidden="true" /> User Management </div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="/admin-management">Admin & Sub-admin Management</Link></li>
                    <li><Link className='link' href="/employer-management">Employer Management</Link></li>
                    <li><Link className='link' href="/jobseeker-management">Job Seeker Management</Link></li>
                    <li><Link className='link' href="listing-cat-add.html">User Activity Logs</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4'><FaUser aria-hidden="true" /> Job Managenent </div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="/approval">Job Approval Workflow</Link></li>
                    <li><Link className='link' href="/job-listing">Job Listings</Link></li>
                    <li><Link className='link' href="user-add.html">Featured Jobs</Link></li>
                    <li><Link className='link' href="/job-categories">Job Categories</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4'><FaUmbrella aria-hidden="true" /> Reports & Analytics
                  </div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="/userstatistics">User Statistics</Link></li>
                    <li><Link className='link' href="/jobpostingstatistics">Job Posting Statistics</Link></li>
                    <li><Link className='link' href="/revenue-reports">Revenue Reports</Link></li>
                    <li><Link className='link' href="/engagement-metrics">Engagement Metrics</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaHotel aria-hidden="true" />Payment & Subscription Management</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="/payment-gateway">Payment Gateway Integration</Link></li>
                    <li><Link className='link' href="/transaction-history">Transaction History</Link></li>
                    <li><Link className='link' href="/subscription-plans">Subscription Plans</Link></li>
                    <li><Link className='link' href="/invoice-management">Invoice Management</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaCamera aria-hidden="true" />Notifications & Alerts</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="sight-see-all.html">System Alerts</Link></li>
                    <li><Link className='link' href="sight-see-add.html">Custom Notifications</Link></li>
                    <li><Link className='link' href="sight-see-add.html">Email Templates</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaCalendarAlt aria-hidden="true" />Support & Feedback </div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="/support-tickets">Support Tickets</Link></li>
                    <li><Link className='link' href="/user-feedback">User Feedback</Link></li>
                    <li><Link className='link' href="/faq-management">FAQ Management</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaBraille aria-hidden="true" />Security & Compliance</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="ui-kit.html">Access Controls</Link></li>
                    <li><Link className='link' href="ui-form.html">Data Backup</Link></li>
                    <li><Link className='link' href="ui-table.html">GDPR Compliance</Link></li>
                    
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaDollarSign aria-hidden="true" />System Settings</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="discount.html">Site Settings</Link></li>
                    <li><Link className='link' href="discount-add.html">Localization</Link></li>
                    <li><Link className='link' href="discount-add.html">API Management</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaTag aria-hidden="true" />Audit Logs</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="offers.html">Activity Logs</Link></li>
                    <li><Link className='link' href="offers-add.html">Change Logs</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaTicketAlt aria-hidden="true" />Referral Program Management</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="referral-tracking">Referral Tracking</Link></li>
                    <li><Link className='link' href="incentive-management">Incentive Management</Link></li>
                    <li><Link className='link' href="referral-analytics">Referral Analytics</Link></li>
                    <li><Link className='link' href="referral-codes">Referral Codes</Link></li>
                    <li><Link className='link' href="payout-management">Payout Management</Link></li>
                  </ul>
                </div>
              </li>
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaRss aria-hidden="true" />Advertisement Management</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="blog-all.html">Ad Slots Management</Link></li>
                    <li><Link className='link' href="blog-add.html">Banner & Display Ads</Link></li>
                    <li><Link className='link' href="blog-add.html">Ad Performance Reports</Link></li>
                  </ul>
                </div>
              </li>
              {/* <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaRss aria-hidden="true" />Bulk Operations</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="blog-all.html">Bulk User Management</Link></li>
                    <li><Link className='link' href="blog-add.html">Bulk Job Posting Management</Link></li>
                    <li><Link className='link' href="blog-add.html">Bulk Email/SMS Campaigns</Link></li>
                  </ul>
                </div>
              </li> */}
              {/* <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaRss aria-hidden="true" />Event & Webinar Management</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="blog-all.html">Event Schedulin</Link></li>
                    <li><Link className='link' href="blog-add.html">Event Promotion</Link></li>
                    <li><Link className='link' href="blog-add.html">Registration Management</Link></li>
                  </ul>
                </div>
              </li> */}
              {/* <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaRss aria-hidden="true" />API and Integration Management</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="blog-all.html">Third-Party Integrations</Link></li>
                    <li><Link className='link' href="blog-add.html">API Usage Monitoring</Link></li>
                    
                  </ul>
                </div>
              </li> */}
              <li className='menuItem'>
                <Link href="javascript:void(0)" className="collapsible-header">
                  <div className='flex items-center gap-x-4' ><FaRss aria-hidden="true" />Customization Options</div>
                </Link>
                <div className="collapsible-body left-sub-menu">
                  <ul>
                    <li><Link className='link' href="blog-all.html">Customizable User Interface</Link></li>
                    <li><Link className='link' href="blog-add.html">Custom Reporting</Link></li>
                    
                  </ul>
                </div>
              </li>
              <li>
                <Link className='link' href="social-media.html">
                  <div className='flex items-center gap-x-4' ><FaPlusSquare aria-hidden="true" /> Social Media</div>
                </Link>
              </li>
              <li>
                <Link className='link' href="login.html" target="_blank">
                  <div className='flex items-center gap-x-4' ><FaSignOutAlt aria-hidden="true" /> Login</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      
  );
};

export default Sidebar;
