import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {

  const navigate = useNavigate()

  const navigator = () => {
      navigate('/')
  }
  return (
   <>
   <div className="notfound">
   <h1>404 Page Not Found, Go to Home Page</h1>
   <button onClick={navigator}>Home Page</button>
   </div>
     
   </>
  )
}

export default NotFound