import Link from "next/link";
import { useRouter } from 'next/router';
import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import viewallowner_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";

export default function ViewAllOwner({data, viewdata}) {

    
    const router = useRouter();

    const updateData = async (e)=>{
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'cops_viewallowner',
        query: {  Uname:data.Uname, inputValue: e.target.value}
      });
    }
  
  return (
    <>
{/* ------------------   Header   --------------- */}


{/* ------------------   Header   --------------- */}
<div className="sm:ml-64">
<DashboardLayoutHeader  Title="View Owner" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewallowner_tablestyle.toss_table_full_container_div].join(' ')}>
    <div className={[`grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-1`, 
    viewallowner_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label for="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={[`relative left-3`, 
         viewallowner_tablestyle.toss_table_search].join(' ')}>

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className={viewallowner_tablestyle.toss_table_search_icon}/>
            </div>
            <input type="text" id="table-search-users" 
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" 
             onChange={updateData}
             />
        </div>

    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewallowner_tablestyle.toss_table_full].join(' ')}>
        <thead className={[`text-xs text-gray-700 uppercase dark:text-gray-400`, 
    viewallowner_tablestyle.toss_table_head].join(' ')}>
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
                    Driving License Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Vehicle License Number
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
                <th scope="col" className="px-6 py-3">
                    Case History
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata.map(item => (

            <tr key={item.Uname} className={[`border-b dark:border-gray-700`, 
            viewallowner_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

                <td className="px-6 py-4">
                <Image width="100" height="100"  className="m-auto w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>                </td>

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
                {item.DLN}
                </td>
                <td className="px-6 py-4">
                {item.VLN}
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
                <Link href={"/cops/all/owners/view/"+item.Uname+"?Uname="+data.Uname} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View user</Link>
                </td>

                <td className="px-6 py-4">
                <Link href={"/cops/all/cases/CaseHistoryByOwner/Viewall/"+item.Uname+"?Uname="+data.Uname} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Case History</Link>
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
  if(tossSession.inputValue===null || tossSession.inputValue===undefined || tossSession.inputValue==="") {
  tossSession.inputValue="*";
  }
  const response_viewallcops = await api.get('/cops/searchallowner/'+tossSession.inputValue)
  .then(response_viewallcops => {
    // handle the response
    viewdata =  response_viewallcops.data;
  
  }).catch(async error => {
    
  });
  
    
    return { props: { data,viewdata } };

}

