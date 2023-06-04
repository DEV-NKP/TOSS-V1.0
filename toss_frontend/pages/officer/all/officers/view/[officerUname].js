import { useRouter } from 'next/router'
import api from "@/pages/api";
import OfficerDashboardLayoutHeader from "../../../../component/officer_component/officer_dashboard_layout_header";
import OfficerDashboardLayoutMenu from "../../../../component/officer_component/officer_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import officerpagestyles from '../../../../../styles/officer_style/officer_viewprofile_style.module.css'


export default function ViewAllOfficerByOfficer({data, officerdata}) {
    const router = useRouter();
    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OfficerDashboardLayoutHeader Title="Officer Details" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       officerpagestyles.owner_profile_main].join(' ')}>

<div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       officerpagestyles.owner_heading_label].join(' ')}>{officerdata.Uname}'s Information</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       officerpagestyles.owner_profile_lebel].join(' ')} > First Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       officerpagestyles.owner_profile_data].join(' ')} 
       >{officerdata.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       officerpagestyles.owner_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       officerpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       officerpagestyles.owner_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       officerpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.Gender}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       officerpagestyles.owner_profile_lebel].join(' ')} > Designation
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       officerpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.Designation}
    </p>
    </div>

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      officerpagestyles.owner_profile_lebel].join(' ')} > Last Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      officerpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      officerpagestyles.owner_profile_lebel].join(' ')} > Phone No.
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      officerpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      officerpagestyles.owner_profile_lebel].join(' ')} > Account Number.
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      officerpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.AccountNo}
    </p>
    </div>




    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       officerpagestyles.owner_profile_section].join(' ')} >
    
      <Image height="100" width="100" className={[`m-4  max-w-xs h-auto max-h-xs `, 
       officerpagestyles.owner_profile_img].join(' ')} src={"http:/localhost:3000/officer/getimage/"+officerdata.ProfilePicture} alt={officerdata.ProfilePicture} />    
      
    </div>

</div>





</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OfficerDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutMenu>

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


  var officerdata="";
  const officerUname=context.query.officerUname;
  const response = await api.get('/officer/viewofficerbyuname/'+officerUname);
  officerdata = await response.data;

return { props: { data,officerdata } }
}
