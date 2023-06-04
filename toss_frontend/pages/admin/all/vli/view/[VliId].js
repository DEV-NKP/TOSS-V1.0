import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'
import AdminDashboardLayoutHeader from "@/pages/component/admin_component/admin_dashboard_layout_header";
import AdminDashboardLayoutMenu from "@/pages/component/admin_component/admin_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import adminpagestyles from '../../../../../styles/admin_style/admin_viewprofile_style.module.css'


import api from "@/pages/api";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

export default function ViewAllVliByAdmin({data, vlidata}) {
  const router = useRouter();

  const deleteVli = async (e)=>{
    e.preventDefault();
    const response = await api.delete('/admin/deletevlibyid/'+vlidata.VliId);

      router.back();
  
  }
  
  return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <AdminDashboardLayoutHeader  Title="Vli Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       adminpagestyles.owner_profile_main].join(' ')}>
 <div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[` pb-5 pt-5 pl-5 pr-5 `, 
       adminpagestyles.owner_heading_label].join(' ')}>{vlidata.OwnerName}'s Car Information</label>
<div></div>
</div>


<div className="grid grid-cols-1 gap-3 pt-2 pl-10 pr-14 sm:grid-cols-2">

    <div className="ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       adminpagestyles.owner_profile_lebel].join(' ')} > VLI ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
       >{vlidata.VliId}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > License Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{vlidata.LicenseNo}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Chesis Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')}
      >{vlidata.ChesisNo}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Owner NID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')}
      >{vlidata.OwnerNid}
    </p>
    </div>
      </div>

      <div className="ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Engine Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{vlidata.EngineNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Details
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{vlidata.Details}
    </p>
    </div>

    <div className="pt-3">

<p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
  adminpagestyles.owner_profile_lebel].join(' ')} > Owner Name
</p>
<p className={[` pb-1.5 pt-1.5 w-full`, 
  adminpagestyles.owner_profile_data].join(' ')} 
  >{vlidata.OwnerName}
</p>
</div>

    </div>

</div>

<div className="grid grid-cols-3 justify-center gap-3 pb-10 pl-4">
  
  <div></div>
  <div className="m-3 pt-0 ml-2">

  <div className="m-3 pt-0 ml-2">
  <button onClick={deleteVli} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Delete LogIn Info <FontAwesomeIcon icon={faEraser} className={adminpagestyles.profile_icon}/> </button>
  </div>  
  </div>
  <div></div>
  

</div>
</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <AdminDashboardLayoutMenu  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}
    </>
  )
}

export async function getServerSideProps(context) {

  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_admin = await api.get('/admin/viewprofile/'+tossSession.Uname)
.then(response_admin => {
  // handle the response
  data =  response_admin.data;

}).catch(error => {
  // handle the error
});


  var vlidata="";
  const VliId=context.query.VliId;
  const response = await api.get('/admin/viewvlibyvliid/'+VliId);
  vlidata = await response.data;

return { props: { data,vlidata } }
}
