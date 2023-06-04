import { useRouter } from 'next/router'
import OwnerDashboardLayoutHeader from "../../../../component/owner_component/owner_dashboard_layout_header";
import OwnerDashboardLayoutMenu from "../../../../component/owner_component/owner_dashboard_layout_menu";
import api from "@/pages/api";
import Image from 'next/image'
import { useState } from 'react'
import successstyle from '../../../../../styles/shared_style/form_style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import casepagestyles from '../../../../../styles/owner_style/owner_viewprofile_style.module.css'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


export default function ViewAllCasesByOfficer({data, casedata}) {
    const router = useRouter();
    const [success, setSuccess] = useState('')


    const payPenalty = async (e)=>{
      e.preventDefault();
      try {
        const response = await api.put("/owner/paymentpenalty/"+data.Uname,
        { 
          CaseId:casedata.CaseId
        }).then(function (response) {
          console.log(response);
          if(typeof response.data === "string")
          {
            setSuccess( response.data);
          }
          else{
            setSuccess('Payment is successful');
            
            router.reload();
          }
          
        })
        .catch (function (err) {
          console.log(err);
        })
      

        
        

    }

    catch (error) {
        console.log(error);
        
        setSuccess(error);
    }
    
    }


    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OwnerDashboardLayoutHeader Title="Owner" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OwnerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       casepagestyles.owner_profile_main].join(' ')}>

<div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       casepagestyles.owner_heading_label].join(' ')}>{casedata.AccusedUname}'s Information</label>
<div></div>
</div>


<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-2">

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


<p id="filled_success_help" 
  className={[`ml-10 pl-3 mt-2 text-xs text-green-600 dark:text-green-400`, 
  successstyle.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>

{/* ------------------   Bottom buttons   --------------- */}

<div className="grid mt-0 gap-3 pb-10 pl-4 sm:grid-cols-1">

{
casedata.CaseStatus === "PENDING" &&  

  <div className="pt-0 ml-2">
  <button onClick={payPenalty}  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-1  w-full max-w-xs font-medium`, 
       casepagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Pay Penalty<FontAwesomeIcon icon={faThumbsUp} className={casepagestyles.profile_icon}/> </button>
  </div>

}

</div>

{/* ------------------   Bottom buttons   --------------- */}

</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OwnerDashboardLayoutMenu  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OwnerDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}






    </>
  )
}

export async function getServerSideProps(context) {
   
  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_owner = await api.get('/owner/viewprofile/'+tossSession.Uname)
.then(response_owner => {
  // handle the response
  data =  response_owner.data;

}).catch(error => {
  // handle the error
});


  var casedata="";
  const CaseId=context.query.CaseId;
  const response = await api.get('/owner/viewcasebyid/'+CaseId);
  casedata = await response.data;

return { props: { data,casedata } }
  
}
