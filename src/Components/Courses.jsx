import React, { useEffect, useState } from 'react'
import Animation from '../Images/animation.png'
import Frontend from '../Images/frontend.png'
// import Backend from '../Images/backend.png'
// import AppDevelopement from '../Images/App-devlopment.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Courses = () => {

  const [courses, setcourses] = useState([])
  const CoursesNavigate = useNavigate();

 const Navigate = () => {
  CoursesNavigate('/courses')
 }

  const showcourses = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/showcoursesui`)
      setcourses(res.data)

      
    } catch (error) {
      console.error(error)
    }
    showcourses();
  }

  useEffect(() => {
    showcourses();
  },[])

  return (
 <>
    <section className="scnd_sect">
      <div className="animateimg">
      <img src={Animation} className='animation' alt="Our Courses" />
      </div>
        <h4>OUR COURSES</h4><br /><br />
      <div className="ourcourses">
        {
          courses.map((course, i) => {
            return(
              <div className="ourcourses-frst" key={i}>
              <img src={Frontend} alt="Frontend Developement" />
              <h5>{course.title}</h5>
              <p>{course.desc}</p>
            </div>
            )
          
          })
        }
     
          {/* <div className="ourcourses-scnd">
          <img src={Backend} alt="Backend Developement" />
          <h5>BACKEND DEVELOPEMENT</h5>
          <p>Development of the server-side of a website which mainly focuses on website architecture, scripting and communication with databases.</p>
          </div>
          <div className="ourcourses-thrd">
          <img src={AppDevelopement} alt="App Developement" />
          <h5>APP DEVELOPEMENT</h5>
          <p>Development of computer applications of different needs and complexities for their use on devices such as Tablet, Smartphone and other mobile devices.</p>
          </div> */}
         
      </div>
      <div className="contact_btn">
        <button onClick={Navigate} className="btn">VIEW MORE</button>
      </div>
    </section>
 </>
  )
}

export default Courses