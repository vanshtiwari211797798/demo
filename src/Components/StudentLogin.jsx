import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {

  const navigate  = useNavigate();

  const [input, setInput] = useState({
    email:'',
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
        const response = await fetch(`http://localhost:3000/stdlogin`, {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(input)
        })

        if(response.status == 200){
          toast.success("You have Login Successfully")
          navigate('/')
        }else if(response.status == 401){
          toast.info("You are Not Register, Please Register")
          navigate('/register')
        } else if(response.status == 202){
          toast.info("Invalid Email or Password")
          setInput({email:'', password:''})
        } else if(response.status == 201){
            toast.error("You have allready login")
            navigate('/')
        }else{
          toast.error("Server Error")
          navigate('/')
        }
      } catch (error) {
        console.error(error)
      }
  }

  return (
    <>
         <section className="register">
        <h3>STUDENT LOGIN HERE</h3>
        <form onSubmit={Submit}>
            <input type="email" name="email" value={input.email} onChange={handleChange} id="email"  placeholder='Enter Your Email' required/><br />
            <input type="password" name="password" value={input.password}  onChange={handleChange} id="password"  placeholder='Enter Password' required/>  
            <button type="submit">LOGIN</button>
        </form>
      </section>
    </>
  )
}

export default StudentLogin