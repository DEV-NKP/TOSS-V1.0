import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'
import CopsDashboardLayoutHeader from "../../../../../component/cops_component/cops_dashboard_layout_header";
import CopsDashboardLayoutMenu from "../../../../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CopsViewPageStyles from '../../../../../styles/cops_style/cops_viewprofile_style'


import api from "@/pages/api";
import { faCross, faDeleteLeft, faEraser, faUnlockKeyhole, faUserPen, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function ViewAllCasesByAdmin({data, casedata}) {

  const router= useRouter();

  const deleteCase = async (e)=>{
    e.preventDefault();
    const response = await api.delete('/cops/deletecasebyid/'+casedata.CaseId);

      router.back();
     
  
  }


  
  const editcase = async (e)=>{
    e.preventDefault();
 
    router.push( "/cops/all/cases/modify/"+casedata.CaseId+"?Uname="+data.Uname);
     
  
  }
  
  
    return (

    <>
<div class="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <CopsDashboardLayoutHeader   Title="All cases" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



<label className={[` pb-5 pt-5 pl-5 pr-5 `, 
       CopsViewPageStyles.owner_heading_label].join(' ')}>{casedata.AccusedUname}'s Information</label>


{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       CopsViewPageStyles.owner_profile_main].join(' ')}>

 <div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       CopsViewPageStyles.owner_heading_label].join(' ')}>Case No: {casedata.CaseId}</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-2">

    <div className="  ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > CaseId
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
       >{casedata.CaseId}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Accused User Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.AccusedUname}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Cops User Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')}
      >{casedata.CopsUname}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Violation Reason
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.ViolationOf}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Violation Details
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.ViolationDetails}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Section
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.Section}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Sub Section
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.SubSection}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       CopsViewPageStyles.owner_profile_lebel].join(' ')} > Vehicle License Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.VLN}
    </p>
    </div>


      </div>

    <div className=" ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      CopsViewPageStyles.owner_profile_lebel].join(' ')} > Penalty Amount
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.PenaltyAmount}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      CopsViewPageStyles.owner_profile_lebel].join(' ')} > City
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.City}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      CopsViewPageStyles.owner_profile_lebel].join(' ')} > Street
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.Street}
    </p>
    </div>

    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      CopsViewPageStyles.owner_profile_lebel].join(' ')} > ZIP Code
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      CopsViewPageStyles.owner_profile_data].join(' ')} 
      >{casedata.ZIPCode}
    </p>
    </div>

    <div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  CopsViewPageStyles.owner_profile_lebel].join(' ')} > Time
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  CopsViewPageStyles.owner_profile_data].join(' ')} 
  >{casedata.Time}
</p>
</div>

<div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  CopsViewPageStyles.owner_profile_lebel].join(' ')} > Case Status
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  CopsViewPageStyles.owner_profile_data].join(' ')} 
  >{casedata.CaseStatus}
</p>
</div>

<div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  CopsViewPageStyles.owner_profile_lebel].join(' ')} > Penalty Details
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  CopsViewPageStyles.owner_profile_data].join(' ')} 
  >{casedata.PenaltyDetails}
</p>
</div>

    </div>

</div>


{/* ------------------   Bottom buttons   --------------- */}

<div className="grid grid-cols-2 gap-3 pb-10 pl-4 sm:grid-cols-4">
    <div></div>




     <div className="m-3 pt-0 ml-2">
  <button onClick={editcase} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       CopsViewPageStyles.profile_bottom_button_area].join(' ')}  type="submit" >Update Case Info<FontAwesomeIcon icon={faUserPen} className={CopsViewPageStyles.profile_icon}/> </button>
  </div>



 
   <div className="m-3 pt-0 ml-2">
  <button onClick={deleteCase} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       CopsViewPageStyles.profile_bottom_button_area].join(' ')}  type="submit" >Invoke Case <FontAwesomeIcon icon={faUnlockKeyhole} className={CopsViewPageStyles.profile_icon}/> </button>
  </div>  

  

</div>
</div>


{/* ------------------   Bottom buttons   --------------- */}




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
<CopsDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}

    </>
  )
}

export async function getServerSideProps(context) {

  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_admin = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response_admin => {
  // handle the response
  data =  response_admin.data;

}).catch(error => {
  // handle the error
});


  var casedata="";
  const CaseId=context.query.CaseId;
  const response = await api.get('/cops/viewcasebyid/'+CaseId);
  casedata = await response.data;

return { props: { data,casedata } }

}
