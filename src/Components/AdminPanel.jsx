import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bgimg from '../Images/logo2.png'
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify'
const AdminPanel = () => {


  // for registration
  const [users, setUserData] = useState([])

  //for enquiry
  const [enq, setenq] = useState([])

  // for contact
  const [con, setcon] = useState([])

  //for login
  const [login, setlogin] = useState([])

  //for courses
  const [courses, setcourses] = useState([])

  const regRes = async() => {
    await axios.get('http://localhost:3000/regalldataread')
    .then(users => setUserData(users.data))
    .catch(err => console.log(err))
    regRes();
  }
  
  const enqRes = async() => {
   await axios.get('http://localhost:3000/enqalldataread')
    .then(enq => setenq(enq.data))
    .catch(err => console.log(err))
    enqRes();
  }

  const conRes = async() =>{
    await axios.get('http://localhost:3000/conalldataread')
    .then(con => setcon(con.data))
    .catch(err => console.log(err))
    conRes();
  }

  const loginRes = async () => {
      await axios.get('http://localhost:3000/loginalldataread')
      .then((login) => setlogin(login.data))
      .catch((err) => console.log(err))
      loginRes();
  }

  const showcourses = async () => {
    await axios.get(`http://localhost:3000/showcoursesui`)
    .then((res) => setcourses(res.data))
    .catch((err) => console.error(err))
    showcourses();
  }

  useEffect(() => {
    regRes();
    enqRes();
    conRes();
    loginRes();
    showcourses();
  },[])

  const deleteregdata = async (regid) => {
    try {

      let conf = window.confirm("Are you sure to delete this Data");

      if(conf){
        const res = await fetch(`http://localhost:3000/deleteregisterdata/${regid}`, {
          method:"DELETE"
        })
      
     
        if(res.status == 200){
          toast.success("Deleted Successfully")
        }else{
          toast.error("Server Error")
        }
      }else{
        toast.info("Please allow and try again")
      }

    } catch (error) {
      console.error(error)
    }
  }

  const deletelogindata = async (dellogin) => {
    try {

      let conf = window.confirm("Are you sure to delete this data")

      if(conf){
        const res = await fetch(`http://localhost:3000/deletelogindata/${dellogin}`, {
          method:"DELETE"
      }) 

      if(res.status == 200){
        toast.success("Deleted Successfully")
      }else{
        toast.error("Server Error")
      }
      }else{
        toast.info("Please allow and try again")
      }
      
    } catch (error) {
      console.error(error)
    }
  }
  

  const deleteenqdata =async (delenq) => {
    try {

      let conf = window.confirm("Are you sure to delete this data")

      if(conf){
        const res = await fetch(`http://localhost:3000/deleteenqdata/${delenq}`, {
          method:"DELETE"
        })
  
        if(res.status == 200){
          toast.success("Deleted Successfully")
        }else{
          toast.error("Server Error")
        }
      }else{
        toast.info("Please allow and try again")
      }
     
    } catch (error) {
      console.error(error)
    }
  }


  const deletecontdata = async(delcon) => {
      try {

        let conf = window.confirm("Are you sure to delete this data");

        if(conf){
          const res = await fetch(`http://localhost:3000/deletecondata/${delcon}`, {
            method:"DELETE"
          })
  
          if(res.status == 200){
            toast.success("Deleted Successfully")
          }else{
            toast.error("Server Error")
          }
        }else{
          toast.info("Please allow and try again")
        }
        
      } catch (error) {
        console.error(error)
      }
  }


  const deletecourses = async (deletecourse) => {
    try {

      let conf = window.confirm("Are you sure, Delete this data");

      if(conf){
        const res = await fetch(`http://localhost:3000/deletecourses/${deletecourse}`, {
          method:"DELETE"
          
        })
        if(res.status == 200){
          toast.success("Deleted Successfully")
        }else{
          toast.error("Server Error")
        }
      }else{
        toast.info("Please allow and try again!")
      }

    } catch (error) {
      console.error(error)
    }
  }
  
  return (
   <>
   <br />
    <h2 className='apnl'>ADMIN PANEL</h2><br />
    <nav className="navadmin">
      <Link className='admnavgate' to={'/adds____courses'}>ADD COURSE</Link>
   </nav>
   <div className="imgouter">  
   <img src={bgimg} alt="ayodhya solution admin panel image" className="bglogo" />
   </div>
   <div className="adouter">
        <h2 className="regdetail"> REGISTERED STUDENTS</h2>
        <section className="adminpanel">
            <table border={2} style={{width:"80%"}}>
              <thead>
                <tr>
                  <th>S.R. NO.</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>NUMBER</th>
                  <th>PASSWORD </th>
                  <th>UPDATE </th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                  {
                    users.map((i, n) => {
                      return(
                      <tr key={n}>
                      <td style={{textAlign:"center"}}>{n + 1}</td>
                      <td style={{textAlign:"center"}}>{i.name}</td>
                      <td style={{textAlign:"center"}}>{i.email}</td>
                      <td style={{textAlign:"center"}}>{i.number}</td>
                      <td style={{textAlign:"center"}}>{i.password}</td>
                      <td style={{textAlign:"center"}}><Link className='admnavgates' to={`/updateregisterdata/` +i._id}>EDIT</Link></td>
                      <td style={{textAlign:"center"}}><button className='admnavgates'style={{border:"none", backgroundColor:"none",cursor:"pointer", color:"red"}} onClick={() => deleteregdata(i._id)}>DELETE</button></td>


                    </tr>
                      )
                    })
                  }
              </tbody>
            </table>
        </section>

  {/* Login details */}

  <h2 className="regdetail">LOGIN STUDENTS</h2>
        <section className="adminpanel">
            <table border={2} style={{width:"80%"}}>
              <thead>
                <tr>
                  <th>S.R. NO.</th>
                  <th>EMAIL</th>
                  <th>PASSWORD</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                  {
                    login.map((i, n) => {
                      return(
                      <tr key={n}>
                      <td style={{textAlign:"center"}}>{n + 1}</td>
                      <td style={{textAlign:"center"}}>{i.email}</td>
                      <td style={{textAlign:"center"}}>{i.password}</td>
                      <td style={{textAlign:"center"}}><button className='admnavgates'style={{border:"none", backgroundColor:"none",cursor:"pointer", color:"red"}} onClick={() => deletelogindata(i._id)}>DELETE</button></td>
                    </tr>
                      )
                    })
                  }
              </tbody>
            </table>
        </section>

          {/* Enquiry Admin panel */}


        <h2 className="regdetail">ENQUIRY DATA</h2>
        <section className="adminpanel">
            <table border={2} style={{width:"80%"}}>
              <thead>
                <tr>
                  <th>S.R. NO.</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>NUMBER</th>
                  <th>MESSAGE </th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                  {
                    enq.map((i, n) => {
                      return(
                      <tr key={n}>
                      <td style={{textAlign:"center"}}>{n + 1}</td>
                      <td style={{textAlign:"center"}}>{i.name}</td>
                      <td style={{textAlign:"center"}}>{i.email}</td>
                      <td style={{textAlign:"center"}}>{i.number}</td>
                      <td style={{textAlign:"center"}}>{i.message}</td>
                      <td style={{textAlign:"center"}}><button className='admnavgates'style={{border:"none", backgroundColor:"none",cursor:"pointer", color:"red"}} onClick={() => deleteenqdata(i._id)}>DELETE</button></td>
                    </tr>
                      )
                    })
                  }
              </tbody>
            </table>
        </section>

        {/* Contact Admin panel */}

        <h2 className="regdetail">CONTACT DATA</h2>
        <section className="adminpanel">
            <table border={2} style={{width:"80%"}}>
              <thead>
                <tr>
                  <th>S.R. NO.</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>NUMBER</th>
                  <th>MESSAGE </th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                  {
                    con.map((i, n) => {
                      return(
                      <tr key={n}>
                      <td style={{textAlign:"center"}}>{n + 1}</td>
                      <td style={{textAlign:"center"}}>{i.name}</td>
                      <td style={{textAlign:"center"}}>{i.email}</td>
                      <td style={{textAlign:"center"}}>{i.number}</td>
                      <td style={{textAlign:"center"}}>{i.message}</td>
                      <td style={{textAlign:"center"}}><button className='admnavgates'style={{border:"none", backgroundColor:"none",cursor:"pointer", color:"red"}} onClick={() => deletecontdata(i._id)}>DELETE</button></td>

                    </tr>
                      )
                    })
                  }
              </tbody>
            </table>
        </section>


        {/* Courses admin panel show */}

        <h2 className="regdetail">COURSES DATA</h2>
        <section className="adminpanel">
            <table border={2} style={{width:"80%"}}>
              <thead>
                <tr>
                  <th>S.R. NO.</th>
                  <th>TITLE</th>
                  <th>DESCRIPTION</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                  {
                    courses.map((i, n) => {
                      return(
                      <tr key={n}>
                      <td style={{textAlign:"center"}}>{n + 1}</td>
                      <td style={{textAlign:"center"}}>{i.title}</td>
                      <td style={{textAlign:"center"}}>{i.desc}</td>
                      <td style={{textAlign:"center"}}><button className='admnavgates'style={{border:"none", backgroundColor:"none",cursor:"pointer", color:"red"}} onClick={() => deletecourses(i._id)}>DELETE</button></td>

                    </tr>
                      )
                    })
                  }
              </tbody>
            </table>
        </section>

        </div>
   </>
  )
}

export default AdminPanel