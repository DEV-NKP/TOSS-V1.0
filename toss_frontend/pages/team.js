import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope,faSheetPlastic,faPenToSquare,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

import HomeLayoutHeader from "./component/home_layout_header";
import pagestyles from '../styles/home_style/home-menu-style.module.css'
import styles from '../styles/home_style/teampage_style.module.css'
import { faFacebook, faGithub, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import backgroundstyles from '../styles/home_style/background_animation_style.module.css'
import Image from 'next/image'

export default function Team() {
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


<div className={[`pl-6 pr-6 mb-4 mt-20`, 
    styles.team].join(' ')}>

    <div className={styles.center}>
        <p><span className={styles.text1}>meet </span><span className={styles.text2}>OUR TEAM</span></p>

    </div>
    <div className={styles.team_content}>
    <div className="grid grid-cols-4 gap-4 mb-6 mt-2 ml-2"> 
    <div className={[`max-w-350 pl-6 pr-6 pb-4 pt-6`, 
    styles.box].join(' ')}>
            <div className={styles.img_content}>
                <Image width="250" height="300" className={styles.img}src="/home_resources/niloy.jpg"/>
                <div className={styles.up_rec}></div>
            </div>
            <h4 className={styles.text3}>Niloy Kanti Paul</h4>
            <h5 className={styles.text4}>Department of Computer Science and Engineering</h5>
            <h5 className={styles.text4}>American International University-Bangladesh</h5> 
                <div className={styles.team_icon_social_div}>
                <FontAwesomeIcon icon={faGoogle}className={styles.icon} /> 
                <FontAwesomeIcon icon={faGithub}className={styles.icon} /> 
                <FontAwesomeIcon icon={faFacebook}className={styles.icon} /> 
                <FontAwesomeIcon icon={faInstagram}className={styles.icon} /> 
            </div>
        </div>

        <div className={[`max-w-sm pl-6 pr-6 pb-4 pt-6`, 
    styles.box].join(' ')}>
            <div className={styles.img_content}>
                <Image width="250" height="300" className={styles.img}src="/home_resources/dipa.jpg"/>
                <div className={styles.up_rec}></div>
            </div>
            <h4 className={styles.text3}>Dipanwita Saha</h4>
            <h5 className={styles.text4}>Department of Computer Science and Engineering</h5>
            <h5 className={styles.text4}>American International University-Bangladesh</h5> 
                <div className={styles.team_icon_social_div}>
                <FontAwesomeIcon icon={faGoogle}className={styles.icon} /> 
                <FontAwesomeIcon icon={faGithub}className={styles.icon} /> 
                <FontAwesomeIcon icon={faFacebook}className={styles.icon} /> 
                <FontAwesomeIcon icon={faInstagram}className={styles.icon} /> 
            </div>
        </div>


        <div className={[`max-w-sm pl-6 pr-6 pb-4 pt-6`, 
    styles.box].join(' ')}>
                <div className={styles.img_content}>
                <Image width="250" height="300"  className={styles.img}src="/home_resources/kaushik.jpg"/>
                <div className={styles.up_rec}></div>
            </div>
            <h4 className={styles.text3}>Kaushik Biswas</h4>
            <h5 className={styles.text4}>Department of Computer Science and Engineering</h5>
            <h5 className={styles.text4}>American International University-Bangladesh</h5> 
                <div className={styles.team_icon_social_div}>
                <FontAwesomeIcon icon={faGoogle}className={styles.icon} /> 
                <FontAwesomeIcon icon={faGithub}className={styles.icon} /> 
                <FontAwesomeIcon icon={faFacebook}className={styles.icon} /> 
                <FontAwesomeIcon icon={faInstagram}className={styles.icon} /> 
            </div>
        </div>

        <div className={[`max-w-sm pl-6 pr-6 pb-4 pt-6`, 
    styles.box].join(' ')}>
                <div className={styles.img_content}>
                <Image width="250" height="300" className={styles.img}src="/home_resources/fahim.jpg"/>
                <div className={styles.up_rec}></div>
            </div>
            <h4 className={styles.text3}>Fahim Hasan Nilay</h4>
            <h5 className={styles.text4}>Department of Computer Science and Engineering</h5>
            <h5 className={styles.text4}>American International University-Bangladesh</h5> 
                <div className={styles.team_icon_social_div}>
                <FontAwesomeIcon icon={faGoogle}className={styles.icon} /> 
                <FontAwesomeIcon icon={faGithub}className={styles.icon} /> 
                <FontAwesomeIcon icon={faFacebook}className={styles.icon} /> 
                <FontAwesomeIcon icon={faInstagram}className={styles.icon} /> 
            </div>
        </div>

    </div>
    </div>
</div>

 
    </>
  )
}
