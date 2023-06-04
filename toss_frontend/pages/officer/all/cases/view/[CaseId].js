import { useRouter } from 'next/router'
import OfficerDashboardLayoutHeader from "../../../../component/officer_component/officer_dashboard_layout_header";
import OfficerDashboardLayoutMenu from "../../../../component/officer_component/officer_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import casepagestyles from '../../../../../styles/officer_style/officer_viewprofile_style.module.css'
import api from "@/pages/api";
import { faEraser, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";

export default function ViewAllCasesByOfficer({data, casedata}) {
    const router = useRouter();

    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OfficerDashboardLayoutHeader Title="Case Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       casepagestyles.owner_profile_main].join(' ')}>

<div className="grid grid-cols-1 pl-10 pr-10 pt-4 pb-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       casepagestyles.owner_heading_label].join(' ')}>{casedata.CaseId}'s Information</label>
<div></div>
</div>


<div className="grid grid-cols-1 gap-3 pl-10 pr-10 pb-6 sm:grid-cols-2">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       casepagestyles.owner_profile_lebel].join(' ')} > Accused Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
       >{casedata.AccusedUname}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       casepagestyles.owner_profile_lebel].join(' ')} > COPS Uname
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.CopsUname}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       casepagestyles.owner_profile_lebel].join(' ')} > Violation Reason
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.ViolationOf}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       casepagestyles.owner_profile_lebel].join(' ')} > Violation Details
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.ViolationDetails}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       casepagestyles.owner_profile_lebel].join(' ')} > Section
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.Section}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       casepagestyles.owner_profile_lebel].join(' ')} > Sub Section
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.SubSection}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       casepagestyles.owner_profile_lebel].join(' ')} > Vehicle License Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.VLN}
    </p>
    </div>
    

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      casepagestyles.owner_profile_lebel].join(' ')} > Penalty Amount
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.PenaltyAmount}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      casepagestyles.owner_profile_lebel].join(' ')} > City
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.City}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      casepagestyles.owner_profile_lebel].join(' ')} > Street
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.Street}
    </p>
    </div>

    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      casepagestyles.owner_profile_lebel].join(' ')} > ZIP Code
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      casepagestyles.owner_profile_data].join(' ')} 
      >{casedata.ZIPCode}
    </p>
    </div>

    <div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  casepagestyles.owner_profile_lebel].join(' ')} > Time
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  casepagestyles.owner_profile_data].join(' ')} 
  >{casedata.Time}
</p>
</div>

<div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  casepagestyles.owner_profile_lebel].join(' ')} > Case Status
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  casepagestyles.owner_profile_data].join(' ')} 
  >{casedata.CaseStatus}
</p>
</div>

<div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  casepagestyles.owner_profile_lebel].join(' ')} > Penalty Details
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  casepagestyles.owner_profile_data].join(' ')} 
  >{casedata.PenaltyDetails}
</p>
</div>


    </div>

</div>


</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OfficerDashboardLayoutMenu  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}






    </>
  )
}

export async function getServerSideProps(context) {
   
  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_officer = await api.get('/officer/viewprofile/'+tossSession.Uname)
.then(response_officer => {
  // handle the response
  data =  response_officer.data;

}).catch(error => {
  // handle the error
});


  var casedata="";
  const CaseId=context.query.CaseId;
  const response = await api.get('/officer/viewcasebyid/'+CaseId);
  casedata = await response.data;

return { props: { data,casedata } }
  
}
