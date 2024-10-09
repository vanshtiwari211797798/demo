import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
const UpdateRegister = () => {
  const navigate = useNavigate()
  const {id} = useParams();

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

  const getonereg = async () => {
    const res = await axios.get(`http://localhost:3000/getoneregdata/${id}`)
    setInput({
      name:res.data.name,
      email:res.data.email,
      number:res.data.number,
      password: res.data.password
    })
  }

  useEffect(() => {
    getonereg();
  },[])

  const Submit = async (e) => {

    e.preventDefault();

    const res =await fetch(`http://localhost:3000/updateregisterdata/${id}`, {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(input)
    }) 
    if(res.status == 200){
      toast.success('Successfully Updated')
      setInput({name:"",email:'',number:'',password:''})
      navigate('/adpnl___eysbydmin')
      
    } else{
      toast.error("Server Error")
      setInput({name:"",email:'',number:'',password:''})
      navigate('/adpnl___eysbydmin')
    }   
      } 

  return (
    <>
        <section className="register">
        <h3>UPDATE REGISTER DATA</h3>
        <form onSubmit={Submit}>
            <input className='inname' type="text" name="name" value={input.name.toUpperCase()} onChange={handleChange} id="name" placeholder='Full Name' required/><br />
            <input type="email" name="email" id="email" value={input.email} onChange={handleChange} placeholder='Enter Email' required/><br />
            <input type="number" name="number" id="number" value={input.number} onChange={handleChange} placeholder='Enter Number' required/><br />
            <input type="password" name="password" id="password" value={input.password.toUpperCase()} onChange={handleChange}  placeholder='Enter Password' required/>  
            <button type="submit">UPDATE</button>
        </form>
      </section>
    </>
  )
}

export default UpdateRegister