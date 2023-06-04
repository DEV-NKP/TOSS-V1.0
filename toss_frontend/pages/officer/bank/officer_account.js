import Link from "next/link";
import DashboardLayoutHeader from "../../component/officer_component/officer_dashboard_layout_header";
import DashboardLayoutMenu from "../../component/officer_component/officer_dashboard_layout_menu";

import Image from 'next/image'

import viewalltransaction_tablestyle from '../../../styles/shared_style/toss_table_style.module.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBank, faCircleDollarToSlot, faCircleXmark, faDollar, faDollarSign, faDownload, faIdBadge, faIdCard, faMoneyBill, faMoneyCheckDollar, faPaperPlane, faSearch, faSquareXmark, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";

import { } from "@fortawesome/free-regular-svg-icons";import api from "@/pages/api";


import styles from '../../../styles/shared_style/account_style.module.css'

import officerPageStyles_icon from '../../../styles/officer_style/officer_viewprofile_style.module.css'
import officerPageStyles from '../../../styles/shared_style/toss_button_style.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';
import { useForm } from 'react-hook-form';


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
    
        try {
            const response = await api.put("/officer/withdraw",
            { 
              Amount:submitdata.Amount
  
            }).then(function (response) {
              console.log(response);
              if(typeof response.data === "string")
              {
                setSuccess( response.data);
              }
              else{
                setSuccess('Amount withdrawn Successfully');
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
  
  return (

    
    <>

<div className="sm:ml-64">

{/* ------------------   Header   --------------- */}

<DashboardLayoutHeader Title="My Transactions" userdata={data}  Uname={data.Uname} ProfilePicture={data.ProfilePicture}></DashboardLayoutHeader>

{/* ------------------   Header   --------------- */}

    <div className={[`relative overflow-x-auto shadow-md sm:rounded-lg`, 
    viewalltransaction_tablestyle.toss_table_full_container_div].join(' ')}>


    <div className={[`gap-5 grid w-full sm:grid-cols-4`, 
    viewalltransaction_tablestyle.toss_table_full_search_div].join(' ')}>

        {/* <label htmlFor="table-search" className="sr-only">Search</label> 
        whitespace-nowrap*/}


        <div className={viewalltransaction_tablestyle.account_div}>
        <FontAwesomeIcon icon={faUser}  className={viewalltransaction_tablestyle.account_div_icon}/><label>User Name</label>
            <br></br>
            <p>{data.Uname}</p>
            
        </div>
        <div  className={viewalltransaction_tablestyle.account_div}>
        <FontAwesomeIcon icon={faIdCard}  className={viewalltransaction_tablestyle.account_div_icon}/><label>Employee ID</label>
            <br></br>
            <p className="pl-1">{data.EmployeeId}</p>
        </div>
        <div  className={viewalltransaction_tablestyle.account_div}>
        <FontAwesomeIcon icon={faBank}  className={viewalltransaction_tablestyle.account_div_icon}/><label>Account Number</label>
            <br></br>
            <p>{data.AccountNo}</p>
        </div>
        <div  className={viewalltransaction_tablestyle.account_div}>
        <FontAwesomeIcon icon={faCircleDollarToSlot}  className={viewalltransaction_tablestyle.account_div_icon}/><label>Balance</label>
            <br></br>
            <p className="pl-1">{bankdata.Amount}</p>
        </div>

    </div>

    <div className="gap-10 grid w-full sm:grid-cols-3">
      <div></div>
 
<div className={[`pb-5`, 
         viewalltransaction_tablestyle.toss_table_search].join(' ')}>
        <button onClick={toggleVisibility} className={[` items-center pt-2.5 pb-2.5 pl-10 pr-2 w-full max-w-xs font-medium`, 
       officerPageStyles.excel_download_button].join(' ')} >
    Withdraw <FontAwesomeIcon icon={faUpload} className={[` pr-8`,officerPageStyles_icon.profile_icon].join(' ')}/>
</button>
</div>
<div></div>
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
            Withdraw
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
    src="/shared_resources/withdraw.svg" alt="image description"/>

  </div>
  <form onSubmit={handleSubmit(onSubmit)}>

  
    <div className="grid mt-6">
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


    <table className={[`w-full text-sm text-left text-gray-500 dark:text-gray-400 whitespace-wrap`, 
    viewalltransaction_tablestyle.toss_table_full].join(' ')}>
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
            viewalltransaction_tablestyle.toss_table_data].join(' ')}>
                
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
                <Link href={"/officer/all/transaction/view/"+item.TransactionId+"?Uname="+data.Uname} className="font-medium text-teal-300 dark:text-blue-500 hover:underline">View Transaction</Link>
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
const response = await api.get('/officer/viewprofile/'+tossSession.Uname)
.then(response => {
  // handle the response
   data =  response.data;

}).catch(error => {
  // handle the error
});

var viewdata="";
const response_viewallofficer = await api.get('/officer/searchtransactionbyaccount/'+data.AccountNo)
.then(response_viewallofficer => {
  // handle the response
  viewdata =  response_viewallofficer.data;

}).catch(error => {
  // handle the error
});

var bankdata="";
const response_viewallbank = await api.get('/officer/getofficeraccount')
.then(response_viewallbank => {
  // handle the response
  bankdata =  response_viewallbank.data;

}).catch(error => {
  // handle the error
});






return { props: { data,viewdata,bankdata } };

}
