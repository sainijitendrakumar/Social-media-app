import React, { useState } from 'react'
import InputBox from '../../components/InputBox'
import { useNavigate } from 'react-router-dom'
import { account } from '../../Appwrite/Auth'
import { ID } from 'appwrite'


function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
const navigate=useNavigate()
  const userSignup = async(e) => {
    e.preventDefault()
    const promice =  account.create(ID.unique(), user.email, user.password,user.name);
    
    promice.then(function (response) {
      console.log(response); // Success
      
    }, function (error) {
      console.log(error); // Failure
    })
    if(promice){
      navigate("/signin")
    }
    
  }

 
  
  return (
   
      <div className='w-full h-screen flex flex-col items-center justify-center bg-blue-gray-400'>
        <div className='w-full mx-5 md:w-1/3 bg-green-400 p-4 rounded-xl'>
          <form onSubmit={userSignup}>
            <div className='mb-5'>
              <InputBox name={'Name'} type={'text'} onChange={(e)=>setUser({...user,name:e.target.value})}/>
            </div>
            <div className='mb-5'>
              <InputBox name={'Email'} type={'email'}  onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className='mb-5'>
              <InputBox name={'Password'} type={'password'}  onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <button type='submit' className='bg-red-400 rounded-2xl p-2'>Submit</button>
          </form>
        </div>
      </div>
    
  )
}

export default SignUp