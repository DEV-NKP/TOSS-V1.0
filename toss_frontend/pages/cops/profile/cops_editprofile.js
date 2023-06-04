import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import pagestyles from '../../../styles/shared_style/editprofile_style.module.css'

import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";


import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import api from '../../api';
import { useForm } from 'react-hook-form';
export default function CopsEditProfile({data}) {
  const [selectedOption, setSelectedOption] = useState(data.Gender);
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
          const response = await api.put("/cops/editprofile/"+data.Uname,
          { 
            FirstName:submitData.FirstName,
            LastName:submitData.LastName,
            MobileNo: submitData.MobileNo,
            Gender:submitData.Gender,
            RankCategory:submitData.RankCategory,
            RankGroup:submitData.RankGroup,
            Station:submitData.Station,
            Country:submitData.Country
          }).then(function (response) {
            console.log(response);
            if(typeof response.data === "string")
            {
              setSuccess( response.data);
            }
            else{
              setSuccess('     Modified Successfull');
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

<DashboardLayoutHeader Title="Profile" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}
<div  className={[`w-full m-8 p-items-center relative z-0 mb-6 group`, 
 pagestyles.admin_profile_main].join(' ')}>
 <form onSubmit={handleSubmit(onSubmit)} >
 <div 
  className={[`relative z-0 w-full text-sm mt-10  `, 
  pagestyles.changeprofile_form_txt1].join(' ')}>
    Edit Profile
  </div> 

  
<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-2">

    <div className="m-3 pt-5 p-5 ml-2">

    <div className="pt-3">
    <div className="mb-6">
   

  <label htmlFor="FirstName" className={[` block mb-2`, 
       pagestyles.profile_lebel].join(' ')} >First Name</label>
  <input type="text" id="FirstName" defaultValue={data.FirstName} className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.profile_data].join(' ')} 
       {...register('FirstName', { required: true, maxLength: 50, minLength:2 })}  
       />
    {errors.FirstName && errors.FirstName.type === "required" && 
    <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
    pagestyles.toss_text_box_error1].join(' ')}>
      <span className="font-medium">Please enter your First Name</span>
      </p>}
    {errors.FirstName && errors.FirstName.type === "maxLength" && 
    <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
    pagestyles.toss_text_box_error1].join(' ')}>
      <span className="font-medium">Length must be at least 2 characters and less than 50</span>
      </p>}
    {errors.FirstName && errors.FirstName.type === "minLength" && 
    <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
    pagestyles.toss_text_box_error1].join(' ')}>
      <span className="font-medium">Length must be at least 2 characters and less than 50</span>
      </p>}
</div>

    </div>

    <div className="pt-3">
  
    <fieldset>
    <legend className={[` sr-only `, 
       pagestyles.profile_lebel].join(' ')}>Gender</legend>
    <div className={[` mb-2`, 
       pagestyles.profile_lebel].join(' ')}>Gender</div>
      <div className="grid md:grid-cols-8 md:gap-6">
        <div className="flex items-center mb-4">
         <input id="MALE" type="radio" name="Gender"
          checked={selectedOption === 'Male'}
          onClick={handleOptionChange}
            {...register('Gender', { required: true })}
               value="Male" 
              className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
              dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 
              dark:border-gray-600`, 
              pagestyles.toss_radio_button_design1].join(' ')} />
              <label htmlFor="MALE" 
              className={[`block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
              pagestyles.profile_lebel].join(' ')}>
               Male
              </label>
          </div>

        <div className="flex items-center mb-4 mr-2">
    <input id="FEMALE" type="radio" name="Gender"
    checked={selectedOption === 'Female'}
    onClick={handleOptionChange}
    {...register('Gender', { required: true })}
     value="Female" 
    className={[`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
    dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700
     dark:border-gray-600`, 
     pagestyles.toss_radio_button_design1].join(' ')}
    />
    <label htmlFor="FEMALE"
    className={[`block ml-2 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
    pagestyles.profile_lebel].join(' ')} 
   >
      Female
    </label>
  </div>

    <div className="flex items-center mb-4">
    <input id="OTHER" type="radio" name="Gender"
    checked={selectedOption === 'Other'}
    onClick={handleOptionChange}
    {...register('Gender', { required: true })}
     value="Other" 
    className={[`w-4 h-4 ml-3 border-gray-300 focus:ring-2 focus:ring-blue-300 
    dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600`, 
    pagestyles.toss_radio_button_design1].join(' ')}
    />
    <label htmlFor="OTHER" 
    className={[`block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`, 
    pagestyles.profile_lebel].join(' ')}
    >
      Other
    </label>
    </div>
   </div>
  </fieldset>
    </div>

  
  <div className="mb-6  mt-4">

  <label htmlFor="Station" className={[` block mb-2`, 
       pagestyles.profile_lebel].join(' ')} >Station</label>
  <input type="text" id="Station" defaultValue={data.Station} className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.profile_data].join(' ')} 
       {...register('Station', { required: true, maxLength: 30, minLength:2 ,pattern: /^[a-zA-Z]+$/})} />

{errors.Station && errors.Station.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        pagestyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Station name must be valid</span>
          </p>}
          {errors.Station && errors.Station.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 30</span>
        </p>}
      {errors.Station && errors.Station.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 30</span>
        </p>}
        {errors.Station && errors.Station.type === "pattern" &&
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       pagestyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Please provide a valid station name</span>
         </p> 
     }

     </div>


     <div className="mb-6  mt-4">

    <label htmlFor="RankGroup" className={[` block mb-2`, 
        pagestyles.profile_lebel].join(' ')} >Rank Group</label>
    <input type="text" id="RankGroup" defaultValue={data.RankGroup} className={[` pb-1.5 pt-1.5 w-full`, 
        pagestyles.profile_data].join(' ')} 
        {...register('RankGroup', { required: true})}  
        />
      {errors.RankGroup && errors.RankGroup.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        pagestyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Rank Group</span>
          </p>}
        

   </div>

      </div>

    <div className="m-3 pt-5 p-5  ml-2">
    <div className="pt-3">

    <label htmlFor="LastName" className={[` block mb-2`, 
       pagestyles.profile_lebel].join(' ')} >Last Name</label>
  <input type="text" id="LastName" defaultValue={data.LastName} className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.profile_data].join(' ')}  {...register('LastName', { required: true, maxLength: 50, minLength:2  })} />
       {errors.LastName && errors.LastName.type === "required" && 
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       pagestyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Please enter your Last Name</span>
         </p>}
       {errors.LastName && errors.LastName.type === "maxLength" && 
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       pagestyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Length must be at least 2 characters and less than 50</span>
         </p>}
       {errors.LastName && errors.LastName.type === "minLength" && 
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       pagestyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Length must be at least 2 characters and less than 50</span>
         </p>}
 
    </div>
    <div className="pt-3 mt-6">

    <label htmlFor="MobileNo" className={[` block mb-2`, 
       pagestyles.profile_lebel].join(' ')} >Mobile Number</label>
  <input type="tel" id="MobileNo" defaultValue={data.MobileNo} className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.profile_data].join(' ')}  
       {...register('MobileNo', { required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/})} />
       {errors.MobileNo && errors.MobileNo.type === "required" &&
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        pagestyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Mobile Number</span>
          </p>}
       {errors.MobileNo && errors.MobileNo.type === "pattern" &&
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        pagestyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Valid Mobile Number</span>
          </p>
        }
    </div>

    <div className="mb-6  mt-4">

    <label htmlFor="Country" className={[` block mb-2`, 
        pagestyles.profile_lebel].join(' ')} >Country</label>
    <input type="text" id="Country" defaultValue={data.Country} className={[` pb-1.5 pt-1.5 w-full`, 
        pagestyles.profile_data].join(' ')} 
        {...register('Country', { required: true,maxLength: 30, minLength:2 , pattern: /^[a-zA-Z]+$/})} />
      {errors.Country && errors.Country.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        pagestyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Country</span>
          </p>}
          {errors.Country && errors.Country.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 30</span>
        </p>}
      {errors.Country && errors.Country.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      pagestyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 2 characters and less than 30</span>
        </p>}
          
      {errors.Country && errors.Country.type === "pattern" &&
       <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
       pagestyles.toss_text_box_error1].join(' ')}>
         <span className="font-medium">Please provide a valid country name</span>
         </p> 
     }

   </div>


   <div className="mb-6  mt-4">

    <label htmlFor="RankCategory" className={[` block mb-2`, 
        pagestyles.profile_lebel].join(' ')} >Rank Category</label>
    <input type="text" id="RankCategory" defaultValue={data.RankCategory} className={[` pb-1.5 pt-1.5 w-full`, 
        pagestyles.profile_data].join(' ')} 
        {...register('RankCategory', { required: true})} />

  {errors.RankCategory && errors.RankCategory.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        pagestyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Rank Catagory</span>
          </p>}

 </div>
    </div>

    
</div>




{/* ------------------   Bottom buttons   --------------- */}

<div className="grid grid-cols-1 gap-3 pb-6 pl-4 sm:grid-cols-1">
    
  <div></div>

  <div className="m-3 pt-0 ml-2">
  <p id="filled_success_help" 
  className={[`mt-2 ml-auto text-xs text-green-600 dark:text-green-400`, 
  pagestyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>

  <button type="submit"  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       pagestyles.profile_bottom_button_area].join(' ')}  >Submit Changes<FontAwesomeIcon icon={faUserPen} className={pagestyles.profile_icon}/> </button>
  </div>

  <div></div>
</div>
</form>
{/* ------------------   Bottom buttons   --------------- */}


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
const response = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

return { props: { data } };
 }
