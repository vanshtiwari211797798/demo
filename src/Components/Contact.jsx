import React, { useState } from 'react'
import Animation from '../Images/animation.png'
import enq from '../Images/enquery.jpg'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Contact = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    name:'',
    email:'',
    number:'',
    message:''
  })

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value
    setInput({
      ...input,
      [name]:value
    })
  }

  const Submit = async(e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:3000/contact`, {
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(input)
        })

        if(response.status == 200){
          toast.success("Form Submitted Successfully")
          navigate('/')
        }else{
          toast.error("Server Error try again")
          navigate('/')
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
  <>
       <section className="thrd_sect">
          <div className="animate">
            <img src={Animation} alt="Customer enquiry" />
            </div>
            <h3 className='custenq'>CONTACT ME</h3>
            <p className='enqdesc'>Ayodhya Solution is providing future plans, services and internships for you, to attend this Ayodhya Solution services and training sessions you fill the inquiry form and contact for related information.</p>
          <div className="enqform">
            <div className="enqformimg">
              <img src={enq} alt="customer enquiry" />
            </div>
            <div className="enqforminput">
              <form onSubmit={Submit}>
              
              <input type="text" name='name' onChange={handleChange} value={input.name} placeholder='Full Name' required /><br />
              <input type="email" name='email'  onChange={handleChange} value={input.email} placeholder='Enter Your Email' required/><br />
              <input type="number" name='number'  onChange={handleChange} value={input.number} placeholder='Enter Your Number' required/><br />
              <textarea name="message" id="message"  onChange={handleChange} value={input.message} placeholder='Message here...' required></textarea>
              <div className="enqsubmit">
                  <button type='submit'>SUBMIT</button>
              </div>
              </form>
            </div>
          </div>
       </section>
  </>
  )
}

export default Contact