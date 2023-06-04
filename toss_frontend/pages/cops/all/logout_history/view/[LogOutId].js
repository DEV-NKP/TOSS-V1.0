import { useRouter } from 'next/router'
import CopsDashboardLayoutHeader from "../../../../component/cops_component/cops_dashboard_layout_header";
import CopsDashboardLayoutMenu from "../../../../component/cops_component/cops_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoutpagestyles from '../../../../../styles/cops_style/cops_viewprofile_style.module.css'
import api from "@/pages/api";
import { faEraser, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";


export default function ViewLogOut({data, logoutdata}) {
    const router = useRouter();


    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <CopsDashboardLayoutHeader  Title="LogOut History"  userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       logoutpagestyles.owner_profile_main].join(' ')}>
 <div className="grid grid-cols-1 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       logoutpagestyles.owner_heading_label].join(' ')}>{logoutdata.Uname}'s Log Out History</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-2">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       logoutpagestyles.owner_profile_lebel].join(' ')} > Log Out ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       logoutpagestyles.owner_profile_data].join(' ')} 
       >{logoutdata.LogOutId}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       logoutpagestyles.owner_profile_lebel].join(' ')} > User Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       logoutpagestyles.owner_profile_data].join(' ')} 
      >{logoutdata.Uname}
    </p>
    </div>


      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      logoutpagestyles.owner_profile_lebel].join(' ')} > Time of LogOut
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      logoutpagestyles.owner_profile_data].join(' ')} 
      >{logoutdata.Time}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      logoutpagestyles.owner_profile_lebel].join(' ')} > Device IP
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      logoutpagestyles.owner_profile_data].join(' ')} 
      >{logoutdata.IP}
    </p>
    </div>

    </div>



</div>

</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <CopsDashboardLayoutMenu  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}
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


var logoutdata="";
const LogOutId=context.query.LogOutId;
const response = await api.get('/cops/viewlogoutbylogoutid/'+LogOutId);
logoutdata = await response.data;


return { props: { data,logoutdata } }
}
