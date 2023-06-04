import { useRouter } from 'next/router'
import OfficerDashboardLayoutHeader from "@/pages/component/officer_component/officer_dashboard_layout_header";
import OfficerDashboardLayoutMenu from "@/pages/component/officer_component/officer_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import copspagestyles from '../../../../../styles/officer_style/officer_viewprofile_style.module.css'
import api from "@/pages/api";
import { faEraser, faUnlockKeyhole, faUserPen } from "@fortawesome/free-solid-svg-icons";

export default function ViewAllCopsByOfficer({data, copsdata}) {
    const router = useRouter();
    const editCops = async (e)=>{
      e.preventDefault();
      router.push(
      
        '/officer/all/manage_cops/modify/'+copsdata.Uname+'?Uname='+data.Uname
    );
    }

    
    const deleteCops = async (e)=>{
      e.preventDefault();
      const response = await api.delete('/officer/deletecopsbyuname/'+copsdata.Uname);
  
        router.back();
    
    }


    return (

    <>

<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OfficerDashboardLayoutHeader Title="Cops Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       copspagestyles.owner_profile_main].join(' ')}>

<label className={[` pb-5 pt-5 pl-5 pr-5 `, 
       copspagestyles.owner_heading_label].join(' ')}>{copsdata.Uname}'s Information</label>



<div className="grid grid-cols-1 gap-3 pl-10 pr-10 pb-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       copspagestyles.owner_profile_lebel].join(' ')} > First Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       copspagestyles.owner_profile_data].join(' ')} 
       >{copsdata.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       copspagestyles.owner_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       copspagestyles.owner_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       copspagestyles.owner_profile_data].join(' ')}
      >{copsdata.Gender}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       copspagestyles.owner_profile_lebel].join(' ')} > Rank Category
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.RankCategory}
    </p>
    </div>
    
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       copspagestyles.owner_profile_lebel].join(' ')} > Rank Group
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.RankGroup}
    </p>
    </div>

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      copspagestyles.owner_profile_lebel].join(' ')} > Last Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      copspagestyles.owner_profile_lebel].join(' ')} > Phone No
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      copspagestyles.owner_profile_lebel].join(' ')} > Station
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Station}
    </p>
    </div>

    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      copspagestyles.owner_profile_lebel].join(' ')} > Police ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.PoliceId}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      copspagestyles.owner_profile_lebel].join(' ')} > Country
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      copspagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Country}
    </p>
    </div>

    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       copspagestyles.owner_profile_section].join(' ')} >
    
      <Image height="100" width="100" className={[`m-4  max-w-xs h-auto max-h-xs `, 
       copspagestyles.owner_profile_img].join(' ')} src={"http:/localhost:3000/cops/getimage/"+copsdata.ProfilePicture} alt={copsdata.ProfilePicture} />    
      
    </div>

</div>


{/* ------------------   Bottom buttons   --------------- */}

<div className="grid grid-cols-1 gap-3 pb-10 pl-4 sm:grid-cols-4">
    
  <div></div>

  <div onClick={editCops} className="m-3 pt-0 ml-2">
  <button className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       copspagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Update COPS Info<FontAwesomeIcon icon={faUserPen} className={copspagestyles.profile_icon}/> </button>
  </div>

   <div onClick={deleteCops} className="m-3 pt-0 ml-2">
  <button className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       copspagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Delete COPS Info <FontAwesomeIcon icon={faEraser} className={copspagestyles.profile_icon}/> </button>
  </div>
  <div></div>
</div>

{/* ------------------   Bottom buttons   --------------- */}



</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OfficerDashboardLayoutMenu Uname={data.Uname}  userdata={data} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutMenu>

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


  var copsdata="";
  const copsUname=context.query.copsUname;
  const response = await api.get('/officer/viewcopsbyuname/'+copsUname);
  copsdata = await response.data;

return { props: { data,copsdata } }
  
}
