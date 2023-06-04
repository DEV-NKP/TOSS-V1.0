import Link from "next/link";
import DashboardLayoutHeader from "../../component/officer_component/officer_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/officer_component/officer_dashboard_layout_menu";
import Image from 'next/image'

import viewalltransaction_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";


import officerPageStyles_icon from '../../../styles/officer_style/officer_viewprofile_style.module.css'
import officerPageStyles from '../../../styles/shared_style/toss_button_style.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';


export default function ViewTransaction({data, viewdata}) {


  const router = useRouter();

  const updateData = async (e)=>{
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'officer_viewalltransaction',
      query: {  Uname:data.Uname, inputValue: e.target.value}
    });
  }

  const downloadExcel = (e) => {
     e.preventDefault();
    const worksheet = XLSX.utils.json_to_sheet(viewdata);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "All_Transactions.xlsx");
  };







  return (
    <>
    <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="All Transaction" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewalltransaction_tablestyle.toss_table_full_container_div].join(' ')}>
    <div className={[`grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-1`, 
    viewalltransaction_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label htmlFor="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={[`relative left-3`, 
         viewalltransaction_tablestyle.toss_table_search].join(' ')}>

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className={viewalltransaction_tablestyle.toss_table_search_icon}/>
            </div>
            <input type="text" id="table-search-users" 
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for transactions" 
             onChange={updateData}
             />
        </div>

        <div className={[`pl-5 pr-5`, 
         viewalltransaction_tablestyle.toss_table_search].join(' ')}>
        <button className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 mt-4 w-full max-w-xs font-medium`, 
       officerPageStyles.excel_download_button].join(' ')} onClick={downloadExcel}>
    Download Transaction Info <FontAwesomeIcon icon={faDownload} className={[` pr-8`,officerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>
    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewalltransaction_tablestyle.toss_table_full].join(' ')}>
        <thead>
            <tr>
              
                <th scope="col" className="px-6 py-3">
                    Sender Account
                </th>
                <th scope="col" className="px-6 py-3">
                    Receiver Account
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Case ID
                </th>
                
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata.map(item => (

            <tr key={item.TransactionId} className={[`border-b dark:border-gray-700`, 
            viewalltransaction_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

                <td className="px-6 py-4">
                    {item.SenderAc}
                </td>
                <td className="px-6 py-4">
                {item.ReceiverAc}
                </td>
                <td className="px-6 py-4">
                {item.Amount}
                </td>
                <td className="px-6 py-4">
                {item.Time}
                </td>
                <td className="px-6 py-4">
                {item.CaseId}
                </td>

                  
                <td className="px-6 py-4">
                <Link href={"/officer/all/transaction/view/"+item.TransactionId+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View Transaction</Link>
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
const response = await api.get('/officer/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

  //console.log(Uname.data);
  var viewdata="";
  if(tossSession.inputValue===null || tossSession.inputValue===undefined || tossSession.inputValue==="") {
  tossSession.inputValue="*";
  }
  const response_viewalltransaction = await api.get('/officer/searchalltransaction/'+tossSession.inputValue)
  .then(response_viewalltransaction => {
    // handle the response
    viewdata =  response_viewalltransaction.data;
  
  }).catch(async error => {
    
  });
  
  return { props: { data,viewdata } };

}
