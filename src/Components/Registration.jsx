import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const Registration = () => {
const navigate = useNavigate();
  const [input, setInput] = useState({
    name:'',
    email:'',
    number:'',
    password:''
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
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:3000/register`, {
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(input)
      })

      if(response.status == 200){
        toast.success("You have Register Successfully")
        setInput({name:"", email:"", number:"", password:""})
        navigate('/')
      }else if(response.status == 401){
        toast.info("You have allready Registered, Please login")
        setInput({name:"", email:"", number:"", password:""})
        navigate('/student')
      }else{
        toast.error("Server Error try again")
        setInput({name:"", email:"", number:"", password:""})
        navigate('/')
      }
    } catch (error) {
      console.error("error from registration frontend", error)
    }
  }

  return (
   <>
      <section className="register">
        <h3>REGISTRATION HERE</h3>
        <form onSubmit={Submit}>
            <input className='inname' type="text" name="name" value={input.name} onChange={handleChange} id="name" placeholder='Full Name' required/><br />
            <input type="email" name="email" id="email" value={input.email} onChange={handleChange} placeholder='Enter Your Email' required/><br />
            <input type="number" name="number" id="number" value={input.number} onChange={handleChange} placeholder='Enter Number' required/><br />
            <input type="password" name="password" id="password" value={input.password} onChange={handleChange}  placeholder='Enter Any Password' required/>  
            <button type="submit">REGISTER</button>
        </form>
      </section>
   </>
  )
}

export default Registration