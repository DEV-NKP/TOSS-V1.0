import { useRouter } from 'next/router'
import CopsDashboardLayoutHeader from "../../../../component/cops_component/cops_dashboard_layout_header";
import CopsDashboardLayoutMenu from "../../../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import vlipagestyles from '../../../../../styles/cops_style/cops_viewprofile_style.module.css'
import api from "@/pages/api";
import { faEraser, faUnlockKeyhole, faUserPen, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ViewVliByOfficer({data, vlidata}) {
    const router = useRouter();



    // const deleteVli = async (e)=>{
    //   e.preventDefault();
    //   const response = await api.delete('/officer/deletevli/'+vlidata.VliId);
  
    //     router.back();
    
    // }





    return (

    <>



<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <CopsDashboardLayoutHeader Title="View VLI"  userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       vlipagestyles.owner_profile_main].join(' ')}>

<label className={[` pb-5 pt-5 pl-5 pr-5 `, 
       vlipagestyles.owner_heading_label].join(' ')}>{vlidata.OwnerName}'s Vehicle License Information</label>



<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-2">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       vlipagestyles.owner_profile_lebel].join(' ')} > License Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       vlipagestyles.owner_profile_data].join(' ')} 
       >{vlidata.LicenseNo}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       vlipagestyles.owner_profile_lebel].join(' ')} > Chesis Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       vlipagestyles.owner_profile_data].join(' ')} 
      >{vlidata.ChesisNo}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       vlipagestyles.owner_profile_lebel].join(' ')} > Engine Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       vlipagestyles.owner_profile_data].join(' ')}
      >{vlidata.EngineNo}
    </p>
    </div>


      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      vlipagestyles.owner_profile_lebel].join(' ')} > Details
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      vlipagestyles.owner_profile_data].join(' ')} 
      >{vlidata.Details}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      vlipagestyles.owner_profile_lebel].join(' ')} > Owner Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      vlipagestyles.owner_profile_data].join(' ')} 
      >{vlidata.OwnerName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      vlipagestyles.owner_profile_lebel].join(' ')} > Owner Nid
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      vlipagestyles.owner_profile_data].join(' ')} 
      >{vlidata.OwnerNid}
    </p>
    </div>


    </div>


</div>


{/* ------------------   Bottom buttons   --------------- */}

{/* <div className="grid grid-cols-1 gap-3 pb-10 pl-4 sm:grid-cols-4">
    
  <div></div>

  <div className="m-3 pt-0 ml-2">
  <button className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       vlipagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Edit VLI<FontAwesomeIcon icon={faXmark} className={vlipagestyles.profile_icon}/> </button>
  </div>

   <div className="m-3 pt-0 ml-2">
  <button onClick={deleteVli} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       vlipagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Delete VLI <FontAwesomeIcon icon={faEraser} className={vlipagestyles.profile_icon}/> </button>
  </div>
  <div></div>
</div> */}


{/* ------------------   Bottom buttons   --------------- */}



</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <CopsDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}






















    {/* <OfficerDashboardHeader></OfficerDashboardHeader>

<div style={{  paddingTop: "20px", left:"20px"}}>

<h1>Vli Id: {data.VliId}</h1>
      <h1>License No: {data.LicenseNo}</h1>
      <h1>Chesis No: {data.ChesisNo}</h1>
      <h1>Engine No: {data.EngineNo}</h1>
      <h1>Details: {data.Details}</h1>
      <h1>Owner Name: {data.OwnerName}</h1>
      <h1>Owner Nid: {data.OwnerNid}</h1>
     
  
    </div>
<br/><br/>
<Link href={"/officer/all/vli/modify/"+data.VliId}>Modify Vli</Link>
<br/><br/>

    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
    <HomeLayoutTailer></HomeLayoutTailer> */}
    </>
  )
}

export async function getServerSideProps(context) {
    
    
  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_cops = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response_cops => {
  // handle the response
  data =  response_cops.data;

}).catch(error => {
  // handle the error
});


  var vlidata="";
  const VliId=context.query.VliId;
  const response = await api.get('/cops/viewvlibyid/'+VliId);

  
  vlidata = await response.data;

return { props: { data,vlidata } }
  
}
