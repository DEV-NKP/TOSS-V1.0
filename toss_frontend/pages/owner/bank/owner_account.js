import Link from "next/link";
import api from "@/pages/api";
import DashboardLayoutHeader from "../../component/owner_component/owner_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/owner_component/owner_dashboard_layout_menu";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBank, faCircleDollarToSlot, faCircleXmark, faDownload, faIdCard, faPaperPlane, faSearch, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';
import { useForm } from 'react-hook-form';


import ownerPageStyles_icon from '../../../styles/officer_style/officer_viewprofile_style.module.css'
import ownerPageStyles from '../../../styles/shared_style/toss_button_style.module.css'
import styles from '../../../styles/shared_style/account_style.module.css'
import viewallowner_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'





export default function ViewAccount({data, viewdata, bankdata}) {
    

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    const closeVisibility = () => {
      setIsVisible(!isVisible);

      };

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [success, setSuccess] = useState('')
    const onSubmit = async (submitdata) => {
        console.log(submitdata);
    const amount =parseInt(submitdata.Amount);
        try {
            const response = await api.put("/owner/deposit/"+data.AccountNo,
            { 
              Amount:amount
  
            }).then(function (response) {
              console.log(response);
              if(typeof response.data === "string")
              {
                setSuccess( response.data);
              }
              else{
                setSuccess('Amount deposited Successfully');
                reset();
                router.reload();
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

    const [isVisible1, setIsVisible1] = useState(false);
    const toggleVisibility1 = () => {
      setIsVisible1(!isVisible1);
    };

    const closeVisibility1 = () => {
      setIsVisible1(!isVisible1);

      };
    const [success1, setSuccess1] = useState('')
    const onSubmit1 = async (submitdata1) => {
    const amount1 =parseInt(submitdata1.Amount1);
        try {
            const response = await api.put("/owner/withdraw/"+data.AccountNo,
            { 
              Amount:amount1
  
            }).then(function (response) {
              console.log(response);
              if(typeof response.data === "string")
              {
                setSuccess1( response.data);
              }
              else{
                setSuccess1('Amount withdrawn Successfully');
                reset();
                router.reload();
              }
              
            })
            .catch (function (err) {
              console.log(err);
            })
          
  
        }
  
        catch (error) {
            console.log(error);
            
            setSuccess1(error);
        }
  
    
  
    };

    
    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2);
    };

    const closeVisibility2 = () => {
      setIsVisible2(!isVisible2);

      };
    const [success2, setSuccess2] = useState('')
    const onSubmit2 = async (submitdata2) => {
    const amount2 =parseInt(submitdata2.Amount2);
        try {
            const response = await api.put("/owner/payment/"+data.AccountNo,
            { 
              Amount:amount2,
              ReceiverAccountNo:submitdata2.ReceiverAccountNo
  
            }).then(function (response) {
              console.log(response);
              if(typeof response.data === "string")
              {
                setSuccess2( response.data);
              }
              else{
                setSuccess2('Amount sent Successfully');
                reset();
                router.reload();
              }
              
            })
            .catch (function (err) {
              console.log(err);
            })
          
  
        }
  
        catch (error) {
            console.log(error);
            
            setSuccess2(error);
        }
  
    
  
    };


  return (
    <>
    
    <div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="My Account" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewallowner_tablestyle.toss_table_full_container_div].join(' ')}>


    <div className={[`gap-5 grid w-full sm:grid-cols-4`, 
    viewallowner_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label htmlFor="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={viewallowner_tablestyle.account_div}>
        <FontAwesomeIcon icon={faUser}  className={viewallowner_tablestyle.account_div_icon}/><label>User Name</label>
            <br></br>
            <p>{data.Uname}</p>
            
        </div>
        <div  className={viewallowner_tablestyle.account_div}>
        <FontAwesomeIcon icon={faIdCard}  className={viewallowner_tablestyle.account_div_icon}/><label>Email</label>
            <br></br>
            <p className="pl-1">{data.Email}</p>
        </div>
        <div  className={viewallowner_tablestyle.account_div}>
        <FontAwesomeIcon icon={faBank}  className={viewallowner_tablestyle.account_div_icon}/><label>Account Number</label>
            <br></br>
            <p>{data.AccountNo}</p>
        </div>
        <div  className={viewallowner_tablestyle.account_div}>
        <FontAwesomeIcon icon={faCircleDollarToSlot}  className={viewallowner_tablestyle.account_div_icon}/><label>Balance</label>
            <br></br>
            <p className="pl-1">{bankdata.Amount}</p>
        </div>

    </div>

    <div className="gap-5 grid w-full sm:grid-cols-5">
      <div></div>
 <div className={[`pb-5`, 
         viewallowner_tablestyle.toss_table_search].join(' ')}>
        <button onClick={toggleVisibility} className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 w-full max-w-xs font-medium`, 
       ownerPageStyles.excel_download_button].join(' ')} >
    Deposit <FontAwesomeIcon icon={faDownload} className={[` pr-8`,ownerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>

{isVisible &&   
    <div className={[`top-0 left-0 right-0 fixed w-full h-full `, 
    styles.popup_main_div].join(' ')}>
  

<div id="popover-deposit-money" tabindex="-1" 
 className={[`fixed text-center top-0 left-0 right-0 z-50 pt-4 pb-4 pr-6 pl-6 md:inset-0 `, 
 styles.popup_div].join(' ')}>


    <div className="p-2">
        <div className="flex w-full mb-2">
            <span className={styles.popup_div_lebel}>
            Deposit
            </span>
           <span>
            <button onClick={closeVisibility} >
            <FontAwesomeIcon icon={faCircleXmark} className={[` text-right pr-6`,styles.popup_div_icon].join(' ')}/>

            </button>
           </span>
              
        </div>
        <div className={[`p-4 mt-2 mb-0`, 
    styles.toss_login_image_div].join(' ')}>

    <img className={[`h-auto max-w-sm`, 
    styles.toss_login_image].join(' ')} 
    src="/shared_resources/apply_vli.svg" alt="image description"/>

  </div>
  <form onSubmit={handleSubmit(onSubmit)}>

  
    <div className="grid mt-10">
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="Amount" id="Amount" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
         styles.toss_text_box_design1].join(' ')}
      placeholder=" " 
      {...register('Amount', { required: true })} />
      {errors.Amount && errors.Amount.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      styles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Amount</span>
        </p>}
     
     
        <label htmlFor="Amount" 
        className={[`peer-focus:font-medium left-0 absolute text-sm duration-300 
        transform -translate-y-6  peer-focus:scale-80
        top-3 -z-10 origin-[0] peer-focus:left-0`, 
        styles.toss_text_box_label_design1].join(' ')}
        >Amount</label>
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
  styles.button_area].join(' ')} >Submit<FontAwesomeIcon icon={faPaperPlane} className={styles.withdraw_icon}/></button>
</div>
</form>
 
        
    </div>

</div>
</div>
}

<div className={[`pb-5`, 
         viewallowner_tablestyle.toss_table_search].join(' ')}>
        <button onClick={toggleVisibility1}  className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 w-full max-w-xs font-medium`, 
       ownerPageStyles.excel_download_button].join(' ')} >
    Withdraw <FontAwesomeIcon icon={faUpload} className={[` pr-8`,ownerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>


{isVisible1 &&   
    <div className={[`top-0 left-0 right-0 fixed w-full h-full `, 
    styles.popup_main_div].join(' ')}>
  

<div id="popover-deposit-money" tabindex="-1" 
 className={[`fixed text-center top-0 left-0 right-0 z-50 pt-4 pb-4 pr-6 pl-6 md:inset-0 `, 
 styles.popup_div].join(' ')}>


    <div className="p-2">
        <div className="flex w-full mb-2">
            <span className={styles.popup_div_lebel}>
            Withdraw
            </span>
           <span>
            <button onClick={closeVisibility1} >
            <FontAwesomeIcon icon={faCircleXmark} className={[` text-right pr-6`,styles.popup_div_icon].join(' ')}/>

            </button>
           </span>
              
        </div>
        <div className={[`p-4 mt-2 mb-0`, 
    styles.toss_login_image_div].join(' ')}>

    <img className={[`h-auto max-w-sm`, 
    styles.toss_login_image].join(' ')} 
    src="/shared_resources/withdraw.svg" alt="image description"/>

  </div>
  <form onSubmit={handleSubmit(onSubmit1)}>

  
    <div className="grid mt-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="Amount1" id="Amount1" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
         styles.toss_text_box_design1].join(' ')}
      placeholder=" " 
      {...register('Amount1', { required: true })} />
      {errors.Amount1 && errors.Amount1.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      styles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Amount</span>
        </p>}
     
     
        <label htmlFor="Amount1" 
        className={[`peer-focus:font-medium left-0 absolute text-sm duration-300 
        transform -translate-y-6  peer-focus:scale-80
        top-3 -z-10 origin-[0] peer-focus:left-0`, 
        styles.toss_text_box_label_design1].join(' ')}
        >Amount</label>
    </div>
    </div>

        

  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  styles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success1}</span></p>
    <br></br>
   
    <div className={styles.form_button_div_design1}>
  <button type="submit" 
  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
  styles.button_area].join(' ')} >Submit<FontAwesomeIcon icon={faPaperPlane} className={styles.withdraw_icon}/></button>
</div>
</form>
 
        
    </div>

</div>
</div>
}


<div className={[`pb-5`, 
         viewallowner_tablestyle.toss_table_search].join(' ')}>
        <button onClick={toggleVisibility2}   className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 w-full max-w-xs font-medium`, 
       ownerPageStyles.excel_download_button].join(' ')} >
    Send Money <FontAwesomeIcon icon={faUpload} className={[` pr-8`,ownerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>


{isVisible2 &&   
    <div className={[`top-0 left-0 right-0 fixed w-full h-full `, 
    styles.popup_main_div].join(' ')}>
  

<div id="popover-deposit-money" tabindex="-1" 
 className={[`fixed text-center top-0 left-0 right-0 z-50 pt-4 pb-4 pr-6 pl-6 md:inset-0 `, 
 styles.popup_div2].join(' ')}>


    <div className="p-2">
        <div className="flex w-full mb-2">
            <span className={styles.popup_div_lebel2}>
            Send Money
            </span>
           <span>
            <button onClick={closeVisibility2} >
            <FontAwesomeIcon icon={faCircleXmark} className={[` text-right pr-6`,styles.popup_div_icon].join(' ')}/>

            </button>
           </span>
              
        </div>
        <div className={[`p-4 mt-2 mb-0`, 
    styles.toss_login_image_div].join(' ')}>

    <img className={[`h-auto max-w-sm`, 
    styles.toss_login_image].join(' ')} 
    src="/shared_resources/add-vli.svg" alt="image description"/>

  </div>
  <form onSubmit={handleSubmit(onSubmit2)}>

  
    <div className="grid mt-10">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="ReceiverAccountNo" id="ReceiverAccountNo" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
         styles.toss_text_box_design1].join(' ')}
      placeholder=" " 
      {...register('ReceiverAccountNo', { required: true , pattern: /^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/})} />
      {errors.ReceiverAccountNo && errors.ReceiverAccountNo.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      styles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Receiver Account No</span>
        </p>}
        {errors.ReceiverAccountNo && errors.ReceiverAccountNo.type === "pattern" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      signupstyles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please provide a valid value in the format XXXX-XXXX-XXXX-XXXX-XXXX</span>
        </p>}
     
        <label htmlFor="ReceiverAccountNo" 
        className={[`peer-focus:font-medium left-0 absolute text-sm duration-300 
        transform -translate-y-6  peer-focus:scale-80
        top-3 -z-10 origin-[0] peer-focus:left-0`, 
        styles.toss_text_box_label_design1].join(' ')}
        >Receiver Account No.</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="number" name="Amount2" id="Amount2" 
        className={[`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
         border-0 border-b-2 border-gray-300 appearance-none dark:text-white
          dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none
           focus:ring-0 focus:border-blue-600 peer`, 
         styles.toss_text_box_design1].join(' ')}
      placeholder=" " 
      {...register('Amount2', { required: true })} />
      {errors.Amount2 && errors.Amount2.type === "required" && 
      <p className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
      styles.toss_text_box_error1].join(' ')}>
        <span className="font-medium">Please enter Amount</span>
        </p>}
       
     
        <label htmlFor="Amount2" 
        className={[`peer-focus:font-medium left-0 absolute text-sm duration-300 
        transform -translate-y-6  peer-focus:scale-80
        top-3 -z-10 origin-[0] peer-focus:left-0`, 
        styles.toss_text_box_label_design1].join(' ')}
        >Amount</label>
    </div>
    </div>

        

  <p id="filled_success_help" 
  className={[`mt-2 text-xs text-green-600 dark:text-green-400`, 
  styles.toss_text_box_error1].join(' ')}>
    <span className="font-medium">{success2}</span></p>
    <br></br>
   
    <div className={styles.form_button_div_design1}>
  <button type="submit" 
  className={[` items-center justify-center pt-2.5 pb-2.5 pl-10 pr-10 mt-4  w-full max-w-xs font-medium`, 
  styles.button_area].join(' ')} >Submit<FontAwesomeIcon icon={faPaperPlane} className={styles.withdraw_icon}/></button>
</div>
</form>
 
        
    </div>

</div>
</div>
}

<div></div>


</div>

    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewallowner_tablestyle.toss_table_full].join(' ')}>
        <thead>
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Sender Account
                </th>
                <th scope="col" className="px-6 py-3">
                    Receiver Account
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Case ID
                </th>
                
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {viewdata.map(item => (

            <tr key={item.TransactionId} className={[`border-b dark:border-gray-700`, 
            viewallowner_tablestyle.toss_table_data].join(' ')}>
                
                {/* <td scope="row" className="h-100 flex items-center px-6 py-4 text-gray-900">  
                  <Image width="150" height="150"  className="w-10 h-10 rounded-full" src={"http:/localhost:3000/owner/getimage/"+item.ProfilePicture} alt={item.ProfilePicture}/>
                    <div className="pl-3 pr-5">
                        <div className="text-base font-semibold">{item.Uname}</div>
                    </div>  
                </td> */}

                
                <td className="px-6 py-4">
                    {item.SenderAc}
                </td>
                <td className="px-6 py-4">
                {item.ReceiverAc}
                </td>
                <td className="px-6 py-4">
                {item.Amount}
                </td>
                <td className="px-6 py-4">
                {item.Time}
                </td>
                <td className="px-6 py-4">
                {item.CaseId}
                </td>

                  
                <td className="px-6 py-4">
                <Link href={"/owner/all/mytransaction/view/"+item.TransactionId+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View Details</Link>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    
</div>

{/* <CSVLink data={data} headers={headers} filename="Export_COPS.csv">
  <button>Export</button>
</CSVLink> */}

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
const response = await api.get('/owner/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

var viewdata="";
const response_viewallowner = await api.get('/owner/viewtransaction/'+data.AccountNo)
.then(response_viewallowner => {
  // handle the response
  viewdata =  response_viewallowner.data;

}).catch(error => {
  // handle the error
});

var bankdata="";
const response_viewallbank = await api.get('/owner/viewbank/'+data.AccountNo)
.then(response_viewallbank => {
  // handle the response
  bankdata =  response_viewallbank.data;

}).catch(error => {
  // handle the error
});






return { props: { data,viewdata,bankdata } };

}
