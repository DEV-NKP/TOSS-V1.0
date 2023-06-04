import Link from "next/link";
import DashboardLayoutHeader from "../../component/officer_component/officer_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/officer_component/officer_dashboard_layout_menu";
import Image from 'next/image'

import viewallofficer_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";

export default function ViewAllLogOut({data, viewdata}) {

  return (
    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="Log Out Informations" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewallofficer_tablestyle.toss_table_full_container_div].join(' ')}>


    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewallofficer_tablestyle.toss_table_full].join(' ')}>
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
            viewallofficer_tablestyle.toss_table_data].join(' ')}>
                
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
                <Link href={"/officer/all/logout_history/view/"+item.LogOutId+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View Details</Link>
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

var viewdata="";
const response_viewallofficer = await api.get('/officer/findlogoutbysignup/'+tossSession.Uname)
.then(response_viewallofficer => {
  // handle the response
  viewdata =  response_viewallofficer.data;

}).catch(error => {
  // handle the error
});

return { props: { data,viewdata } };


}
