import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
        ...input,
        [name]:value
    })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/adminlogin`, {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(input)
            })

            if(response.status == 200){
                toast.success("Login Successfully")
               navigate('/adpnl___eysbydmin')
            }else if(response.status == 401){
                toast.error("Invalid username or Password")
                setInput({email:'',password:''})
            }
           else{
                toast.error("Server Error try again")
                setInput({email:'',password:''})

            }
        } catch (error) {
          console.log(error)  
        }
    }
  return (
    <>
         <section className="register">
        <h3>ADMIN LOGIN </h3>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} value={input.email} id="email"  placeholder='Enter userName' required/><br />
            <input type="password" name="password"  onChange={handleChange} value={input.password} id="password"  placeholder='Enter Password' required/>  
            <button type="submit">LOGIN</button>
        </form>
      </section>
    </>
  )
}

export default AdminLogin