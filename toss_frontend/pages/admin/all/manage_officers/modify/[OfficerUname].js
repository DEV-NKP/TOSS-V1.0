import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import signupstyles from '../../../../../styles/shared_style/form_style1.module.css'
import buttonstyles from '../../../../../styles/shared_style/toss_button_style.module.css'
import AdminDashboardLayoutHeader from "@/pages/component/admin_component/admin_dashboard_layout_header";
import AdminDashboardLayoutMenu from "@/pages/component/admin_component/admin_dashboard_layout_menu";


import { useState } from 'react'
import api from '../../../../api';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export default function AdminAEditOfficer({data, officerdata}) {
  const [selectedOption, setSelectedOption] = useState(officerdata.Gender);
  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (editdata) => {
   
      
      try {
          const response = await api.put("/admin/editofficer/"+officerdata.Uname,
          { 
            FirstName:editdata.FirstName,
            LastName:editdata.LastName,
            MobileNo: editdata.MobileNo,
            Gender:editdata.Gender,
            Designation:editdata.Designation

          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('Officer Edited Successfully');
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

<AdminDashboardLayoutHeader Title="Modify Officer" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}



<div  className={[`relative z-0 w-full  group`, 
    signupstyles.toss_form_div1].join(' ')}>

  <form onSubmit={handleSubmit(onSubmit)} >
  <div 
    className={[` z-0 pt-8 mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Modify Officer
  </div> 


  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="FirstName" id="FirstName" defaultValue={officerdata.FirstName}
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
        <input type="text" name="LastName" id="LastName" defaultValue={officerdata.LastName}
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
       
  <fieldset>
    <legend className="sr-only">Gender</legend>
    <div className={signupstyles.toss_radio_button_title_design1}>Gender</div>

    <div className="flex flex-wrap">
    <div className="flex items-center mr-4">
         <input id="MALE" type="radio" name="Gender"
          checked={selectedOption === 'Male'}
          onClick={handleOptionChange}
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
    checked={selectedOption === 'Female'}
    onClick={handleOptionChange}
    {...register('Gender', { required: true })}
     value="Female" 
    className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
    dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700
     dark:border-gray-600`, 
    signupstyles.toss_radio_button_design1].join(' ')}
    />
    <label htmlFor="FEMALE"
    className={[`block ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300`, 
    signupstyles.toss_radio_button_label_design1].join(' ')} 
   >
      Female
    </label>
  </div>

  <div className="flex items-center mr-4">
    <input id="OTHER" type="radio" name="Gender"
     checked={selectedOption === 'Other'}
     onClick={handleOptionChange}
    {...register('Gender', { required: true })}
     value="Other" 
    className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
    dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600`, 
    signupstyles.toss_radio_button_design1].join(' ')}
    />
    <label htmlFor="OTHER" 
    className={[`block ml-2 pr-4 text-sm font-medium text-gray-900 dark:text-gray-300`, 
    signupstyles.toss_radio_button_label_design1].join(' ')}
    >
      Other
    </label>
    </div>


   </div>


  </fieldset>
  </div>
  <div className="relative z-0 w-full mb-6 group">
        <input type="tel"  name="MobileNo" id="MobileNo" defaultValue={officerdata.MobileNo}
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
        <input type="text" name="Designation" id="Designation" defaultValue={officerdata.Designation}
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
    
  </div>
 


  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  signupstyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>

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
<AdminDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></AdminDashboardLayoutMenu>

{/* -----------------   MainMenu  -------------- */}


    
    </>
  )
}

export async function getServerSideProps(context) {
    
  
  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_admin = await api.get('/admin/viewprofile/'+tossSession.Uname)
.then(response_admin => {
  // handle the response
  data =  response_admin.data;

}).catch(error => {
  // handle the error
});


  var officerdata="";
  const officerUname=context.query.OfficerUname;
  const response = await api.get('/admin/viewofficerbyuname/'+officerUname);
  officerdata = await response.data;

return { props: { data,officerdata } }
}