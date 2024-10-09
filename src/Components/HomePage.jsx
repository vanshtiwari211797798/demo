import React from 'react'
import ContactLogo from '../Images/contact.png';
import {useNavigate} from 'react-router-dom'
import Courses from './Courses';
import Enquiry from './Enquiry';

//  #008F8C imp color
const HomePage = () => {

  const navigate = useNavigate();

  const StudentLoginNavigate = () => {
    navigate('/student')
  }

  const ContactNavigate = () => {
    navigate('/contact');
  }
  
  return (
   <>
      <div className="stdLogin" onClick={StudentLoginNavigate}>
        <h4>STUDENT LOGIN</h4>
      </div>
      <section className="frst_sect">
          <div className="frst_sect_frst">
              <h1>AYODHYA SOLUTION PVT. LTD. , AYODHYA</h1>
              <p>At Ayodhya Solution, we aim to enhance your coding skills to compete with the fast-changing digital space, and soar your career to new heights. Ayodhya Solution is also your one-stop solution for all your technical problems.</p>
              <div className="contactus">
                <button onClick={ContactNavigate}>CONTACT US</button>
              </div>
          </div>
          <div className="frst_sect_scnd">
            <img src={ContactLogo} alt="Contact us" />
          </div>
      </section>
      <Courses/>
      <Enquiry/>
    
   </>
  )
}

export default HomePage