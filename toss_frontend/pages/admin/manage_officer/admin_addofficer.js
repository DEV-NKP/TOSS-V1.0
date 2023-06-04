import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import pagestyles from '../../../styles/admin_style/admin_viewprofile_style.module.css'
import signupstyles from '../../../styles/shared_style/form_style1.module.css'
import buttonstyles from '../../../styles/shared_style/toss_button_style.module.css'

import DashboardLayoutHeader from "../../component/admin_component/admin_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/admin_component/admin_dashboard_layout_menu";

import AdminSessionCheck from "../../component/session_check/admin_sessioncheck";


import { useState } from 'react'
import api from '../../api';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function AdminAddOfficer({data}) {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (submitdata) => {
    if(submitdata.Password===submitdata.CPassword)
     {
      
      try {
          const response = await api.post("/admin/insertofficer/"+data.Uname,
          { Uname: submitdata.Uname,
            FirstName:submitdata.FirstName,
            LastName:submitdata.LastName,
            Email:submitdata.Email,
            Password: submitdata.Password,
            MobileNo: submitdata.MobileNo,
            Gender:submitdata.Gender,
            Designation:submitdata.Designation,
            EmployeeId:submitdata.EmployeeId

          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('Officer added Successfully');
              reset();
              router.push('/admin/monitoring/admin_viewallofficer?Uname='+data.Uname);
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

  
    }
    else{
      setSuccess('Password & Confirm Password must be same');
    }

  };

  return (
    <>
     <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="Manage Officer" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}



<div  className={[`relative z-0 w-full p-10 m-10 group`, 
    signupstyles.toss_form_div1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)} >
  <div 
    className={[` z-0 pt-8 mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Add Officer
  </div> 


  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="FirstName" id="FirstName" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('FirstName', { required: true, maxLength: 50, minLength:2 })}  
         />
      {errors.FirstName && errors.FirstName.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter First Name</span>
        </p>}
      {errors.FirstName && errors.FirstName.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 50</span>
        </p>}
      {errors.FirstName && errors.FirstName.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 50</span>
        </p>}

        <label htmlFor="FirstName" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >First name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="LastName" id="LastName" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('LastName', { required: true, maxLength: 50, minLength:2  })} />
      {errors.LastName && errors.LastName.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Last Name</span>
        </p>}
      {errors.LastName && errors.LastName.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 50</span>
        </p>}
      {errors.LastName && errors.LastName.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 50</span>
        </p>}

        <label htmlFor="LastName" 
          className={[`peer-focus:font-medium absolute text-sm text-gray-500 
        dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
         top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
          peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
          peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
          >Last name</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Uname" id="Uname" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
        border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
        dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
        focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
         placeholder=" " 
         {...register('Uname', { required: true,  pattern: /^[0-9a-zA-Z_-]+$/  })} />
      {errors.Uname && errors.Uname.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter User Name</span>
        </p>}
      {errors.Uname && errors.Uname.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">User Name only contain letters, numbers, underscores, and hyphens</span>
        </p>}

        <label htmlFor="Uname" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
         peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
         peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >User name</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="email" name="Email" id="Email" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Email', { required: true })} />
        {errors.Email && errors.Email.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Email</span>
          </p>}

        <label htmlFor="Email" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
           peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Email Address</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <input type="password" name="Password" id="Password" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
      focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('Password', { required: true, pattern: /^(?=.*?[A-Z].*?[A-Z])(?=.*?[a-z].*?[a-z])(?=.*?\d.*?\d)(?=.*?[\W_].*?[\W_])[A-Za-z\d\W_]{8,16}$/})} />
      {errors.Password && errors.Password.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Password</span>
        </p>}
      {errors.Password && errors.Password.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Password Should contain 2 Small, Capital, Special Character and digit within 8-16 char</span>
        </p>}

      <label htmlFor="Password" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
       duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
       peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Password</label>
    </div>
    
    <div className="relative z-0 w-full mb-6 group">
    <input type="password" name="CPassword" id="CPassword" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('CPassword', { required: true, pattern: /^(?=.*?[A-Z].*?[A-Z])(?=.*?[a-z].*?[a-z])(?=.*?\d.*?\d)(?=.*?[\W_].*?[\W_])[A-Za-z\d\W_]{8,16}$/})} />
      {errors.CPassword && errors.CPassword.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Confirm Password</span>
        </p>
      }
      {errors.CPassword && errors.CPassword.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Password Should contain 2 Small, Capital, Special Character and digit within 8-16 char</span>
        </p>}
      <label htmlFor="CPassword" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Confirm password</label>
    </div>
  </div>


  <div className="grid md:grid-cols-2 md:gap-6">


    <div className="relative z-0 w-full mb-6 group ">
       
  <fieldset>
    <legend className="sr-only">Gender</legend>
    <div className={signupstyles.toss_radio_button_title_design1}>Gender</div>




      <div className="flex flex-wrap">
    <div className="flex items-center mr-4">
        
         <input id="MALE" type="radio" name="Gender"
            {...register('Gender', { required: true })}
               value="Male" 
              className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
              dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 
              dark:border-gray-600`, 
              signupstyles.toss_radio_button_design1].join(' ')} />
              <label htmlFor="MALE" 
              className={[`block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
               signupstyles.toss_radio_button_label_design1].join(' ')}>
               Male
              </label>
          </div>

          <div className="flex items-center mr-4">
    <input id="FEMALE" type="radio" name="Gender"
    {...register('Gender', { required: true })}
     value="Female" 
    className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
    dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700
     dark:border-gray-600`, 
    signupstyles.toss_radio_button_design1].join(' ')}
    />
    <label htmlFor="FEMALE"
    className={[`block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
    signupstyles.toss_radio_button_label_design1].join(' ')} 
   >
      Female
    </label>
  </div>

  <div className="flex items-center mr-4">
    <input id="OTHER" type="radio" name="Gender"
    {...register('Gender', { required: true })}
     value="Other" 
    className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
    dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600`, 
    signupstyles.toss_radio_button_design1].join(' ')}
    />
    <label htmlFor="OTHER" 
    className={[`block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
    signupstyles.toss_radio_button_label_design1].join(' ')}
    >
      Other
    </label>
    </div>
   </div>
  </fieldset>
  </div>



  <div className="relative z-0 w-full mb-6 group">
        <input type="tel"  name="MobileNo" id="MobileNo" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
        border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
        dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 
        peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
         placeholder=" " 
         {...register('MobileNo', { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/})} />
         {errors.MobileNo && errors.MobileNo.type === "required" &&
          <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
          signupstyles.toss_text_box_error1].join(' ')}>
            <span className="font-medium">Please enter Mobile Number</span>
            </p>}
         {errors.MobileNo && errors.MobileNo.type === "pattern" &&
          <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
          signupstyles.toss_text_box_error1].join(' ')}>
            <span className="font-medium">Please enter Valid Mobile Number</span>
            </p>
          }
        <label htmlFor="MobileNo" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500 
        dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
        top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
         peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
         peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
         peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Phone number</label>
    </div>
  </div>


  <div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Designation" id="Designation" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Designation', { required: true, maxLength: 30, minLength:2  })} />
      {errors.Designation && errors.Designation.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Designation</span>
        </p>}
      {errors.Designation && errors.Designation.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 30</span>
        </p>}
      {errors.Designation && errors.Designation.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 30</span>
        </p>}

        <label htmlFor="Designation" 
          className={[`peer-focus:font-medium absolute text-sm text-gray-500 
        dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
         top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
          peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
          peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
          >Designation</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="EmployeeId" id="EmployeeId" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
         dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
         focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
         placeholder=" " 
      {...register('EmployeeId', { required: true, pattern: /^E-\d{6}$/})} />
      {errors.EmployeeId && errors.EmployeeId.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter ID Number</span>
          </p>}

          
      {errors.EmployeeId && errors.EmployeeId.type === "pattern" &&
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       signupstyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Please provide a valid employee ID E-000000</span>
         </p> 
     }

        <label htmlFor="EmployeeId" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 
         scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
         peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Employee ID No.</label>
    </div>
  </div>
 


  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  signupstyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>
    <br></br>

 <div className={buttonstyles.form_button_div_design1}>
 
 <button type="submit" 
  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
  signupstyles.button_area].join(' ')} >Submit</button>




</div>






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
const response = await api.get('/admin/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

return { props: { data } };


 }