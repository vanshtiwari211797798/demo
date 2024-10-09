import React from 'react'
import logo from '../Images/logo.jpg'
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube,  FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
   <>
        <footer className="footer">
        <div className="footer_sect">
          <div className="footer_sect_frst">
            <img src={logo} alt="Ayodhya Solution pvt ltd" />
            <p>Ayodhya Solution boosts your coding career by providing top-notch courses in web development, web design, and app development.</p>
          </div>
          <div className="footer_sect_scnd">
            <h3>Contact Us</h3><br /><br />
             <Link className='footerlink' to={'https://www.youtube.com/channel/UC_aXxFxoor6RbRkUmZ40MVw'}> <FaYoutube/> YouTube</Link><br />
             <Link className='footerlink' to={'https://www.facebook.com/index.php#!/'}><BiLogoFacebook/> FaceBook</Link><br />
             <Link className='footerlink' to={'https://www.linkedin.com/in/vansh-tiwari-130b7626b/'}><FaLinkedinIn/> LinkeDin</Link><br />
             <Link className='footerlink' to={'https://www.instagram.com/vansh_tiwari_ayodhya/?hl=en'}><FaInstagram/> Instagram</Link><br />
          </div>
          <div className="footer_sect_thrd">
          <h3>Quick Links</h3><br /><br />
             <Link className='footerlink' to={'/contact'}>Contact</Link><br />
             <Link className='footerlink' to={'/enquiry'}> Enquiry</Link><br />
             <Link className='footerlink' to={'/register'}> Registration</Link><br />
             <Link className='footerlink' to={'/courses'}>Courses</Link><br />
          </div>
          <div className="footer_sect_frth">
          <h3>Find Us</h3><br /><br /><br />
          <Link className='footerlink' to={'/'}>Address : Raipur, Ayodhya U.P. 224001</Link><br /><br />
            
          <Link to={'/'}><IoMailOutline style={{color:"#fff"}}/></Link> 
          <Link to={'mailto:vanshtiwari9091@gmail.com'} style={{color:"#fff"}} className='mail_call'> vanshtiwari9091@gmail.com</Link><br />
          <Link to={'/'}><MdOutlinePhoneIphone style={{color:"#fff"}}/></Link> 
                    <Link to={'tel:+91 8303280240'} style={{color:"#fff"}} className='mail_call'> +91 - 8303280240</Link>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; Copyright 2024, All Rights Reserved Ayodhya Solution</p>
        </div>
      </footer>
   </>
  )
}

export default Footer