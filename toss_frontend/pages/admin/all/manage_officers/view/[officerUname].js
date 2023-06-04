import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'
import AdminDashboardLayoutHeader from "@/pages/component/admin_component/admin_dashboard_layout_header";
import AdminDashboardLayoutMenu from "@/pages/component/admin_component/admin_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import adminpagestyles from '../../../../../styles/admin_style/admin_viewprofile_style.module.css'


import api from "@/pages/api";
import { faArrowUp, faCross, faEraser, faUnlockKeyhole, faUserPen, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function ViewAllOfficerByAdmin({data, officerdata}) {
    const router = useRouter();
   
    const editOfficer = (e)=>{
      e.preventDefault();
    router.push(
      
        '/admin/all/manage_officers/modify/'+officerdata.Uname+'?Uname='+data.Uname
    );
    }
    const deleteOfficer = async (e)=>{
      e.preventDefault();
      const response = await api.delete('/admin/deleteofficerbyuname/'+officerdata.Uname);
  
        router.back();
    
    }

    const banUser = async (e)=>{
      e.preventDefault();
      const response = await api.get('/admin/banofficer/'+officerdata.Uname);
  
        router.reload();
    
    }


const revokeBan = async (e)=>{
      e.preventDefault();
      const response = await api.get('/admin/revokebanofficer/'+officerdata.Uname);
  
        router.reload();
    
    }


    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <AdminDashboardLayoutHeader Title="Officer Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       adminpagestyles.owner_profile_main].join(' ')}>

<div className="grid grid-cols-1 pt-10 pr-4 pl-10 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       adminpagestyles.owner_heading_label].join(' ')}>{officerdata.Uname}'s Information</label>
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
       >{officerdata.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.Gender}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Designation
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.Designation}
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
      >{officerdata.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Phone No.
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Account Number.
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{officerdata.AccountNo}
    </p>
    </div>




    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       adminpagestyles.owner_profile_section].join(' ')} >
    
      <Image height="100" width="100" className={[`m-4  max-w-xs h-auto max-h-xs `, 
       adminpagestyles.owner_profile_img].join(' ')} src={"http:/localhost:3000/officer/getimage/"+officerdata.ProfilePicture} alt={officerdata.ProfilePicture} />    
      
    </div>

</div>



<div className="grid grid-cols-1 gap-3 pb-10 sm:grid-cols-3">
    
<div className="w-full m-2 ml-12 p-items-center relative">
  <button onClick={editOfficer} className={[` items-center justify-center pt-2.5 pb-2.5 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Update Officer<FontAwesomeIcon icon={faArrowUp} className={adminpagestyles.profile_icon}/> </button>
  </div>

  {
officerdata.Status === "ACTIVE" &&  

  <div className="w-full m-2 ml-12 p-items-center relative">
  <button onClick={banUser}  className={[` items-center justify-center pt-2.5 pb-2.5 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Ban Officer<FontAwesomeIcon icon={faXmark} className={adminpagestyles.profile_icon}/> </button>
  </div>

}
{
officerdata.Status === "BANNED" &&  

  <div className="w-full m-2 ml-12 p-items-center relative">
  <button  onClick={revokeBan} className={[`items-center justify-center pt-2.5 pb-2.5 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Revoke Ban Officer<FontAwesomeIcon icon={faXmark} className={adminpagestyles.profile_icon}/> </button>
  </div>

}

   <div className="w-full m-2 p-items-center relative">
  <button onClick={deleteOfficer} className={[` items-center justify-center pt-2.5 pb-2.5 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Delete Officer<FontAwesomeIcon icon={faEraser} className={adminpagestyles.profile_icon}/> </button>
  </div>
  
</div>







</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <AdminDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutMenu>

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


  var officerdata="";
  const officerUname=context.query.officerUname;
  const response = await api.get('/admin/viewofficerbyuname/'+officerUname);
  officerdata = await response.data;

return { props: { data,officerdata } }
}
