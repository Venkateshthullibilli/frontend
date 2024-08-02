import React, { useState } from 'react'
import './index.css'
import Signup from '../Signup'

const Register = () => {
  const [isTrue,setTrue] = useState(false)
  return (
    <div className='main-container'>
         <div className='btn-container'>
            <button>Login /</button>
            <button onClick={()=> setTrue(true)}>Sign up</button>
         </div>
        <div className='hrms-heading'>
            <h2>Human Resources Management System</h2>
            <p>Sign up to do further action</p>
            </div>
      {isTrue && <Signup/>}      
      
    </div>
  )
}
export default Register