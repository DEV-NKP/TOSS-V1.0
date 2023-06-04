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


export default function ViewAllBankByAdmin({data, bankdata}) {
    const router = useRouter();
    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <AdminDashboardLayoutHeader  Title="Bank Details" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       adminpagestyles.owner_profile_main].join(' ')}>

<div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-1">
<label className={[` relative z-0 w-full text-sm  `, 
       adminpagestyles.owner_heading_label].join(' ')}>{bankdata.AccountNo}'s Information</label>
</div>

<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       adminpagestyles.owner_profile_lebel].join(' ')} > AccountId
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
       >{bankdata.AccountId}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Account Number
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')} 
      >{bankdata.AccountNo}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       adminpagestyles.owner_profile_lebel].join(' ')} > Amount
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       adminpagestyles.owner_profile_data].join(' ')}
      >{bankdata.Amount}
    </p>
    </div>


      </div>

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


  var bankdata="";
  const AccountNo=context.query.AccountNo;
  const response = await api.get('/admin/viewbankbyaccno/'+AccountNo);
  bankdata = await response.data;

return { props: { data,bankdata } }
}
