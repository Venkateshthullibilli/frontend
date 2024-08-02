import React from 'react'
import './index.css'
import { useState } from 'react'

const Signup = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        role: ''
    })

    const handlerFunction = (event) => {
        const {name,value} = event.target;
        setUserDetails(prevDetails => (
            {...prevDetails,[name]:value}
        ))
    }
    
    const submitHandler = async event => {
        event.preventDefault()
    
        const url = 'https://hrms-backend-b1jn.onrender.com/register/'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch(url,options)
        const data = await response.json()
        if (response){
            alert('successfully register')
        }else {
            alert('Something went wrong')
        }
    }
    
    return (
    <div className='form-overlay'> 
    <form onSubmit={submitHandler}>
        <div className='username'>
            <label htmlFor = 'username' value = {userDetails.username} name = 'username' onChange={handlerFunction}>USERNAME</label>
            <input type = 'text' id = 'username'/>
        </div>
        <div className='password'>
            <label htmlFor = 'password' value = {userDetails.password} name = 'password' onChange={handlerFunction}>PASSWORD</label>
            <input type = 'password' id = 'password'/>
        </div>
        <div className='role'>
            <label htmlFor = 'role' value = {userDetails.role} name = 'role' onChange={handlerFunction}>ROLE</label>
            <input type = 'text' id = 'role'/>
        </div>
        <div className='submit-btn-container'>
        <button type='submit'>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default Signup