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
export default function ViewAllCopsByAdmin({data, copsdata}) {
    const router = useRouter();
    
    const deleteCops = async (e)=>{
      e.preventDefault();
      const response = await api.delete('/admin/deletecopsbyuname/'+copsdata.Uname);
  
        router.back();
    
    }
    
    const banUser = async (e)=>{
      e.preventDefault();
      const response = await api.get('/admin/bancops/'+copsdata.Uname);
  
        router.reload();
    
    }


const revokeBan = async (e)=>{
      e.preventDefault();
      const response = await api.get('/admin/revokebancops/'+copsdata.Uname);
  
        router.reload();
    
    }
    
    
    
    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<AdminDashboardLayoutHeader  Title="Cops Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       adminpagestyles.owner_profile_main].join(' ')}>
 <div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       adminpagestyles.owner_heading_label].join(' ')}>{copsdata.Uname}'s Information</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 pr-14 pl-10 pt-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       adminpagestyles.owner_profile_lebel].join(' ')} > First Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
       >{copsdata.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')}
      >{copsdata.Gender}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Rank Category
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.RankCategory}
    </p>
    </div>
    
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Rank Group
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.RankGroup}
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
      >{copsdata.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Phone No
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Station
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Station}
    </p>
    </div>

    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Police ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.PoliceId}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      adminpagestyles.owner_profile_lebel].join(' ')} > Country
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      adminpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Country}
    </p>
    </div>

    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       adminpagestyles.owner_profile_section].join(' ')} >
    
    <Image height="100" width="100" className={[`m-4  max-w-xs h-auto max-h-xs `, 
       adminpagestyles.owner_profile_img].join(' ')} src={"http:/localhost:3000/cops/getimage/"+copsdata.ProfilePicture} alt={data.ProfilePicture} />    
      
    </div>

</div>


{/* ------------------   Bottom buttons   --------------- */}

<div className="grid gap-3 pb-10 pl-4 sm:grid-cols-4">
    <div></div>

  {
copsdata.Status === "ACTIVE" &&  

  <div className="m-3 pt-0 ml-0">
  <button onClick={banUser}  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Ban Cops<FontAwesomeIcon icon={faXmark} className={adminpagestyles.profile_icon}/> </button>
  </div>

}
{
copsdata.Status === "BANNED" &&  

  <div className="m-3 pt-0 ml-0">
  <button  onClick={revokeBan} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Revoke Ban Cops<FontAwesomeIcon icon={faXmark} className={adminpagestyles.profile_icon}/> </button>
  </div>

}

   <div className="m-3 pt-0 ml-0">
  <button onClick={deleteCops} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       adminpagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Delete COPS Info <FontAwesomeIcon icon={faEraser} className={adminpagestyles.profile_icon}/> </button>
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

  var copsdata="";
  const copsUname=context.query.copsUname;
  const response = await api.get('/admin/viewcopsbyuname/'+copsUname);
  copsdata = await response.data;

return { props: { data,copsdata } }


}
