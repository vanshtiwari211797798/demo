import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube,  FaInstagram } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import logo from '../Images/logo.jpg'


const Navbar = () => {



    
  return (
    <>  
        <nav className="navbar">
            <div className="navbar_first">
           
                <NavLink to={'https://www.facebook.com/index.php#!/'}><BiLogoFacebook style={{color:"#000", border:"1px solid"}}/></NavLink>
                <NavLink to={'https://www.linkedin.com/in/vansh-tiwari-130b7626b/'}><FaLinkedinIn style={{color:"#000", border:"1px solid"}} /></NavLink>
                <NavLink to={'https://www.youtube.com/channel/UC_aXxFxoor6RbRkUmZ40MVw'}><FaYoutube style={{color:"#000", border:"1px solid"}} /></NavLink>
                <NavLink to={'https://www.instagram.com/vansh_tiwari_ayodhya/?hl=en'}>< FaInstagram style={{color:"#000", border:"1px solid"}} /></NavLink>
          
            </div>
            <div className="navbar_second">
               
                     <NavLink to={'/'}><IoMailOutline style={{color:"#000"}}/></NavLink> 
                    <NavLink to={'mailto:vanshtiwari9091@gmail.com'} className='mail_call'> vanshtiwari9091@gmail.com</NavLink>
              
            </div>
            <div className="navbar_third">
                
           
                     <NavLink to={'/'}><MdOutlinePhoneIphone style={{color:"#000"}}/></NavLink> 
                    <NavLink to={'tel:+91 8303280240'} className='mail_call'> +91 - 8303280240</NavLink>
          
            </div>
          
        </nav>
        <div className="header">
                <div className="header_first">
                    <img src={logo} alt="Ayodhys solution pvt ltd"  />
                </div>
                <div className="header_second">
                    <ul>
                       
                           <li><NavLink  className='navigator' to={'/'}>HOME</NavLink></li> 
                            <li><NavLink className='navigator' to={'/enquiry'}>ENQUIRY</NavLink></li>
                            <li><NavLink className='navigator' to={'/contact'}>CONTACT US</NavLink></li>
                            <li><NavLink className='navigator' to={'/register'}>REGISTRATION</NavLink></li>
                            <li><NavLink className='navigator' to={'/student'}>STUDENT LOGIN</NavLink></li>
                            <li><NavLink className='navigator' to={'/courses'}>COURSES</NavLink></li>
                            <li><NavLink className='navigator' to={'/gallery'}>GALLERY</NavLink></li>
                      
                    </ul>
                </div>
            </div>
    </>
  )
}

export default Navbar