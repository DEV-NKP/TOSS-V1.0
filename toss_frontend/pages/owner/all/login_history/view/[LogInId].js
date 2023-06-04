import { useRouter } from 'next/router'
import api from "@/pages/api";
import OwnerDashboardLayoutHeader from "../../../../component/owner_component/owner_dashboard_layout_header";
import OwnerDashboardLayoutMenu from "../../../../component/owner_component/owner_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ownerpagestyles from '../../../../../styles/owner_style/owner_viewprofile_style.module.css'





export default function ViewLogIn({data, logindata}) {
    const router = useRouter();


    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OwnerDashboardLayoutHeader  Title="Owner" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OwnerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       ownerpagestyles.owner_profile_main].join(' ')}>
 <div className="grid grid-cols-1 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       ownerpagestyles.owner_heading_label].join(' ')}>{logindata.Uname}'s LogIn History</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-2">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > LogIn ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')} 
       >{logindata.LogInId}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > User Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')} 
      >{logindata.Uname}
    </p>
    </div>


      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Time of LogIn
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{logindata.Time}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Device IP
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{logindata.IP}
    </p>
    </div>

    </div>



</div>

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
const response_officer = await api.get('/owner/viewprofile/'+tossSession.Uname)
.then(response_officer => {
  // handle the response
  data =  response_officer.data;

}).catch(error => {
  // handle the error
});


var logindata="";
const LogInId=context.query.LogInId;
const response = await api.get('/owner/viewloginbyloginid/'+LogInId);
logindata = await response.data;


return { props: { data,logindata } }
}
