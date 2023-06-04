import Link from "next/link";
import api from "@/pages/api";
import DashboardLayoutHeader from "../../component/owner_component/owner_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/owner_component/owner_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import viewalllogouts_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'
import { useRouter } from 'next/router';
import ownerPageStyles_icon from '../../../styles/owner_style/owner_viewprofile_style.module.css'
import ownerPageStyles from '../../../styles/shared_style/toss_button_style.module.css'
import * as XLSX from 'xlsx';
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
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="Log Out History" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewalllogouts_tablestyle.toss_table_full_container_div].join(' ')}>

<div className={[`grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-1`, 
    viewalllogouts_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label for="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}

        <div className={[`pl-5 pr-5`, 
         viewalllogouts_tablestyle.toss_table_search].join(' ')}>
        <button className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 mt-4 w-full max-w-xs font-medium`, 
       ownerPageStyles.excel_download_button].join(' ')} onClick={downloadExcel}>
    Download LogOut Info <FontAwesomeIcon icon={faDownload} className={[` pr-8`,ownerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>
    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewalllogouts_tablestyle.toss_table_full].join(' ')}>
        <thead>
            <tr>
                
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
                    {item.Uname}
                </td>
                <td className="px-6 py-4">
                {item.Time}
                </td>
                <td className="px-6 py-4">
                {item.IP}
                </td>
                

                  
                <td className="px-6 py-4">
                <Link href={"/owner/all/logout_history/view/"+item.LogOutId+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View Details</Link>
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
const response = await api.get('/owner/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

var viewdata="";
const response_viewallofficer = await api.get('/owner/findlogoutbysignup/'+tossSession.Uname)
.then(response_viewallofficer => {
  // handle the response
  viewdata =  response_viewallofficer.data;

}).catch(error => {
  // handle the error
});

return { props: { data,viewdata } };


}
