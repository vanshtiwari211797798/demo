import React, { useState } from 'react'
import Animation from '../Images/animation.png'
import enq from '../Images/enquery.jpg'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Enquiry = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    name:'',
    email:'',
    number:'',
    message:''
  })

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]:value
    })
  }

  const Submit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:3000/enquiry`,{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(input)
        })

        if(response.status == 200){
          toast.success("Form Submitted Successfully")
          setInput({name:'', email:'', number:'', message:''})
          navigate('/')
        }else{
          toast.error("Server Error try again")
          setInput({name:'', email:'', number:'', message:''})
          navigate('/')
        }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
       <section className="thrd_sect">
          <div className="animate">
            <img src={Animation} alt="Customer enquiry" />
            </div>
            <h3 className='custenq'>CUSTOMER ENQUIRY</h3>
            <p className='enqdesc'>Ayodhya Solution is providing future plans, services and internships for you, to attend this Ayodhya Solution services and training sessions you fill the inquiry form and contact for related information.</p>
          <div className="enqform">
            <div className="enqformimg">
              <img src={enq} alt="customer enquiry" />
            </div>
            <div className="enqforminput">
              <form onSubmit={Submit}>
              
              <input type="text" name='name' value={input.name} onChange={handleChange} placeholder='Full Name' required /><br />
              <input type="email" name='email' value={input.email} onChange={handleChange} placeholder='Enter Your Email' required/><br />
              <input type="number" name='number' value={input.number} onChange={handleChange} placeholder='Enter Your Number' required/><br />
              <textarea name="message" id="message" value={input.message} onChange={handleChange} placeholder='Message here...' required></textarea>
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

export default Enquiry