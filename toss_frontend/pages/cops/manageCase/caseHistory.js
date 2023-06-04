import Link from "next/link";
import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";

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




export default function ViewCase({data, viewdata}) {

  
    const router = useRouter();



  return (
    <>
    <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="All Cases" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewalladmin_tablestyle.toss_table_full_container_div].join(' ')}>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewalladmin_tablestyle.toss_table_full].join(' ')}>
        <thead className={[`text-xs text-gray-700 uppercase dark:text-gray-400`, 
    viewalladmin_tablestyle.toss_table_head].join(' ')}>
            <tr>
           
                <th scope="col" className="px-6 py-3">
                    Accused Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Cops User Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Violation Of
                </th>
                <th scope="col" className="px-6 py-3">
                    Violation Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Section
                </th>
                <th scope="col" className="px-6 py-3">
                    Sub Section
                </th>
                <th scope="col" className="px-6 py-3">
                    Vehicle License Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Penalty Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    City
                </th>
                <th scope="col" className="px-6 py-3">
                    Street
                </th>
                <th scope="col" className="px-6 py-3">
                    ZIP Code
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Case Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Penalty Details
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata.map(item => (

            <tr key={item.CaseId} className={[`border-b dark:border-gray-700`, 
            viewalladmin_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

              
                <td className="px-6 py-4">
                    {item.AccusedUname}
                </td>
                <td className="px-6 py-4">
                    {item.CopsUname}
                </td>
                <td className="px-6 py-4">
                {item.ViolationOf}
                </td>
                <td className="px-6 py-4">
                {item.ViolationDetails}
                </td>
                <td className="px-6 py-4">
                {item.Section}
                </td>
                <td className="px-6 py-4">
                {item.SubSection}
                </td>
                <td className="px-6 py-4">
                {item.VLN}
                </td>
                <td className="px-6 py-4">
                {item.PenaltyAmount}
                </td>
                <td className="px-6 py-4">
                {item.City}
                </td>
                <td className="px-6 py-4">
                {item.Street}
                </td>
                <td className="px-6 py-4">
                {item.ZIPCode}
                </td>

                <td className="px-6 py-4">
                    {item.Time}                    
                </td>

                <td className="px-6 py-4">
                    {item.CaseStatus}                    
                </td>
                <td className="px-6 py-4">
                    {item.PenaltyDetails}                    
                </td>
                  
                <td className="px-6 py-4">
                <Link href={"/cops/all/cases/casehistory/"+item.CaseId+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View Case</Link>
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
<DashboardLayoutMenu Uname={data.Uname} userdata={data} ProfilePicture={data.ProfilePicture}></DashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}    
    </>
  )
}

export async function getServerSideProps({query}) {
 


  const tossSession  = query;

  //console.log(Uname.data);
var data="";
const response = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

  //console.log(Uname.data);
  var viewdata="";
  const response_viewallcase = await api.get('/cops/viewcasebycops/'+tossSession.Uname)
  .then(response_viewallcase => {
    // handle the response
    viewdata =  response_viewallcase.data;
  
  }).catch(error => {
    // handle the error
  });
  
  
  return { props: { data,viewdata } };


}
