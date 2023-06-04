import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from "@fortawesome/free-solid-svg-icons";

import HomeLayoutHeader from "./component/home_layout_header";
import loginstyles from '../styles/shared_style/form_style.module.css'
import buttonstyles from '../styles/shared_style/toss_button_style.module.css'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import api from './api';
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'

export default function LogIn() {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (data) => {
      try {
          const response = await api.post("/toss/login",
          { 
            Uname: data.Uname,
            Password: data.Password    
          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess(response.data);
             
            }
            else{
               if(typeof response.data.Uname === "string")
              {
                //setSuccess('Login Successfull');
                sessionStorage.setItem('Uname', response.data.Uname);
                sessionStorage.setItem('Email', response.data.Email);
                sessionStorage.setItem('Post', response.data.Post);
                console.log(sessionStorage.getItem('Uname')+" "+sessionStorage.getItem('Email')+" "+sessionStorage.getItem('Post'));
                if(response.data.Post==="Admin")
                {
                  router.push({
                    pathname: '/admin/profile/admin_viewprofile',
                    query: { Uname: response.data.Uname},
                  });
                }
                if(response.data.Post==="Officer")
                {
                  router.push({
                    pathname: '/officer/profile/officer_viewprofile',
                    query: { Uname: response.data.Uname},
                  });
                }
                if(response.data.Post==="Cops")
                {
                  router.push({
                    pathname: '/cops/profile/cops_viewprofile',
                    query: { Uname: response.data.Uname},
                  });
                }
                if(response.data.Post==="Owner")
                {
                  router.push({
                    pathname: '/owner/profile/owner_viewprofile',
                    query: { Uname: response.data.Uname},
                  });
                }
                
              //reset();
              }
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
   
    <HomeLayoutHeader></HomeLayoutHeader>

    <div className={`${backgroundstyles["light"]} ${backgroundstyles["x1"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x2"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x3"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x4"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x5"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x6"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x7"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x8"]}`}></div>
<div className={`${backgroundstyles["light"]} ${backgroundstyles["x9"]}`}></div>


<div className={loginstyles.toss_form_div_loginform}>

  <form onSubmit={handleSubmit(onSubmit)}>
  <div 
  className={[`relative z-0 w-full mb-6 group`, 
  loginstyles.toss_form_txt1].join(' ')}>
    Log In
  </div> 


  <div className="grid md:grid-cols-2 md:gap-0 mb-6">
  {/*className={[``, 
        loginstyles.toss_signup_txt].join(' ')}*/}


  <div className="grid md:grid-cols-1 md:gap-0 mb-6">
  <div></div><div></div><div></div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Uname" id="Uname" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           loginstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Uname', { required: true })} />
        {errors.Uname && errors.Uname.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        loginstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter your User Name</span>
          </p>}
       
        <label htmlFor="UNAME" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
            loginstyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faUser} className={loginstyles.toss_login_icon}/>

          
          User name</label>
    </div> {/* Uname */}


   <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="PASS" id="PASS" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           loginstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Password', { required: true})} />
        {errors.Password && errors.Password.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        loginstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter your Password</span>
          </p>}
     
        <label htmlFor="PASS" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
            loginstyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faKey} className={loginstyles.toss_login_icon}/>
          Password</label>
    </div>   {/* password */}



    <Link href="/forgot_password" className=" no-underline ml-auto text-sm  font-medium text-indigo-500 hover:no-underline hover:text-sky-400 dark:text-blue-500">Forgot Password?</Link>
<br></br>
    <div className="flex items-center">
        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
        <label htmlFor="link-checkbox" className={[`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
            loginstyles.toss_rememberme_label].join(' ')}>I accept the <a href="/about" className= "text-indigo-500  hover:text-sky-400 dark:text-blue-500 hover:no-underline">terms and conditions</a>.</label>
      </div>

  </div>{/* Uname+Password */}
 

  <div className={[`grid md:grid-cols-1 md:gap-0 mb-0`, 
    loginstyles.toss_login_image_div].join(' ')}>

  <img className={[`h-auto max-w-full`, 
    loginstyles.toss_login_image].join(' ')} 
    src="/shared_resources/rep.svg" alt="image description"/>

</div>








  </div>
  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  loginstyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>
<div className={buttonstyles.form_button_div_design1}>
  <button type="submit" 
  className={[`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
   focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
    text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`, 
    buttonstyles.form_button_design1].join(' ')}>Submit</button>
</div>

<div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <span className={[`absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900`, 
    loginstyles.toss_login_hr].join(' ')}>or</span>
</div>


<p className={[`text-gray-500 dark:text-gray-400`, 
loginstyles.toss_avilable_login_label].join(' ')}

>New to TOSS? Click to <a href="/signup" className={[`font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline`, 
loginstyles.toss_avilable_login_link].join(' ')}>Join Now</a></p>





</form>
</div>
    </>
  )
}
