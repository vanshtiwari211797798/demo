import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Contact from './Components/Contact'
import Registration from './Components/Registration'
import StdLogin from './Components/StudentLogin'
import NotFound from './Components/NotFound'
import Courses from './Components/Courses'
import Enquiry from './Components/Enquiry'
import AdminLogin from './Components/AdminLogin'
import './Styling/Style.css'
import AdminPanel from './Components/AdminPanel'
import UpdateRegister from './Components/UpdateRegister'
import AddCourses from './Components/AddCourses'
const App = () => {
  return (
  
   <>
     
     <BrowserRouter>
         <Navbar/>
         <Routes>   
            <Route path={'/'} element={<HomePage/>}></Route>
            <Route path={'/contact'} element={<Contact/>}></Route>
            <Route path={'/register'} element={<Registration/>}></Route>
            <Route path={'/student'} element={<StdLogin/>}></Route>
            <Route path={'/courses'} element={<Courses/>}></Route>
            <Route path={'/enquiry'} element={<Enquiry/>}></Route>
            <Route path={'/admin'} element={<AdminLogin/>}></Route>
            <Route path={'/adpnl___eysbydmin'} element={<AdminPanel/>}></Route>
            <Route path={'/updateregisterdata/:id'} element={<UpdateRegister/>}></Route>
            <Route path={'/adds____courses'} element={<AddCourses/>}></Route>
            <Route path={'/update_cont__act'} element={<AddCourses/>}></Route>
            <Route path={'*'} element={<NotFound/>}></Route>
         </Routes>
         <Footer/>
         </BrowserRouter> 
      
   </>
  )
}

export default App