import Link from "next/link";
import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import * as XLSX from 'xlsx';
import viewalllogouts_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'
import ownerPageStyles_icon from '../../../styles/cops_style/cops_viewprofile_style.module.css'
import ownerPageStyles from '../../../styles/shared_style/toss_button_style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";

export default function ViewAllLogOut({data, viewdata}) {
  const downloadExcel = (e) => {
    e.preventDefault();
   const worksheet = XLSX.utils.json_to_sheet(viewdata[0].logouts);
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
   XLSX.writeFile(workbook, "LogOut_Info.xlsx");
 };
  return (
    <>

{/* ------------------   Header   --------------- */}


{/* ------------------   Header   --------------- */}
<div className="sm:ml-64">
<DashboardLayoutHeader Title="All Logout Informations" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewalllogouts_tablestyle.toss_table_full_container_div].join(' ')}>
<div className={[`grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-1`, 
    viewalllogouts_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label htmlFor="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}

        <div className={[`pl-5 pr-5`, 
         viewalllogouts_tablestyle.toss_table_search].join(' ')}>
        <button className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 mt-4 w-full max-w-xs font-medium`, 
       ownerPageStyles.excel_download_button].join(' ')} onClick={downloadExcel}>
    Download Login Info <FontAwesomeIcon icon={faDownload} className={[` pr-8`,ownerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>
    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewalllogouts_tablestyle.toss_table_full].join(' ')}>
        <thead className={[`text-xs text-gray-700 dark:text-gray-400`, 
    viewalllogouts_tablestyle.toss_table_head].join(' ')}>
            <tr>
                <th scope="col" className="px-6 py-3">
                    LogOut ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Uname
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    IP
                </th>
                
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata[0].logouts.map(item => (

            <tr key={item.LogOutId} className={[`border-b dark:border-gray-700`, 
            viewalllogouts_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

                <td className="px-6 py-4">
                    {item.LogOutId}
                </td>
                <td className="px-6 py-4">
                    {item.Uname}
                </td>
                <td className="px-6 py-4">
                {item.Time}
                </td>
                <td className="px-6 py-4">
                {item.IP}
                </td>
                

                  
                <td className="px-6 py-4">
                <Link href={"/cops/all/logout_history/view/"+item.LogOutId+"?Uname="+data.Uname} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View History</Link>
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
const response = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

var viewdata="";
const response_viewalllogs = await api.get('/cops/findlogoutbysignup/'+tossSession.Uname)
.then(response_viewalllogs => {
  // handle the response
  viewdata =  response_viewalllogs.data;

}).catch(error => {
  // handle the error
});

return { props: { data,viewdata } };


}
