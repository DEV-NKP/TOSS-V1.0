import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope,faSheetPlastic,faPenToSquare,faPaperPlane, faVoicemail, faEnvelopeOpen, faComment, faComments} from '@fortawesome/free-solid-svg-icons'
import { faKey } from "@fortawesome/free-solid-svg-icons";
import HomeLayoutHeader from "./component/home_layout_header";

import styles from '../styles/home_style/contactpage_style.module.css'
import contactstyles from '../styles/shared_style/form_style.module.css'
import buttonstyles from '../styles/shared_style/toss_button_style.module.css'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'
import api from './api';

export default function Contact() {
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
            const response = await api.post("/toss/contact",
            { 
              Name: data.Name,
              Email: data.Email,   
              Subject: data.Subject,
              Message: data.Message
            }).then(function (response) {
              console.log(response);
          
                setSuccess("Thank you for your interest in TOSS. Our team will be in touch with you shortly.");
                reset();
                
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

<div className={styles.contact}>

<form onSubmit={handleSubmit(onSubmit)}>
  <div 
  className={[`relative z-0 w-full mb-6 group`, 
  contactstyles.toss_form_txt1].join(' ')}>
    Contact Us
  </div> 


  <div className="grid md:grid-cols-2 md:gap-0 mb-6">
  {/*className={[``, 
        contactstyles.toss_signup_txt].join(' ')}*/}


  <div className="grid md:grid-cols-1 md:gap-0 mb-6">
  <div></div><div></div><div></div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Name" id="Name" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           contactstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Name', { required: true })} />
        {errors.Name && errors.Name.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        contactstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter your Name</span>
          </p>}
       
        <label htmlFor="Name" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
            contactstyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faUser} className={contactstyles.toss_login_icon}/>

          
          Name</label>
    </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="email" name="Email" id="Email" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           contactstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Email', { required: true })} />
        {errors.Email && errors.Email.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        contactstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter your Email</span>
          </p>}
       
        <label htmlFor="Email" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
            contactstyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faEnvelope} className={contactstyles.toss_login_icon}/>

          
          Email</label>
    </div>


    
     <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Subject" id="Subject" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           contactstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Subject', { required: true })} />
        {errors.Subject && errors.Subject.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        contactstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Subject</span>
          </p>}
       
        <label htmlFor="Subject" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
            contactstyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faEnvelopeOpen} className={contactstyles.toss_login_icon}/>

          
          Subject</label>
    </div>

    <div className="relative z-0 w-full mb-6 group">
        <textarea name="Message" id="Message" cols="50" rows="3" 
    
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           contactstyles.toss_text_area_design1].join(' ')}
        placeholder=" " 
        {...register('Message', { required: true })} />
        {errors.Message && errors.Message.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        contactstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter your Message</span>
          </p>}
       
        <label htmlFor="Message" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
            contactstyles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faComments} className={contactstyles.toss_login_icon}/>

          
          Message</label>
    </div>




  </div>{/* Uname+Password */}
 

  <div className={[`grid md:grid-cols-1 md:gap-0 mb-0`, 
    contactstyles.toss_login_image_div].join(' ')}>

    <img className={[`h-auto max-w-full`, 
    styles.toss_contact_image].join(' ')} 
    src="/home_resources/contact.svg" alt="image description"/>

  </div>








  </div>
  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  contactstyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>
    <br></br>
  <div className={buttonstyles.form_button_div_design1}>
  <button type="submit" 
  className={[`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
   focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
    text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`, 
    buttonstyles.form_button_design1].join(' ')}>Submit</button>
  </div>


</form>
</div>
    </>
  )
}
