import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import pagestyles from '../../../styles/shared_style/viewprofile_style.module.css'
import signupstyles from '../../../styles/shared_style/form_style1.module.css'
import buttonstyles from '../../../styles/shared_style/toss_button_style.module.css'


import DashboardLayoutHeader from "../../component/officer_component/officer_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/officer_component/officer_dashboard_layout_menu";


import { useState } from 'react'
import api from '../../api';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function OfficerAddVli({data}) {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (submitdata) => {
   
      
      try {
          const response = await api.post("/officer/insertvli/"+data.Uname,
          { LicenseNo: submitdata.LicenseNo,
            ChesisNo:submitdata.ChesisNo,
            EngineNo:submitdata.EngineNo,
            Details:submitdata.Details,
            OwnerName: submitdata.OwnerName,
            OwnerNid: submitdata.OwnerNid

          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('Vli added Successfully');
              router.push('/officer/manage_vli/officer_viewvli?Uname='+data.Uname);
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

  return (
    <>
     <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="Manage Vli" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}



<div  className={[`relative z-0 p-10 m-10 group`, 
    signupstyles.toss_form_div1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)} >
  <div 
    className={[` z-0 pt-8 mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Add Vli
  </div> 


  <div className="grid md:grid-cols-2 md:gap-10">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="LicenseNo" id="LicenseNo" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('LicenseNo', { required: true, pattern: /^[A-Z]{2}-\d{4}-[A-Z]{1,2}$/})} />
        {errors.LicenseNo && errors.LicenseNo.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter License No.</span>
          </p>}
        {errors.LicenseNo && errors.LicenseNo.type === "pattern" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please provide a valid license plate number in the format XX-0000-X or XX-0000-XX</span>
          </p>}

        <label htmlFor="LicenseNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >License No.</label>
    </div>
    
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="ChesisNo" id="ChesisNo" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('ChesisNo', { required: true, pattern: /^[A-HJ-NPR-Z0-9]{17}$/})} />
        {errors.ChesisNo && errors.ChesisNo.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter License No.</span>
          </p>}
        {errors.ChesisNo && errors.ChesisNo.type === "pattern" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please provide a valid vehicle chesis number of 17 uppercase char and without I, O, Q</span>
          </p>}

        <label htmlFor="ChesisNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Chesis No.</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-10">
     <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="EngineNo" id="EngineNo" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('EngineNo', { required: true, pattern: /^[A-Za-z0-9]+$/})} />
        {errors.EngineNo && errors.EngineNo.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Engine No.</span>
          </p>}
        {errors.EngineNo && errors.EngineNo.type === "pattern" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please provide a valid vehicle engine number with uppercase characters and integers</span>
          </p>}

        <label htmlFor="EngineNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Engine No.</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Details" id="Details" 
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

        <label htmlFor="Details" 
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
    <input type="text" name="OwnerName" id="OwnerName" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('OwnerName', { required: true, pattern: /^[A-Za-z]+$/})} />
      {errors.OwnerName && errors.OwnerName.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Owner Name</span>
        </p>
      }
      {errors.OwnerName && errors.OwnerName.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please provide a valid vehicle Owner Name</span>
        </p>}
      <label htmlFor="OwnerName" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Owner Name</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="OwnerNid" id="OwnerNid" 
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
      <label htmlFor="OwnerNid" 
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
    <br></br>

 <button type="submit" 
  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
  signupstyles.button_area].join(' ')} >Submit</button>








</form>
</div>

{/* ------------------   Content   --------------- */}

</div>

{/* -----------------   MainMenu  -------------- */}
<DashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}


    
    </>
  )
}

export async function getServerSideProps({query}) {
  const tossSession  = query;

  //console.log(Uname.data);
var data="";
const response = await api.get('/officer/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

return { props: { data } };


 }
