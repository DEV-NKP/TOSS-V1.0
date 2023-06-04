import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faHourglassStart, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUser, faUserTag} from '@fortawesome/free-solid-svg-icons'
import menustyles from '../../../styles/shared_style/dashboard_menu_style.module.css'

import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import CopsSessionCheck from "../session_check/cops_sessioncheck";

import React, { useRef } from 'react';
import { Sidebar } from "flowbite-react";
export default function CopsDashboardLayoutMenu(props) {
 
  const list1 = (e)=>{
    e.preventDefault();
  router.push(
    {
      pathname: '',
      query: {Uname: data.Uname},
  
    }
  )
  }
 
  return (
    <>
<CopsSessionCheck></CopsSessionCheck>
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className={[`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`, 
     menustyles.dash_menu_color].join(' ')} aria-label="Sidebar">
   <div className={[`h-full px-0 py-4 overflow-y-auto`, 
     menustyles.dash_scroll].join(' ')}>

   <div  className={[`pb-4 fixed w-full z-20 top-0 left-0 border-b p-3`, 
     menustyles.left_content].join(' ')} >
   <img
        src="/shared_resources/logo.png"
        className={[`mr-2 h-6 sm:h-9`, 
        menustyles.logo].join(' ')}

        alt="Toss Logo"
      />
      <span 
     className={[`self-center whitespace-nowrap`, 
     menustyles.toss].join(' ')}
     >
        TOSS
        <br/>
        <span 
        className={[`self-center whitespace-nowrap`, 
        menustyles.toss_full].join(' ')}>
        Traffic Operation and Surveillance System
      </span>
      </span>

        </div>
        <div>

      <ul className="space-y-2 ml-6 mt-10 pt-10" >
      <li>
      
      <Link href={"/cops/profile/cops_viewprofile?Uname="+props.Uname}>

        <div className={[`flex items-center p-3 pl-2 ml-3`, 
           menustyles.menu_lebel].join(' ')}>
         <FontAwesomeIcon icon={faUser} className="flex-shrink-0 w-6 h-6"/>
         <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
         </div>
        </Link>
       
         </li>

         <li>

         <Link href={"/cops/manageCase/cops_viewallcase?Uname="+props.Uname}>
          <div className={[`flex items-center p-3 pl-2 ml-3`, 
           menustyles.menu_lebel].join(' ')}>
         <FontAwesomeIcon icon={faUserTag} className="flex-shrink-0 w-6 h-6"/>
         <span className="flex-1 ml-3 whitespace-nowrap">Manage Cases</span>
         </div>
          </Link>
        

         <ul className="space-y-0 pt-0 ml-8 pl-0">
         
         <li>
         <Link href={"/cops/manageCase/cops_createcase?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>Create Case
           </div>
          </Link>
        
         </li>
         
         <li>
         <Link href={"/cops/manageCase/caseHistory?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>Previous Cases
           </div>
          </Link>
        
         </li>


         {/* <li>
         <Link href="">
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>Pending Cases
           </div>
          </Link>
        
         </li> */}

        {/* ---------will be implemented in view all owner , view individual owner and cases for that owner --- */}
        
         </ul>

         </li>

         <li>
         <Link href={"/cops/view_all/cops_viewallcops?Uname="+props.Uname}>
          <div className={[`flex items-center p-3 pl-2 ml-3`, 
           menustyles.menu_lebel].join(' ')}>
         <FontAwesomeIcon icon={faSitemap} className="flex-shrink-0 w-6 h-6"/>
         <span className="flex-1 ml-3 whitespace-nowrap">View All</span>
         </div>
          </Link>
       
         <ul className="space-y-0 pt-0 ml-8 pl-0">
         <li>
        
         <Link href={"/cops/view_all/cops_viewallcops?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>View All Cops
           </div>
          </Link>
        
         </li>
         <li>
        
         <Link href={"/cops/view_all/cops_viewallofficer?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>View All Officer
           </div>
          </Link>
        
         </li>
         <li>
         <Link href={"/cops/view_all/cops_viewallowner?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>View All Owner
           </div>
          </Link>
        
         </li>
        
        
         <li>

         <Link href={"/cops/view_all/cops_viewallcase?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>View All Case
           </div>
          </Link>
        
         </li>
         <li>
         <Link href={"/cops/view_all/cops_viewallvli?Uname="+props.Uname}>
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>View All Vli
           </div>
          </Link>
        
         </li>
        
         </ul>

         </li>

        <li>
        <Link href={"/cops/report/cops_addreport?Uname="+props.Uname}>
          <div className={[`flex items-center p-3 pl-2 ml-3`, 
           menustyles.menu_lebel].join(' ')}>
         <FontAwesomeIcon icon={faTriangleExclamation} className="flex-shrink-0 w-6 h-6"/>
         <span className="flex-1 ml-3 whitespace-nowrap">Report</span>
         </div>
          </Link>
       
         </li>

        
         <li>
         <Link href={"/cops/history/cops_viewloginhistory?Uname="+props.Uname}>
          <div className={[`flex items-center p-3 pl-2 ml-3`, 
           menustyles.menu_lebel].join(' ')}>
         <FontAwesomeIcon icon={faHourglassStart} className="flex-shrink-0 w-6 h-6"/>
         <span className="flex-1 ml-3 whitespace-nowrap">Log History</span>
         </div>
          </Link>
         
         <ul className="space-y-0 pt-0 ml-8 pl-0">
         <li>
         <Link href={"/cops/history/cops_viewloginhistory?Uname="+props.Uname}>
         
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>Log In
           </div>
          </Link>
        
         </li>
         <li>
         <Link href={"/cops/history/cops_viewlogouthistory?Uname="+props.Uname}>
         
          <div className={[`pl-6 w-18 h-10 items-center pt-2 pb-5`, 
           menustyles.sub_menu_lebel].join(' ')}>Log Out
           </div>
          </Link>
        
         </li>
        
         </ul>
         </li>
      </ul>

      </div>

      </div>

</aside>


    </>
  )
}
