import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown, faArrowRight, faCamera, faCircleUp, faHourglassStart, faPaperPlane, faReply, faShieldHalved, faSitemap, faTriangleExclamation, faUnlockKeyhole, faUser, faUserPen, faUserTag} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import pagestyles from '../../../styles/shared_style/viewprofile_style.module.css'

import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";

import CopsSessionCheck from "../../component/session_check/cops_sessioncheck";

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
export default function CopsProfile({data}) {


  const router= useRouter();

  const updateProfile = (e)=>{
    e.preventDefault();
  router.push(
    {
      pathname: 'cops_editprofile',
      query: {Uname: data.Uname},
  
    }
  )
  }
  const changePassword = (e)=>{
    e.preventDefault();
  router.push(
    {
      pathname: 'cops_changepassword',
      query: { Uname: data.Uname},
    }
  )
  }
  
  
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const validateFile = (value) => {
      const file = value[0];
      console.log(file);
      const allowedtypes = ["image/jpg", "image/png", "image/jpeg", "image/JPG"
      , "image/PNG", "image/ICO", "image/ico", "image/gif", "image/GIF"];
  
      if (!allowedtypes.includes(file.type)){
          return false;
      }
      }
  
      const [success, setSuccess] = useState('')
      const handleFileUpload = async (event) => {
        console.log(event.target.files[0]);
        const input = event.target;
        const formData = new FormData();
        formData.append('image',  input.files[0]);
  
        try {
            const response = await api.put("/cops/updateprofilepicture/"+data.Uname,
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            reset();
    router.push();
        }
        catch (error) {
            //console.log(error.response.data.message);
            router.reload();
  
        }
  
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

  
<div className="grid grid-cols-1 gap-3 p-10 pr-4 sm:grid-cols-3">

    <div className="m-3 pt-5 ml-2">

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
       pagestyles.admin_profile_lebel].join(' ')} > First Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.admin_profile_data].join(' ')} 
       >{data.FirstName}
    </p>
    </div>

    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       pagestyles.admin_profile_lebel].join(' ')} > Email
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.admin_profile_data].join(' ')} 
      >{data.Email}
    </p>
    </div>
    <div className="pt-3">
    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full`, 
       pagestyles.admin_profile_lebel].join(' ')} > Gender
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
       pagestyles.admin_profile_data].join(' ')} 
      >{data.Gender}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Rank Category
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.RankCategory}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Police ID
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.PoliceId}
    </p>
    </div>

      </div>

    <div className="m-3 pt-5 ml-2">
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Last Name
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.LastName}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Phone No.
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.MobileNo}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Station
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.Station}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Rank Group
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.RankGroup}
    </p>
    </div>
    <div className="pt-3">

    <p  className={[` pb-2.5 pt-4 py-2.5 px-0 text-sm w-full `, 
      pagestyles.admin_profile_lebel].join(' ')} > Country
    </p>
    <p className={[` pb-1.5 pt-1.5 w-full`, 
      pagestyles.admin_profile_data].join(' ')} 
      >{data.Country}
    </p>
    </div>
    </div>

    <div className={[`m-2 pl-2 p-items-center relative`, 
       pagestyles.admin_profile_section].join(' ')} >
    <div className={pagestyles.image_container}>
   
      
    <Image width="250" height="250" className={[`min-w-250 min-h-250` , 
       pagestyles.profile_img].join(' ')} src={"http:/localhost:3000/cops/getimage/"+data.ProfilePicture} alt={data.ProfilePicture} />
        <div className={pagestyles.border}>
      <div className={pagestyles.border_trans}></div>
    </div>
  </div>
<input onChangeCapture={handleFileUpload} accept=".jpg,.png,.gif,.jpeg,.PNG,.GIF,.JPG" className={[`block w-full m-4 text-sm rounded-lg cursor-pointer`, 
       pagestyles.profile_picture_input].join(' ')} 
  id="image" type="file" 
  {...register('image', { required: true, validate: validateFile })}
  />
  {errors.image && 
                      <p>
                      {errors.image.type === 'required'
                                                      ?
    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">file is required</span></p>
                                                      :

    <p id="outlined_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">invalid file</span></p>
          }
                  </p>}
    
      
    </div>

</div>




{/* ------------------   Bottom buttons   --------------- */}

<div className="grid grid-cols-1 gap-3 pb-10 p-5 sm:grid-cols-4">
    
  <div></div>

  <div className="m-3 pt-0 ml-2">
  <button onClick={updateProfile} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       pagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Update Profile<FontAwesomeIcon icon={faUserPen} className={pagestyles.profile_icon}/> </button>
  </div>

   <div className="m-3 pt-0 ml-2">
  <button onClick={changePassword} className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
       pagestyles.profile_bottom_button_area].join(' ')}  type="submit" >Change Password <FontAwesomeIcon icon={faUnlockKeyhole} className={pagestyles.profile_icon}/> </button>
  </div>
  <div></div>
</div>


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