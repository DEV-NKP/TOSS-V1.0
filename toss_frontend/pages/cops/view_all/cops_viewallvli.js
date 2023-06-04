import Link from "next/link";
import { useRouter } from 'next/router';
import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import viewallvli_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";


export default function ViewVli({data, viewdata}) {
    const router = useRouter();

    const updateData = async (e)=>{
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'cops_viewallvli',
        query: {  Uname:data.Uname, inputValue: e.target.value}
      });
    }
  
 
 
    return (
    <>



{/* ------------------   Header   --------------- */}


{/* ------------------   Header   --------------- */}
<div className="sm:ml-64">
<DashboardLayoutHeader Title="View VLI" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewallvli_tablestyle.toss_table_full_container_div].join(' ')}>
    <div className={[`flex items-center justify-between pb-6 pt-6`, 
    viewallvli_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label for="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={[`relative`, 
         viewallvli_tablestyle.toss_table_search].join(' ')}>

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className={viewallvli_tablestyle.toss_table_search_icon}/>
            </div>
            <input type="text" id="table-search-users" 
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 
            rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search for VLI"
            onChange={updateData}/>
        </div>
    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewallvli_tablestyle.toss_table_full].join(' ')}>
        <thead className={[`text-xs text-gray-700 uppercase dark:text-gray-400`, 
    viewallvli_tablestyle.toss_table_head].join(' ')}>
            <tr>
                <th scope="col" className="px-6 py-3">
                    VLI ID
                </th>
                <th scope="col" className="px-6 py-3">
                    License Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Chesis Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Engine Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Details
                </th>
                <th scope="col" className="px-6 py-3">
                    Owner Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Owner NID
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata.map(item => (

            <tr key={item.VliId} className={[`border-b dark:border-gray-700`, 
            viewallvli_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

                <td className="px-6 py-4">
                    {item.VliId}
                </td>
                <td className="px-6 py-4">
                    {item.LicenseNo}
                </td>
                <td className="px-6 py-4">
                {item.ChesisNo}
                </td>
                <td className="px-6 py-4">
                {item.EngineNo}
                </td>
                <td className="px-6 py-4">
                {item.Details}
                </td>
                <td className="px-6 py-4">
                {item.OwnerName}
                </td>
                <td className="px-6 py-4">
                {item.OwnerNid}
                </td>
                
                <td className="px-6 py-4">
                <Link href={"/cops/all/vli/view/"+item.VliId+"?Uname="+data.Uname} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View VLI</Link>
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




















    {/* <OfficerDashboardHeader></OfficerDashboardHeader>

<OfficerManageVliHeader></OfficerManageVliHeader>
<div style={{  paddingTop: "20px", left:"20px"}}>


    <h1>View Vli</h1>
    <ul>
        {data.map(item => (
          <li key={item.VliId}>
      
        <Link href={"/officer/all/vli/view/"+item.VliId}>{item.VliId}</Link>
            </li>
        ))}
      </ul>
    </div>
    <HomeLayoutTailer></HomeLayoutTailer> */}
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
    if(tossSession.inputValue===null || tossSession.inputValue===undefined || tossSession.inputValue==="") {
    tossSession.inputValue="*";
    }
    const response_viewallcase = await api.get('/cops/searchallvli/'+tossSession.inputValue)
    .then(response_viewallcase => {
      // handle the response
      viewdata =  response_viewallcase.data;
    
    }).catch(async error => {
      
    });
    
    return { props: { data,viewdata } };

}
