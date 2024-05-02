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
      alert(error)
    })
    if(promice){
      navigate("/signin")
    }
    
  }

 
  
  return (
   
    <div className='w-full h-screen flex flex-col items-center justify-center  text-white '>
    <div className='flex flex-col items-center md:w-1/3 bg-transparent p-4 rounded-xl border-gray-500 backdrop-blur	border-2 '>
      <h1 className='m-4 font-semibold text-2xl'>SignUp Form</h1>
          <form onSubmit={userSignup} className='w-full'>
            <div className='mb-5'>
              <InputBox name={'Name'} type={'text'} onChange={(e)=>setUser({...user,name:e.target.value})}/>
            </div>
            <div className='mb-5'>
              <InputBox name={'Email'} type={'email'}  onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
            <div className='mb-5'>
              <InputBox name={'Password'} type={'password'}  onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <div className='flex items-center justify-center'>
            <button type='submit'  className='bg-transparent  border-gray-500 border-2 rounded-2xl p-2'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default SignUp