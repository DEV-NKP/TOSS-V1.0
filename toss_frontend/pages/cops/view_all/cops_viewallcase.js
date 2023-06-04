import Link from "next/link";
import { useRouter } from 'next/router';
import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import viewallcases_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import api from "@/pages/api";


export default function ViewAllCase({data, viewdata}) {

    const router = useRouter();

    const updateData = async (e)=>{
      e.preventDefault();
      // redirect to the same page with query params containing the input value
      router.push({
        pathname: 'cops_viewallcase',
        query: {  Uname:data.Uname, inputValue: e.target.value}
      });
    }
  



  return (
    <>
{/* ------------------   Header   --------------- */}


{/* ------------------   Header   --------------- */}
<div className="sm:ml-64">
<DashboardLayoutHeader Title="All Cases" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewallcases_tablestyle.toss_table_full_container_div].join(' ')}>
    <div className={[`grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-1`, 
    viewallcases_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label htmlFor="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={[`relative left-3`, 
         viewallcases_tablestyle.toss_table_search].join(' ')}>

            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className={viewallcases_tablestyle.toss_table_search_icon}/>
            </div>
            <input type="text" id="table-search-users" 
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Cases" 
             onChange={updateData}
             />
        </div>

    </div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400`, 
    viewallcases_tablestyle.toss_table_full].join(' ')}>
        <thead className={[`text-xs text-gray-700 uppercase dark:text-gray-400`, 
    viewallcases_tablestyle.toss_table_head].join(' ')}>
            <tr>
                <th scope="col" className="px-6 py-3">
                    Accused Name
                </th>
                <th scope="col" className="px-6 py-3">
                    COPS Uname
                </th>
                <th scope="col" className="px-6 py-3">
                    Violation Reason
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
            viewallcases_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="flex items-center px-6 py-4 text-gray-900">  
                    <Image width="150" height="150" className="w-10 h-10 rounded-full" src={"http:/localhost:3000/cops/getimage/"+data.ProfilePicture} alt={data.ProfilePicture}/>
                    <div className="pl-3 pb-">
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

            

                {/* <td className="px-6 py-4">
                    {item.CaseStatus}                    
                </td> */}

               


                
                <td className="px-6 py-4">
                <Link href={"/cops/all/cases/view/"+item.CaseId+"?Uname="+data.Uname} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Case</Link>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    
</div>



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
  
    //console.log(Uname.data);

    var viewdata="";
    if(tossSession.inputValue===null || tossSession.inputValue===undefined || tossSession.inputValue==="") {
    tossSession.inputValue="*";
    }
    const response_viewallcase = await api.get('/cops/searchallcase/'+tossSession.inputValue)
    .then(response_viewallcase => {
      // handle the response
      viewdata =  response_viewallcase.data;
    
    }).catch(async error => {
      
    });
    
    return { props: { data,viewdata } };

    
}
