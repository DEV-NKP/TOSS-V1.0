import { useRouter } from 'next/router'
import OfficerDashboardLayoutHeader from "../../../../component/officer_component/officer_dashboard_layout_header";
import OfficerDashboardLayoutMenu from "../../../../component/officer_component/officer_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import loginpagestyles from '../../../../../styles/officer_style/officer_viewprofile_style.module.css'
import api from "@/pages/api";
import { faEraser, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";


export default function ViewMyTransaction({data, transactiondata}) {
  const router = useRouter();
    
    
    return (

    <>
<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OfficerDashboardLayoutHeader  Title="My Transaction Details"  userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
       loginpagestyles.owner_profile_main].join(' ')}>
 <div className="grid grid-cols-1 p-10 pr-4 sm:grid-cols-3">
  <div></div>
<label className={[`relative z-0 w-full text-sm `, 
       loginpagestyles.owner_heading_label].join(' ')}>Transaction ID: {transactiondata.TransactionId}</label>
<div></div>
</div>

<div className="grid grid-cols-1 gap-3 pr-10 pl-10 pb-6 pt-4 sm:grid-cols-2">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       loginpagestyles.owner_profile_lebel].join(' ')} > Transaction ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       loginpagestyles.owner_profile_data].join(' ')} 
       >{transactiondata.TransactionId}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       loginpagestyles.owner_profile_lebel].join(' ')} > Sender Account
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       loginpagestyles.owner_profile_data].join(' ')} 
      >{transactiondata.SenderAc}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       loginpagestyles.owner_profile_lebel].join(' ')} > Receiver Account
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       loginpagestyles.owner_profile_data].join(' ')} 
      >{transactiondata.ReceiverAc}
    </p>
    </div>

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      loginpagestyles.owner_profile_lebel].join(' ')} > Amount
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      loginpagestyles.owner_profile_data].join(' ')} 
      >{transactiondata.Amount}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      loginpagestyles.owner_profile_lebel].join(' ')} > Transaction Time
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      loginpagestyles.owner_profile_data].join(' ')} 
      >{transactiondata.Time}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      loginpagestyles.owner_profile_lebel].join(' ')} > Case ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      loginpagestyles.owner_profile_data].join(' ')} 
      >{transactiondata.CaseId}
    </p>
    </div>
    </div>



</div>

</div>




{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OfficerDashboardLayoutMenu  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutMenu>

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


  var transactiondata="";
  const TransactionId=context.query.TransactionId;
  const response = await api.get('/officer/viewtransactionbyid/'+TransactionId);
  transactiondata = await response.data;
  return { props: { data,transactiondata } }


}
