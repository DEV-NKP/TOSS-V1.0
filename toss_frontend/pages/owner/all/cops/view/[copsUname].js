import { useRouter } from 'next/router'
import api from "@/pages/api";
import OwnerDashboardLayoutHeader from "../../../../component/owner_component/owner_dashboard_layout_header";
import OwnerDashboardLayoutMenu from "../../../../component/owner_component/owner_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ownerpagestyles from '../../../../../styles/owner_style/owner_viewprofile_style.module.css'

export default function ViewAllCopsByOwner({data, copsdata}) {

    return (

    <>

<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OwnerDashboardLayoutHeader Title="Cops Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OwnerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       ownerpagestyles.owner_profile_main].join(' ')}>

<label className={[` pb-5 pt-5 pl-5 pr-5 `, 
       ownerpagestyles.owner_heading_label].join(' ')}>{copsdata.Uname}'s Information</label>



<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > First Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')} 
       >{copsdata.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')}
      >{copsdata.Gender}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > Rank Category
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.RankCategory}
    </p>
    </div>
    
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       ownerpagestyles.owner_profile_lebel].join(' ')} > Rank Group
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.RankGroup}
    </p>
    </div>

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Last Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Phone No
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Station
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Station}
    </p>
    </div>

    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Police ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.PoliceId}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      ownerpagestyles.owner_profile_lebel].join(' ')} > Country
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      ownerpagestyles.owner_profile_data].join(' ')} 
      >{copsdata.Country}
    </p>
    </div>

    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       ownerpagestyles.owner_profile_section].join(' ')} >
    
      <Image height="100" width="100" className={[`m-4  max-w-xs h-auto max-h-xs `, 
       ownerpagestyles.owner_profile_img].join(' ')} src={"http:/localhost:3000/cops/getimage/"+copsdata.ProfilePicture} alt={copsdata.ProfilePicture} />    
      
    </div>

</div>



</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OwnerDashboardLayoutMenu Uname={data.Uname}  userdata={data} ProfilePicture={data.ProfilePicture}></OwnerDashboardLayoutMenu>

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


  var copsdata="";
  const copsUname=context.query.copsUname;
  const response = await api.get('/owner/viewcopsbyuname/'+copsUname);
  copsdata = await response.data;

return { props: { data,copsdata } }
  
}
