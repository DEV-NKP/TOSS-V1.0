import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faKey, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import buttonstyles from '../../../styles/shared_style/toss_button_style.module.css'
import pagestyles from '../../../styles/shared_style/change_password_style.module.css'

import DashboardLayoutHeader from "../../component/officer_component/officer_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/officer_component/officer_dashboard_layout_menu";


import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from '../../api';
import { useForm } from 'react-hook-form';
export default function OfficerChangePassword({data}) {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (submitData) => {
   
      try {
        const response = await api.put("/officer/changepassword/"+data.Uname,
        { 
          OLDPassword:submitData.OPassword,
          NEWPassword:submitData.CPassword
        
        }).then(function (response) {
          console.log(submitData.Password);
          console.log(submitData.CPassword);

          if(typeof response.data === "string")
          {
            setSuccess( response.data);
          }
          else{
            setSuccess('     Modified Successfully');
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

  

  return (
    <>
  <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="Profile" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>
{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}
<div className="grid md:grid-cols-4 md:gap-4 mb-6 mt-6">
<div></div>
<div className="col-span-2 ml-8"> 
<div className={[`w-full items-center justify-center max-w-200 p-4 m-6 sm:p-6 md:p-8`, 
  pagestyles.form_changepass_form].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)}>
    
  <div 
  className={[`relative z-0 w-full text-sm mb-10 `, 
  pagestyles.changepass_form_txt1].join(' ')}>
    Change Password
  </div> 


  <div className="mb-6 m-5 items-center w-full relative">
  {/*className={[``, 
        loginstyles.toss_signup_txt].join(' ')}*/}
<div className={[`mb-10 ml-10 flex relative items-center`, 
    pagestyles.changepass_image_div].join(' ')}>
      
  <Image width="300" height="300" className={[`h-auto flex relative  max-w-lg` , 
       pagestyles.toss_changepass_image].join(' ')}  src="/shared_resources/change_pass.svg" alt="image change pass"/>

  

</div>


  <div className="mb-6 pt-4">
  <div className="relative z-0 w-full mb-6 pr-8 group">
  <input type="password" name="OPassword" id="OPassword" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
      focus:ring-0 focus:border-blue-600 peer`, 
      pagestyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('OPassword', { required: true, pattern: /^(?=.*?[A-Z].*?[A-Z])(?=.*?[a-z].*?[a-z])(?=.*?\d.*?\d)(?=.*?[\W_].*?[\W_])[A-Za-z\d\W_]{8,16}$/})} />
      {errors.OPassword && errors.OPassword.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter your Old Password</span>
        </p>}
      {errors.OPassword && errors.OPassword.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Password Should contain 2 Small, Capital, Special Character and digit within 8-16 char</span>
        </p>}

      <label htmlFor="OPassword" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
       duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
       peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-6`, 
        pagestyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faUser} className={pagestyles.toss_login_icon}/>

          
          Old Password</label>
    </div> {/* Uname */}


   <div className="relative z-0 w-full mb-6 pr-8 group">
   <input type="password" name="CPassword" id="CPassword" 
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
       pagestyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('CPassword', { required: true, pattern: /^(?=.*?[A-Z].*?[A-Z])(?=.*?[a-z].*?[a-z])(?=.*?\d.*?\d)(?=.*?[\W_].*?[\W_])[A-Za-z\d\W_]{8,16}$/})} />
      {errors.CPassword && errors.CPassword.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter your New Password</span>
        </p>
      }
      {errors.CPassword && errors.CPassword.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Password Should contain 2 Small, Capital, Special Character and digit within 8-16 char</span>
        </p>}
      <label htmlFor="CPassword" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
       pagestyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faKey} className={pagestyles.toss_login_icon}/>
          New Password</label>
    </div>   {/* password */}



  </div>{/* Uname+Password */}
 

<div className={[` mb-0`, 
    pagestyles.change_pass_button].join(' ')}>

<p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  pagestyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>

<div className={pagestyles.form_button_div_design1}>
  <button type="submit" 
  className={[` font-medium m-3 ml-8 text-sm w-full sm:w-auto px-7 py-2.5
    text-center`, 
    pagestyles.toss_button_area].join(' ')}>Confirm</button>
</div>


</div>

  </div>



 





</form>
</div>
</div>
<div></div>
</div>

</div>

{/* ------------------   Content   --------------- */}



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
