import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import pagestyles from '../../../styles/shared_style/viewprofile_style.module.css'
import signupstyles from '../../../styles/shared_style/form_style1.module.css'
import buttonstyles from '../../../styles/shared_style/toss_button_style.module.css'


import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";


import { useState } from 'react'
import api from '../../api';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function CopsAddCase({data}) {
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
          const response = await api.post("/cops/createcase/"+data.Uname,
          { ViolationOf: submitdata.ViolationOf,
            SubSection:submitdata.SubSection,
            ViolationDetails:submitdata.ViolationDetails,
            Section:submitdata.Section,
            VLN: submitdata.VLN,
            PenaltyAmount: submitdata.PenaltyAmount,
            PenaltyDetails:submitdata.PenaltyDetails,
            City: submitdata.City,
            Street: submitdata.Street,
            ZIPCode: submitdata.ZIPCode


          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('Case assigned Successfully');
              router.back();
             /* router.push('/Cops/manageCase/cops_viewcase?Uname='+data.Uname);*/
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

<DashboardLayoutHeader Title="Create Case" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}



<div  className={[`relative z-0 p-10 m-10 group`, 
    signupstyles.toss_form_div1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)} >
  <div 
    className={[` z-0 pt-8 mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Assign Case
  </div> 


  <div className="grid md:grid-cols-2 md:gap-10">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Section" id="Section" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Section', { required: true})} />
          {errors.Section && errors.Section.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Section</span>
          </p>}
        <label htmlFor="Section" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Section</label>
    </div>
    
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="SubSection" id="SubSection" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('SubSection')} />
     

        <label htmlFor="SubSection" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Sub Section</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-10">
 
     <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="ViolationOf" id="ViolationOf" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('ViolationOf', { required: true, minLength:3, maxLength:200})} />
        {errors.ViolationOf && errors.ViolationOf.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Case Category</span>
          </p>}
          {errors.ViolationOf && errors.ViolationOf.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}
      {errors.ViolationOf && errors.ViolationOf.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}

        <label htmlFor="ViolationOf" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Case Catagory</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="PenaltyAmount" id="PenaltyAmount" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        {...register('PenaltyAmount', { required: true})} />
        {errors.PenaltyAmount && errors.PenaltyAmount.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Penalty Amount</span>
          </p>}
        <label htmlFor="PenaltyAmount" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
           peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Penalty Amount</label>
    </div>
    </div>
    
  <div className="grid md:grid-cols-2 md:gap-10">
 
 <div className="relative z-0 w-full mb-6 group">
    <textarea name="ViolationDetails" id="ViolationDetails" cols="50" rows="4"
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
    placeholder=" " 
    {...register('ViolationDetails')} />
  

    <label htmlFor="ViolationDetails" 
    className={[`peer-focus:font-medium absolute text-sm text-gray-500
     dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-6`, 
    signupstyles.toss_text_box_label_design1].join(' ')}
    >Violation Details</label>
</div>
<div className="relative z-0 w-full mb-6 group">
    <textarea name="PenaltyDetails" id="PenaltyDetails" cols="50" rows="4"
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
    placeholder=" " 
    {...register('PenaltyDetails')} />
   

    <label htmlFor="PenaltyDetails" 
    className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
      peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
       peer-focus:scale-75 peer-focus:-translate-y-6`, 
    signupstyles.toss_text_box_label_design1].join(' ')}
    >Penalty Details</label>
</div>
</div>

  
  <div className="grid md:grid-cols-2 md:gap-10">
  <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="VLN" id="VLN" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('VLN', { required: true, pattern: /^[A-Z]{2}-\d{4}-[A-Z]{1,2}$/})} />
      {errors.VLN && errors.VLN.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Vehicle License Number</span>
        </p>
      }
      {errors.VLN && errors.VLN.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please provide a valid license plate number in the format XX-0000-X or XX-0000-XX</span>
        </p>}
      <label htmlFor="VLN" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Vehicle License No.</label>
    </div>

  <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="City" id="City" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('City', { required: true, maxLength:200, minLength:3})} />
      {errors.City && errors.City.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter City Name</span>
        </p>
      }
      {errors.City && errors.City.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}
      {errors.City && errors.City.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}
      <label htmlFor="City" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >City</label>
    </div>
    </div>

    <div className="grid md:grid-cols-2 md:gap-10">
    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="Street" id="Street" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('Street')} />
     
      <label htmlFor="Street" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Street</label>
    </div>


    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="ZIPCode" id="ZIPCode" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('ZIPCode', { required: true, minLength:4, maxLength:10})} />
      {errors.ZIPCode && errors.ZIPCode.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Zip Code</span>
        </p>
      }
     {errors.ZIPCode && errors.ZIPCode.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 4 characters and less than 10</span>
        </p>}
      {errors.ZIPCode && errors.ZIPCode.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 4 characters and less than 10</span>
        </p>}
      <label htmlFor="ZIPCode" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >ZIP Code</label>
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
const response = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

return { props: { data } };


 }
