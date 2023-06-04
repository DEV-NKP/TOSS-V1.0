import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faKey, faLock, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import buttonstyles from '../styles/shared_style/toss_button_style.module.css'
import pagestyles from '../styles/home_style/forgot_password_style.module.css'
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'

import HomeLayoutHeader from "./component/home_layout_header";
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from './api';
import { useForm } from 'react-hook-form';
export default function AdminChangePassword({ length = 6, onComplete }) {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [values, setValues] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);
  const [success, setSuccess] = useState('')
  const onSubmit = async (submitData) => {
 
    if(submitData.CPassword===submitData.OPassword)
   {
    const otp = values.join('');
    if(otp!="")
    {

      try {
        const response = await api.put("/toss/changeforgotpassword/",
        { 
          OTP:otp,
          Password:submitData.CPassword
        
        }).then(function (response) {
          console.log(response);
          if(typeof response.data === "string")
          {
            setSuccess( response.data);
          }
          else{
            setSuccess('Password Changed');
            reset();
            router.push('/login');
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
    setSuccess('Check your E-mail, Enter your OTP')
  }
  }
  else{
    setSuccess('Password & Confirm Password must be same')
  }

  };

  const handleChange = (e, index) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 1) {
      const newValues = [...values];
      newValues[index] = inputValue;
      setValues(newValues);

      if (inputValue !== '' && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && values[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length);

    const newValues = values.map((value, index) =>
      index < pastedData.length ? pastedData[index] : value
    );
    setValues(newValues);

    if (pastedData.length < length) {
      inputRefs.current[pastedData.length].focus();
    }
  };


  return (
    <>

{/* ------------------   Header   --------------- */}

<HomeLayoutHeader></HomeLayoutHeader>
{/* ------------------   Header   --------------- */}

<div className={`${backgroundstyles["light"]} ${backgroundstyles["x1"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x2"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x3"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x4"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x5"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x6"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x7"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x8"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x9"]}`}></div>


{/* ------------------   Content   --------------- */}
<div className="grid md:grid-cols-4 md:gap-4 mb-6 mt-6">
<div></div>
<div className="col-span-2 ml-8"> 
<div className={[`w-full items-center justify-center max-w-200 p-4 m-auto mt-4 sm:p-6 md:p-8`, 
  pagestyles.form_changepass_form1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)}>
    
  <div 
  className={[`relative z-0 w-full text-sm mb-10 `, 
  pagestyles.changepass_form_txt1].join(' ')}>
    Reset Password
  </div> 


  <div className="mb-6 m-5 items-center w-full relative">
  {/*className={[``, 
        loginstyles.toss_signup_txt].join(' ')}*/}
<div className={[`mb-10 ml-10 flex relative items-center`, 
    pagestyles.changepass_image_div].join(' ')}>
      
  <Image width="300" height="300" className={[`h-auto flex relative pb-6 max-w-lg` , 
       pagestyles.toss_changepass_image].join(' ')}  src="/shared_resources/forgot1.svg" alt="image change pass"/>

  

</div>


  <div className="mb-6 pt-4">
 <div className="relative z-0 w-full mb-6 pr-8 group flex justify-center">
 {values.map((value, index) => (
        <input
          key={index}
          type="text"
          name="OTP"
          className={[`block mr-3 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
      focus:ring-0 focus:border-blue-600 peer text-center`, 
      pagestyles.toss_otp_box_design1].join(' ')}
          value={value}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(input) => (inputRefs.current[index] = input)}
        />
      ))}
     <label htmlFor="OTP" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
       duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] 
       peer-focus: peer-focus:text-blue-600 peer-focus:dark:text-blue-500
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-10`, 
        pagestyles.toss_otp_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faUnlockKeyhole} className={pagestyles.toss_login_icon}/>

          
        Enter OTP</label>
 </div>
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
        <span className="font-medium">Please enter your Password</span>
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
          <FontAwesomeIcon icon={faLock} className={pagestyles.toss_login_icon}/>

          
         Password</label>
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
        <span className="font-medium">Please enter your Confirm Password</span>
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
          Confirm Password</label>
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



    
    </>
  )
}
