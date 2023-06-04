import signupstyles from '../../../../../styles/shared_style/form_style1.module.css'
import buttonstyles from '../../../../../styles/shared_style/toss_button_style.module.css'
import OfficerDashboardLayoutHeader from "@/pages/component/officer_component/officer_dashboard_layout_header";
import OfficerDashboardLayoutMenu from "@/pages/component/officer_component/officer_dashboard_layout_menu";


import { useState } from 'react'
import api from '../../../../api';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function OfficerEditVli({data, vlidata}) {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  console.log(vlidata.VliId);

  const check = async (e)=>{
    e.preventDefault();
    console.log(vlidata.VliId);

  
  }
  const onSubmit = async (editdata) => {

      
      try {
          const response = await api.put("/officer/editvli/"+vlidata.VliId,
          { 

            Details:editdata.Details,
            OwnerNid:editdata.OwnerNid

          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('Vli Modified Successfully');
              reset();
              router.back();
            }
            
          })
          .catch (function (err) {
            console.log(err);
          })
        

      }

      catch (error) {
          console.log(error);
          
          setSuccess(error);
      }

  
 
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <>



<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

  <OfficerDashboardLayoutHeader Title="Modify Vli" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}




{/* ------------------   Content   --------------- */}


<div  className={[`relative z-0 w-full  group`, 
    signupstyles.toss_form_div1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)} >
  <div 
    className={[` z-0 pt-8 mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Modify Vli
  </div> 


  <div className="grid md:grid-cols-2 md:gap-10">
    <div className="relative z-0 w-full mb-6 group">
        <input disabled type="text" name="LicenseNo" id="LicenseNo" defaultValue={vlidata.LicenseNo}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('LicenseNo')} />
        

        <label for="LicenseNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >License No. (Not Changable)</label>
    </div>
    
    <div className="relative z-0 w-full mb-6 group">
        <input disabled type="text" name="ChesisNo" id="ChesisNo" defaultValue={vlidata.ChesisNo}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('ChesisNo')} />
      

        <label for="ChesisNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Chesis No. (Not Changable)</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-10">
     <div className="relative z-0 w-full mb-6 group">
        <input disabled type="text" name="EngineNo" id="EngineNo" defaultValue={vlidata.EngineNo}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('EngineNo')} />
       

        <label for="EngineNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Engine No.  (Not Changable)</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Details" id="Details" defaultValue={vlidata.Details}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Details', { required: true })} />
        {errors.Details && errors.Details.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Details of the Vehicle</span>
          </p>}

        <label for="Details" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
           peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Details</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-10">
  <div className="relative z-0 w-full mb-6 group">
    <input disabled type="text" name="OwnerName" id="OwnerName" defaultValue={vlidata.OwnerName}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('OwnerName')} />
     
      <label for="OwnerName" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Owner Name  (Not Changable)</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="OwnerNid" id="OwnerNid" defaultValue={vlidata.OwnerNid}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('OwnerNid', { required: true, pattern: /^[0-9]{13}$/})} />
      {errors.OwnerNid && errors.OwnerNid.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Owner NID</span>
        </p>
      }
      {errors.OwnerNid && errors.OwnerNid.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please provide a valid NID of 13 integers</span>
        </p>}
      <label for="OwnerNid" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Owner Nid</label>
    </div>
  </div>



  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  signupstyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>
    <br>
    </br>

 <div className={buttonstyles.form_button_div_design1}>
 
 <button onClick={onSubmit} type="submit" 
  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
  signupstyles.button_area].join(' ')} >Submit</button>





</div>






</form>
</div>



{/* ------------------   Content   --------------- */}

</div>


{/* -----------------   MainMenu  -------------- */}
  <OfficerDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></OfficerDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}



    {/* <OfficerDashboardHeader></OfficerDashboardHeader>

<div style={{  paddingTop: "20px", left:"20px"}}>

<h1>Vli Id: {data.VliId}</h1>
      <h1>License No: {data.LicenseNo}</h1>
      <h1>Chesis No: {data.ChesisNo}</h1>
      <h1>Engine No: {data.EngineNo}</h1>
      <h1>Details: {data.Details}</h1>
      <h1>Owner Name: {data.OwnerName}</h1>
      <h1>Owner Nid: {data.OwnerNid}</h1>
     
  
    </div>
<br/><br/>
<Link href={"/officer/all/vli/modify/"+data.VliId}>Modify Vli</Link>
<br/><br/>

    <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
    <HomeLayoutTailer></HomeLayoutTailer> */}
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


  var vlidata="";
  const VliId=context.query.VliId;
  const response = await api.get('/officer/searchvlibyid/'+VliId);
  vlidata = await response.data;

return { props: { data,vlidata } }
  
}
