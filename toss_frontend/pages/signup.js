import Link from "next/link";
import HomeLayoutHeader from "./component/home_layout_header";
import signupstyles from '../styles/shared_style/form_style.module.css'
import buttonstyles from '../styles/shared_style/toss_button_style.module.css'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import api from "./api";
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'

export default function Signup() {
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (data) => {
     if(data.Password===data.CPassword)
     {
      
      try {
          const response = await api.post("/toss/signup",
          { Uname: data.Uname,
            FirstName:data.FirstName,
                LastName:data.LastName,
                Email:data.Email,
                Password: data.Password,
                MobileNo: data.MobileNo,
                Gender:data.Gender,
                DLN:data.DLN
          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('Signup Successfull');
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
      setSuccess('Password & Confirm Password must be same');
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



<div  className={[`relative z-0 p-10 m-10 group`, 
    signupstyles.toss_form_div1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)} >
  <div 
    className={[`relative z-0 w-full mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Signup
  </div> 


  <div className="grid md:grid-cols-2 md:gap-10">
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
        <span className="font-medium">Please enter your First Name</span>
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
        <span className="font-medium">Please enter your Last Name</span>
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
  <div className="grid md:grid-cols-2 md:gap-10">
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
        <span className="font-medium">Please enter your User Name</span>
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
          <span className="font-medium">Please enter your Email</span>
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
  <div className="grid md:grid-cols-2 md:gap-10">
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
        <span className="font-medium">Please enter your Password</span>
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
  <div className="grid md:grid-cols-2 md:gap-10">
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
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="DLN" id="DLN" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white 
         dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
         focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
         placeholder=" " 
      {...register('DLN', { required: true, pattern: /^[A-Z]{2}\d{10}[A-Z]$/})} />
      {errors.DLN && errors.DLN.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Driving License No.</span>
          </p>}

          
      {errors.DLN && errors.DLN.type === "pattern" &&
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       signupstyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Please provide a valid Driver License Number XX0000000000X</span>
         </p> 
     }

        <label htmlFor="DLN" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 
         scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
         peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Driving Licence No.</label>
    </div>
  </div>
 
  <fieldset>
    <legend className="sr-only">Gender</legend>
    <div className={signupstyles.toss_radio_button_title_design1}>Gender</div>
      <div className="grid md:grid-cols-8 md:gap-6">
        <div className="flex items-center mb-4">
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

        <div className="flex items-center mb-4">
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

    <div className="flex items-center mb-4">
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
  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  signupstyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>

 <div className={buttonstyles.form_button_div_design1}>
  <button type="submit" 
    className={[`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
    focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
    text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`, 
    buttonstyles.form_button_design1].join(' ')}>Submit</button>


</div>



<p className={[`text-gray-500 dark:text-gray-400`, 
signupstyles.toss_avilable_login_label].join(' ')}

>Already have an account? <a href="/login" className={[`font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline`, 
signupstyles.toss_avilable_login_link].join(' ')}>Log In</a></p>


</form>
</div>
    </>
  )
}
