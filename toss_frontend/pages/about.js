import Link from "next/link";
import HomeLayoutHeader from "./component/home_layout_header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCab,faCar,faCap, faCircleExclamation, faCrown, faFlag, faPaperPlane, faUserTie, faUsers, faBriefcase, faKey} from '@fortawesome/free-solid-svg-icons'



import pagestyles from '../styles/home_style/home-menu-style.module.css'
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'
import aboutpagestyles from '../styles/home_style/aboutpage_style.module.css'



export default function About() {
  return (
    <>
<div className={pagestyles.body}>
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



<div className={[`grid md:grid-cols-2 md:gap-0 mb-6 mt-10`, 
aboutpagestyles.toss_about_main_div1].join(' ')}>

<p className={[`max-w-160 text-3xl font-semibold leading-normal text-gray-900 dark:text-white`, 
aboutpagestyles.toss_about_main].join(' ')}>
  <span className={aboutpagestyles.toss_about_main_span}>Confusion about TOSS?</span> Here's how TOSS is going to help you in your daily transportation system</p>

  {/* <h1 className={aboutpagestyles.main1}>Here's how TOSS is going to help you in your daily transportation system...</h1> */}

  <p className={aboutpagestyles.sub1}>Traffic Operation and Surveillance System (TOSS) is basically a system which will ensure you of having a simple
    and secured road transportation and to avoid the road violances throughout the city.</p>
</div>

<p className={aboutpagestyles.sub2}>" This is how TOSS works "</p>

<hr  className={[`w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700`, 
aboutpagestyles.toss_about_hr].join(' ')}/>


<div  className={[`grid md:grid-cols-4 gap-2`, 
    aboutpagestyles.toss_main_cards].join(' ')}>
<div></div>
<div 
  className={[`max-w-sm  pl-6 pr-6 pb-4 pt-6 mt-4 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
        <div className="text-center flex-col"><FontAwesomeIcon icon={faPaperPlane} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Why TOSS?</h5>
        <p className={[` text-justify font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>TOSS will help you to keep a track of your personal vehicles legal engagements and will notify
        you about what you need to do on that scenario.</p>
    
</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 mt-4 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faUsers} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Users of TOSS</h5>
        <p className={[` text-justify font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>TOSS is basically designed with 4 major users: Admin, Officer, COPS and Owner.</p>
    
</div>

</div>


<div  className={[`grid md:grid-cols-4 gap-2`, 
    aboutpagestyles.toss_main_cards].join(' ')}>
<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faCrown} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col  tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Admin</h5>
        <p className={[` text-justify font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>In TOSS, there is an Admin to maintain the system and operate all kind of administrative works.
        Any kind of logging informations and other monitoring activities are observed by the Admin.</p>
    
</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faUserTie} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Officer</h5>
        <p className={[`text-justify  font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>If you are an Official member, you will get the chance to create some vehicle license and modify or delete the license
        informations. Besides that, some major works are assignedfor the officers of this system.</p>
    
</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faCar} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >COPS</h5>
        <p className={[`text-justify  font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>COPS can create any cases against an user or owner of the system. He/she might be able to view some of the user informations
        also.</p>
    
</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faBriefcase} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col justify-center tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Owner</h5>
        <p className={[`text-justify  font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>An owner need to signup first to make a move into the suyystem. He/she can apply for the available license no, pay the penalty
        against his case, view the informations etc.</p>
    
</div>

</div>


<div  className={[`grid md:grid-cols-4 gap-2`, 
    aboutpagestyles.toss_main_cards].join(' ')}>
  
<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faBuilding} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Bank</h5>
        <p className={[`text-justify  font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>A secured but simple and user friendly banking system is introduced in the system. There is options for owner to deposit or
        withdraw any amount from the system as well. All the transactions will be maintained from the system.</p>
    
</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faCircleExclamation} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Violation Detected!!!</h5>
        <p className={[` text-justify font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>If any user violates any traffic rules, a case will be registered through the COPS of the system. After a limited time, the
        license of the user will be banned if he/she doesn't pay the penalty amount.</p>
    
</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faKey} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Forgot Password??</h5>
        <p className={[`text-justify  font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>No worries. TOSS has a two-factor authentication system for retrieving your password.</p>
    

</div>

<div 
  className={[`max-w-sm pl-6 pr-6 pb-4 pt-6 bg-white border border-gray-200 rounded-lg 
    shadow dark:bg-gray-800 dark:border-gray-700`, 
    aboutpagestyles.toss_about_div_cards].join(' ')}>
       <div className="text-center flex-col"><FontAwesomeIcon icon={faFlag} className={aboutpagestyles.toss_about_card_icon}/></div>
        <hr className={aboutpagestyles.toss_about_card_line}/>
        <h5
        className={[`mb-4 pt-2 text-2xl font-semibold text-center flex-col tracking-tight text-gray-900
        dark:text-white`, 
        aboutpagestyles.toss_about_card_title].join(' ')}
         >Having Issues?</h5>
        <p className={[`text-justify  font-normal text-gray-500 dark:text-gray-400`, 
        aboutpagestyles.toss_about_card_description].join(' ')}>User of the system can directly report to the admin of the system from the Report section.</p>
    

</div>

</div>


  </div>

    </>
  )
}
