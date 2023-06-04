import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'
import AdminDashboardLayoutHeader from "@/pages/component/admin_component/admin_dashboard_layout_header";
import AdminDashboardLayoutMenu from "@/pages/component/admin_component/admin_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import adminpagestyles from '../../../../../styles/admin_style/admin_viewprofile_style.module.css'


import api from "@/pages/api";
import { faCross, faEraser, faUnlockKeyhole, faUserPen, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ViewAllOwnerByAdmin({data, ownerdata}) {
    const router = useRouter();
    
    const deleteOwner = async (e)=>{
      e.preventDefault();
      const response = await api.delete('/admin/deleteownerbyuname/'+ownerdata.Uname);
  
        router.back();
    
    }

const banUser = async (e)=>{
      e.preventDefault();
      const response = await api.get('/admin/banowner/'+ownerdata.Uname);
  
        router.reload();
    
    }


const revokeBan = async (e)=>{
      e.preventDefault();
      const response = await api.get('/admin/revokebanowner/'+ownerdata.Uname);
  
        router.reload();
    
    }
    


    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<AdminDashboardLayoutHeader  Title="Owner Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       adminpagestyles.owner_profile_main].join(' ')}>
 <div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       adminpagestyles.owner_heading_label].join(' ')}>{ownerdata.Uname}'s Information</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       adminpagestyles.owner_profile_lebel].join(' ')} > First Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
       >{ownerdata.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{ownerdata.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')}
      >{ownerdata.Gender}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Driving License Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{ownerdata.DLN}
    </p>
    </div>

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Last Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{ownerdata.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Phone No
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{ownerdata.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Account Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{ownerdata.AccountNo}
    </p>
    </div>

       <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Vehicle Lecense Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{ownerdata.VLN}
    </p>
    </div>


    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       adminpagestyles.owner_profile_section].join(' ')} >
    
    <Image height="200" width="200" className={[`min-w-250 min-h-250 `, 
       adminpagestyles.owner_profile_img].join(' ')} src={"http:/localhost:3000/owner/getimage/"+ownerdata.ProfilePicture} alt={data.ProfilePicture} />    
      
    </div>

</div>


{/* ------------------   Bottom buttons   --------------- */}

<div className="grid grid-cols-1 gap-3 pb-10 pl-4 sm:grid-cols-4">
    
  <div></div>

{
ownerdata.Status === "ACTIVE" &&  

  <div className="m-3 pt-0 ml-2">
  <button onClick={banUser}  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Ban Owner<FontAwesomeIcon icon={faXmark} className={adminpagestyles.profile_icon}/> </button>
  </div>

}
{
ownerdata.Status === "BANNED" &&  

  <div className="m-3 pt-0 ml-2">
  <button  onClick={revokeBan} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Revoke Ban Owner<FontAwesomeIcon icon={faXmark} className={adminpagestyles.profile_icon}/> </button>
  </div>

}




  

   <div className="m-3 pt-0 ml-2">
  <button onClick={deleteOwner} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Delete Owner <FontAwesomeIcon icon={faEraser} className={adminpagestyles.profile_icon}/> </button>
  </div>
  <div></div>
</div>

{/* ------------------   Bottom buttons   --------------- */}



</div>




{/* ------------------   Content   --------------- */}

</div>
<AdminDashboardLayoutMenu  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutMenu>

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

  var ownerdata="";
  const ownerUname=context.query.ownerUname;
  const response = await api.get('/admin/viewownerbyuname/'+ownerUname);
  ownerdata = await response.data;
  return { props: { data,ownerdata } }

}
