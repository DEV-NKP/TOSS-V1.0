import Link from "next/link";
import HomeLayoutHeader from "./component/home_layout_header";


import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'

import pagestyles from '../styles/home_style/home-menu-style.module.css'
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'
import homestyles from '../styles/home_style/homepage_style.module.css' 
import api from './api';
export default function Home() {

    const response = api.post("/toss/insertdefaultadmin");


  return (
    <>

<div>
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



    <div className={homestyles.content}>

      <h1 className={homestyles.main_title}>TOSS</h1>
      <h3 className={homestyles.sub_heading}><span>Simplicity is the key for connectivity</span></h3>

      <div >
   
        <br/>
        <br/>
        <Link className={homestyles.button_signup} href="/signup">Join Us Now</Link>


      </div>

      <div className="available">
        <h4 className={homestyles.available_title}>Available on: </h4>
        
        <Link href="https://www.facebook.com/niloypaul.nkp/">
          <FontAwesomeIcon icon={faFacebook}className={homestyles.icons} /></Link> 

        <Link href="https://www.instagram.com/niloy_kanti_paul/">
          <FontAwesomeIcon icon={faInstagram}className={homestyles.icons} /> </Link>
        <Link href="https://www.linkedin.com/in/niloy-kanti-paul-5543181ab/">
          <FontAwesomeIcon icon={faLinkedin}className={homestyles.icons} /></Link> 
        <Link href="https://twitter.com/Niloy_Paul_">
          <FontAwesomeIcon icon={faTwitter}className={homestyles.icons} /></Link> 

      </div>
    
    
    </div>      
  </div>
    </>
  )
}
