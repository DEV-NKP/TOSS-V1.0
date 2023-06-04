import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope,faSheetPlastic,faPenToSquare,faPaperPlane, faVoicemail, faEnvelopeOpen, faComment, faComments, faTicket} from '@fortawesome/free-solid-svg-icons'
import { faKey } from "@fortawesome/free-solid-svg-icons";

import DashboardLayoutHeader from "../../component/cops_component/cops_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/cops_component/cops_dashboard_layout_menu";

import styles from '../../../styles/shared_style/reportpage_style.module.css'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { startTransition, useState } from 'react'
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import api from '../../api';

export default function Report({data}) {
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
            const response = await api.post("/cops/report/"+data.Uname,
            { 
               
              Details: submitdata.Details
            }).then(function (response) {
              console.log(response);
          
                setSuccess("Thank you for submitting report. Our team will check the details and take action aginst it.");
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

     <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="Report" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



{/* ------------------   Content   --------------- */}

<div  className={[`w-full m-8 p-0 relative z-0 mb-6 group`, 
       styles.contact].join(' ')}>



<form onSubmit={handleSubmit(onSubmit)}>
  <div 
  className={[`relative z-0 w-full mt-3 mb-0 group`, 
  styles.toss_form_txt1].join(' ')}>
    REPORT US
  </div> 


  <div className="grid md:grid-cols-1 md:gap-0 mt-4 mb-6">
  {/*className={[``, 
        contactstyles.toss_signup_txt].join(' ')}*/}


  

  <div className={[`grid md:grid-cols-1 md:gap-0 p-4 mt-2 mb-0`, 
    startTransition.toss_login_image_div].join(' ')}>

    <img className={[`h-auto max-w-sm`, 
    styles.toss_login_image].join(' ')} 
    src="/shared_resources/rep1.svg" alt="image description"/>

  </div>

  

  </div>


  
  <div className="grid md:grid-cols-1 md:gap-0 mb-4">


  <div className="relative z-0 w-full mb-2 group">
        <textarea name="Details" id="Details" cols="100" rows="5" 
    
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
           styles.toss_text_area_design1].join(' ')}
        placeholder=" " 
        {...register('Details', { required: true })} />
        {errors.Details && errors.Details.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        styles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Report Details</span>
          </p>}
       
        <label htmlFor="Details" 
        className={[`peer-focus:font-medium absolute text-sm duration-300 
        transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0`, 
            styles.toss_text_box_label_design1].join(' ')}
        >
          <FontAwesomeIcon icon={faComments} className={styles.toss_login_icon}/>

          
          Report Details</label>
    </div>

  </div>



  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  styles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>
    <br></br>
   
    <div className={styles.form_button_div_design1}>
  <button type="submit" 
  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
  styles.button_area].join(' ')} >Submit<FontAwesomeIcon icon={faPaperPlane} className={styles.report_icon}/></button>
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
const response = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

return { props: { data } };


 }
