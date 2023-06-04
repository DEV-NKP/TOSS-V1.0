import Link from "next/link";
import menustyles from '../../styles/home_style/home-menu-style.module.css'

import { Navbar } from "flowbite-react";
export default function HomeLayoutHeader() {
  return (
    <>
<Navbar
    fluid={true}
    rounded={true}
    className={menustyles.toss_home_nav}
  >
    <Navbar.Brand href="/">
      <img
        src="/shared_resources/logo.png"
        className={[`mr-3 h-6 sm:h-9`, 
        menustyles.logo].join(' ')}

        alt="Flowbite Logo"
      />
      <span 
     className={[`self-center whitespace-nowrap`, 
     menustyles.toss].join(' ')}
>
        TOSS
        <br/>
        <span 
        className={[`self-center whitespace-nowrap`, 
        menustyles.toss_full].join(' ')}>
        Traffic Operation and Surveillance System
      </span>
      </span>
      
      
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className={menustyles.home_nav_colap}>
      <Navbar.Link
        href="/"
        className={menustyles.home_nav_menu}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/about"
      className={menustyles.home_nav_menu}>
        About
      </Navbar.Link>
      <Navbar.Link href="/team"
      className={menustyles.home_nav_menu}>
        Meet The Team
      </Navbar.Link>
      <Navbar.Link href="/contact"
      className={menustyles.home_nav_menu}>
        Contact
      </Navbar.Link>
     
    </Navbar.Collapse>


     <Navbar.Collapse>
      
       <Navbar.Link href="/signup"
      className={menustyles.home_nav_menu_reg}>
        Register
      </Navbar.Link>

      <Navbar.Link href="/login"
      className={menustyles.home_nav_menu_login}>
        LogIn
      </Navbar.Link>
      
     
       </Navbar.Collapse>
       
  </Navbar>



    </>
  )
}
