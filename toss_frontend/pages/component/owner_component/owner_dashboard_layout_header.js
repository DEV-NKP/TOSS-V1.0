import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import headerstyles from '../../../styles/shared_style/dashboard_header_style.module.css'

import Image from 'next/image'
import { Navbar } from "flowbite-react";
import api from '../../api';
import { useRouter } from 'next/router';
import OwnerSessionCheck from "../session_check/owner_sessioncheck";
import React, { useState } from 'react';
import {faAngleDown, faArrowRight, faEnvelope, faHourglassStart, faHouseUser, faPhone, faReply, faRightFromBracket, faShieldHalved, faSitemap, faTriangleExclamation, faUser, faUserTag} from '@fortawesome/free-solid-svg-icons'

export default function OwnerDashboardLayoutHeader(props) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
        const response = await api.get('http://localhost:3000/toss/logout')
        console.log(response.data)
        sessionStorage.removeItem('Email');
        sessionStorage.removeItem('Uname');
        sessionStorage.removeItem('Post');
        router.push('/login');
      } catch (error) {
        console.error(error)
      }

};
  
  return (
    <>
<OwnerSessionCheck></OwnerSessionCheck>
    <div className="col-start-2 col-span-6">


<nav className={headerstyles.header_right}>
  
  <div className="max-w-screen-x2 flex flex-wrap items-center justify-between mx-auto p-3">
    
  <span className={headerstyles.lebel2}>
  <FontAwesomeIcon icon={faHouseUser} className={headerstyles.lebel2} />Owner
  </span>


  <div className="items-right w-full md:flex md:w-auto md:order-3">

  <ul className="flex flex-col font-medium p-2 md:p-0 mt-0 md:flex-row md:space-x-4">
  <li>
       <button onClick={toggleVisibility}  className="flex flex-col font-medium p-2 md:p-0 mt-0 md:flex-row md:space-x-4">
      
      <Image width="150" height="150" className={headerstyles.profile} src={"http:/localhost:3000/owner/getimage/"+props.ProfilePicture}
      alt={props.ProfilePicture}/>
      
       
      <div className={[` py-2 pl-0 pr-4`, headerstyles.lebel1].join(' ')}>{props.Uname}</div>
   
    </button> </li>
      {/*  */}
      {isVisible &&   
<div id="popover-user-profile"  
 className={[`absolute z-10 inline-block w-64 
text-sm text-gray-500 transition-opacity duration-300
 bg-white border border-gray-200 rounded-lg shadow-sm 
 opacity-1 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600`, 
 headerstyles.popup_div].join(' ')}
>
    <div className="p-3">
        <div className="flex items-center justify-between mb-2">
            
                <Image 
                 width="50" height="50" className={headerstyles.profile}
                  src={"http:/localhost:3000/owner/getimage/"+props.userdata.ProfilePicture}
                 alt={props.userdata.ProfilePicture}/>
            
           
        </div>
        <p 
         className={[`text-base font-semibold leading-none text-gray-900 dark:text-white`,
          headerstyles.popup_div_name].join(' ')}
       >
            {props.userdata.FirstName} {props.userdata.LastName}
        </p>
        <p className="mb-3 text-sm font-normal">
            <span 
            className={[`hover:underline`, headerstyles.popup_div_uname].join(' ')}
            
            >@{props.userdata.Uname}</span>
        </p>
        <p 
        className={[`mb-4 text-sm`, headerstyles.popup_div_post].join(' ')}
        >Vehicle Owner at <a href="/" className="text-blue-600 dark:text-blue-500 hover:underline">Traffic Operation & Surveillance System</a>.</p>
      
           
        <span className="hover:underline">
        <FontAwesomeIcon icon={faEnvelope} className={headerstyles.popup_div_con_ico} />
        {" "}{props.userdata.Email}</span>
          <br></br>  
        <span className="hover:underline"> 
        <FontAwesomeIcon icon={faPhone} className={headerstyles.popup_div_con_ico} /> 
        {" "}{props.userdata.MobileNo}</span>
           
        
    </div>

</div>
}
      {/*  */}

    <li>
    <div   className={[` py-0 pl-3 pr-4`, headerstyles.icon].join(' ')}>
    <button onClick={handleSignOut}><FontAwesomeIcon icon={faRightFromBracket} /></button>
    </div>
    </li>

      
    </ul>

  </div>
  
  <div className="items-center justify-between mt-1 w-full md:flex md:w-auto md:order-1" >
    <div className={headerstyles.lebel3}>
    {props.Title}
    </div>
  </div>

  </div>

</nav>

</div>


    </>
  )
}
