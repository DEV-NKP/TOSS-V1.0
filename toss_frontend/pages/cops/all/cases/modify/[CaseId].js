import Link from "next/link";
import CopsDashboardLayoutHeader from "../../../../component/cops_component/cops_dashboard_layout_header";
import CopsDashboardLayoutMenu from "../../../../component/cops_component/cops_dashboard_layout_menu";
import axios from "axios";
import { useRouter } from 'next/router'
import Image from "next/image";
import signupstyles from '../../../../../styles/shared_style/form_style1.module.css'

import editcasestyles from '../../../../../styles/cops_style/cops_viewprofile_style.module.css'
import buttonstyles from '../../../../../styles/shared_style/toss_button_style.module.css'
import { useState, useEffect } from 'react';
import api from '../../../../api';
import { useForm } from 'react-hook-form';


export default function EditCase({data,casedata}) {
    
  // ..............................

  const router = useRouter();
  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
  } = useForm();
  const [success, setSuccess] = useState('')
  const onSubmit = async (submitdata) => {
     
    // if(submitData.PenaltyAmount===casedata.PenaltyAmount)

    if (submitdata.PenaltyAmount !== null)
    {
      
      try {
          const response = await api.put("/cops/editcase/"+casedata.CaseId,
          { 
            
            ViolationOf: submitdata.ViolationOf,
            SubSection:submitdata.SubSection,
            ViolationDetails:submitdata.ViolationDetails,
            Section:submitdata.Section,
        
            PenaltyAmount: submitdata.PenaltyAmount,
            PenaltyDetails:submitdata.PenaltyDetails,
            City: submitdata.City,
            Street: submitdata.Street,
            ZIPCode: submitdata.ZIPCode



          }).then(function (response) {
            console.log(response);
            if(typeof response.casedata === "string")
            {
              setSuccess( response.casedata);
            }
            else{
              setSuccess('     Modified Case Successfully');
              // reset();
              // router.back();
              router.push("/cops/all/cases/casehistory/"+casedata.CaseId+"?Uname="+data.Uname);
  
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
    setSuccess('Case Update failed.');
  }

}
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


// -----------------------------------
    return (

    <>
    <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<CopsDashboardLayoutHeader  Title="Modify Case" userdata={data} Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutHeader>

{/* ------------------   Header   --------------- */}



<div className={[`mt-8 ml-10 mr-10 mb-8 p-6`, 
    signupstyles.toss_form_div1].join(' ')}>

<form onSubmit={handleSubmit(onSubmit)} >
<div 
    className={[` z-0 pt-8 mb-10 group`, 
    signupstyles.toss_form_txt1].join(' ')}>
    Modify Case
  </div> 


        <div className="grid md:grid-cols-2 md:gap-10">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="Section" id="Section" defaultValue={casedata.Section}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('Section', { required: true})} />
        
        <label htmlFor="Section" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Section</label>
    </div>
    
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="SubSection" id="SubSection" defaultValue={casedata.SubSection}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('SubSection')} />
       

        <label htmlFor="SubSection" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Sub Section</label>
    </div>
  </div>

  <div className="grid md:grid-cols-2 md:gap-10">
 
     <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="ViolationOf" id="ViolationOf" defaultValue={casedata.ViolationOf}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        placeholder=" " 
        {...register('ViolationOf', { required: true, minLength:3, maxLength:200})} />
        {errors.ViolationOf && errors.ViolationOf.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Case Category</span>
          </p>}
          {errors.ViolationOf && errors.ViolationOf.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}
      {errors.ViolationOf && errors.ViolationOf.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}

        <label htmlFor="ViolationOf" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500
         dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
          top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
           peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
            peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Case Catagory</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="PenaltyAmount" id="PenaltyAmount" defaultValue={casedata.PenaltyAmount}
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
        signupstyles.toss_text_box_design1].join(' ')}
        {...register('PenaltyAmount', { required: true})} />
        {errors.PenaltyAmount && errors.PenaltyAmount.type === "required" && 
        <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
        signupstyles.toss_text_box_error1].join(' ')}>
          <span className="font-medium">Please enter Penalty Amount</span>
          </p>}
        <label htmlFor="PenaltyAmount" 
        className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
         duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
           peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
           peer-focus:scale-75 peer-focus:-translate-y-6`, 
        signupstyles.toss_text_box_label_design1].join(' ')}
        >Penalty Amount</label>
    </div>
    </div>
    
  <div className="grid md:grid-cols-2 md:gap-10">
 
 <div className="relative z-0 w-full mb-6 group">
    <textarea name="ViolationDetails" id="ViolationDetails" cols="50" rows="4" defaultValue={casedata.ViolationDetails}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
    placeholder=" " 
    {...register('ViolationDetails')} />
  

    <label htmlFor="ViolationDetails" 
    className={[`peer-focus:font-medium absolute text-sm text-gray-500
     dark:text-gray-400 duration-300 transform -translate-y-6 scale-75
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-6`, 
    signupstyles.toss_text_box_label_design1].join(' ')}
    >Violation Details</label>
</div>
<div className="relative z-0 w-full mb-6 group">
    <textarea name="PenaltyDetails" id="PenaltyDetails" cols="50" rows="4" defaultValue={casedata.PenaltyDetails}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
    placeholder=" " 
    {...register('PenaltyDetails')} />
   

    <label htmlFor="PenaltyDetails" 
    className={[`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400
     duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
      peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
       peer-focus:scale-75 peer-focus:-translate-y-6`, 
    signupstyles.toss_text_box_label_design1].join(' ')}
    >Penalty Details</label>
</div>
</div>

  
  <div className="grid md:grid-cols-2 md:gap-10">

  <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="City" id="City" defaultValue={casedata.City}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('City', { required: true, maxLength:200, minLength:3})} />
      {errors.City && errors.City.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter City Name</span>
        </p>
      }
      {errors.City && errors.City.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}
      {errors.City && errors.City.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 3 characters and less than 200</span>
        </p>}
      <label htmlFor="City" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >City</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="Street" id="Street" defaultValue={casedata.Street}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('Street')} />
     
      <label htmlFor="Street" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >Street</label>
    </div>
    </div>

    <div className="grid md:grid-cols-2 md:gap-10">
    


    <div className="relative z-0 w-full mb-6 group">
    <input type="text" name="ZIPCode" id="ZIPCode" defaultValue={casedata.ZIPCode}
    className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
     border-0 border-b-2 border-gray-300 appearance-none dark:text-white
      dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
       focus:ring-0 focus:border-blue-600 peer`, 
    signupstyles.toss_text_box_design1].join(' ')}
     placeholder=" " 
     {...register('ZIPCode', { required: true, minLength:4, maxLength:10})} />
      {errors.ZIPCode && errors.ZIPCode.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Zip Code</span>
        </p>
      }
     {errors.ZIPCode && errors.ZIPCode.type === "maxLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 4 characters and less than 10</span>
        </p>}
      {errors.ZIPCode && errors.ZIPCode.type === "minLength" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Length must be at least 4 characters and less than 10</span>
        </p>}
      <label htmlFor="ZIPCode" 
      className={[`peer-focus:font-medium absolute text-sm text-gray-500 
      dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
      top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
       peer-focus:-translate-y-6`, 
      signupstyles.toss_text_box_label_design1].join(' ')}
      >ZIP Code</label>
    </div>
  </div>

  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  editcasestyles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success}</span></p>

 <div className={buttonstyles.form_button_div_design1}>
  <button type="submit" 
    className={[`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
    focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5
    text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`, 
    buttonstyles.form_button_design1].join(' ')}>Submit</button>
</div>

</form>

</div>
</div>

<CopsDashboardLayoutMenu Uname={data.Uname} ProfilePicture={data.ProfilePicture}></CopsDashboardLayoutMenu>

    </>
  )
}

// export async function getServerSideProps(context) {
//     const AccusedUname=context.params.AccusedUname;
//   const response = await axios.get('http://localhost:3000/cops/viewcasebyaccused/'+AccusedUname);
//   const data = await response.data;

// return { props: { data } }
// }


export async function getServerSideProps(context) {

  const tossSession  = context.query;

  //console.log(Uname.data);
var data="";
const response_copsprofile = await api.get('/cops/viewprofile/'+tossSession.Uname)
.then(response_copsprofile => {
  // handle the response
  data =  response_copsprofile.data;

}).catch(error => {
  // handle the error
});


    
    // var casedata="";
    // const response_viewallofficer = await api.get('/cops/viewcasebyid/'+casedata.CaseId)
    // .then(response_viewallofficer => {
     
    //   casedata =  response_viewallofficer.data;
    
    // }).catch(error => {
    //   // handle the error
    // });

  var casedata="";
  const CaseId=context.query.CaseId;
  const response = await api.get('/cops/viewcasebyid/'+CaseId);
  casedata = await response.data;



return { props: { data,casedata } }

}
