import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCourses = () => {

    const navigate = useNavigate();

    const [course, setcourses] = useState({
        title:'',
        desc:''
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setcourses({
            ...course,
            [name]:value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()
       
        try {
            const res = await fetch(`http://localhost:3000/addcourses__admin`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(course)
            })

            if(res.status == 200){
                toast.success("Added Successfully")
                setcourses({title:'', desc:''})
                navigate('/adpnl___eysbydmin')
            }else{
                toast.error("Server Error")
                setcourses({title:'', desc:''})
                navigate('/adpnl___eysbydmin')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
   <>
         <section className="register">
        <h3>ADD COURSE</h3>
        <form onSubmit={handlesubmit}>
            <input type="text" name="title" onChange={handleChange} value={course.title.toUpperCase()} id="title"  placeholder='Enter Course Title' required/><br />
            <input type="text" name="desc" onChange={handleChange} value={course.desc.toLowerCase()}  id="description"  placeholder='Enter Course Descriptions' required/>  
            <button type="submit">ADD</button>
        </form>
      </section>
   </>
  )
}

export default AddCourses