import Link from "next/link";
import DashboardLayoutHeader from "../../component/admin_component/admin_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/admin_component/admin_dashboard_layout_menu";
import axios from "axios";
import Image from 'next/image'

import viewalladmin_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";



import adminpagestyles_icon from '../../../styles/admin_style/admin_viewprofile_style.module.css'
import adminpagestyles from '../../../styles/shared_style/toss_button_style.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';

export default function ViewAllOfficerByAdmin({data,viewdata}) {


    const router = useRouter();

    const updateData = async (e)=>{
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'admin_viewallofficer',
        query: {  Uname:data.Uname, inputValue: e.target.value}
      });
    }
  
    const downloadExcel = (e) => {
       e.preventDefault();
      const worksheet = XLSX.utils.json_to_sheet(viewdata);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "All_Officer.xlsx");
    };





    return (

    <>
    <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="All Officer" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewalladmin_tablestyle.toss_table_full_container_div].join(' ')}>
    <div className={[`grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-1`, 
    viewalladmin_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label for="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={[`relative left-3`, 
         viewalladmin_tablestyle.toss_table_search].join(' ')}>

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className={viewalladmin_tablestyle.toss_table_search_icon}/>
            </div>
            <input type="text" id="table-search-users" 
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" 
             onChange={updateData}
             />
        </div>

        <div className={[`pl-5 pr-5`, 
         viewalladmin_tablestyle.toss_table_search].join(' ')}>
        <button className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 mt-4 w-full max-w-xs font-medium`, 
       adminpagestyles.excel_download_button].join(' ')} onClick={downloadExcel}>
    Download Officer Info <FontAwesomeIcon icon={faDownload} className={[` pr-8`,adminpagestyles_icon.profile_icon].join(' ')}/>
</button>
</div>
    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewalladmin_tablestyle.toss_table_full].join(' ')}>
        <thead>
            <tr>
                <th scope="col" className="px-6 py-3">
                    Profile Picture
                </th>
                <th scope="col" className="px-6 py-3">
                    Uname
                </th>
                <th scope="col" className="px-6 py-3">
                    First Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Mobile Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    Designation
                </th>
                <th scope="col" className="px-6 py-3">
                    Employee ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Account Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata.map(item => (

            <tr key={item.Uname} className={[`border-b dark:border-gray-700`, 
            viewalladmin_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

                <td className="px-6 py-4">
                <Image width="100" height="100"  className="w-10 h-10 m-auto rounded-full" src={"http:/localhost:3000/admin/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>                </td>

                <td className="px-6 py-4">
                    {item.Uname}
                </td>
                <td className="px-6 py-4">
                    {item.FirstName}
                </td>
                <td className="px-6 py-4">
                {item.LastName}
                </td>
                <td className="px-6 py-4">
                {item.Email}
                </td>
                <td className="px-6 py-4">
                {item.MobileNo}
                </td>
                <td className="px-6 py-4">
                {item.Gender}
                </td>
                <td className="px-6 py-4">
                {item.Designation}
                </td>
                <td className="px-6 py-4">
                {item.EmployeeId}
                </td>
                <td className="px-6 py-4">
                {item.AccountNo}
                </td>

                <td className="px-6 py-4">
                {item.Status === "BANNED"&& 
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>                 
                        {item.Status}

                    </div>
                    }

{item.Status === "ACTIVE"&& 
                    <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>                 
                        {item.Status}

                    </div>
                    }
                </td>
  
                <td className="px-6 py-4">
                <Link href={"/admin/all/manage_officers/view/"+item.Uname+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View User</Link>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    
</div>

{/* <CSVLink data={data} headers={headers} filename="Export_COPS.csv">
  <button>Export</button>
</CSVLink> */}

</div>

{/* -----------------   MainMenu  -------------- */}
<DashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}    

    </>
  )
}

export async function getServerSideProps({query}) {
 
 

    const tossSession  = query;

    //console.log(Uname.data);
  var data="";
  const response = await api.get('/admin/viewprofile/'+tossSession.Uname)
  .then(response => {
    // handle the response
     data =  response.data;
  
  }).catch(error => {
    // handle the error
  });
  
  var viewdata="";
  if(tossSession.inputValue===null || tossSession.inputValue===undefined || tossSession.inputValue==="") {
  tossSession.inputValue="*";
  }
  const response_viewalladmin = await api.get('/admin/searchallofficer/'+tossSession.inputValue)
  .then(response_viewalladmin => {
    // handle the response
    viewdata =  response_viewalladmin.data;
  
  }).catch(async error => {
    
  });
  
  return { props: { data,viewdata } };

}