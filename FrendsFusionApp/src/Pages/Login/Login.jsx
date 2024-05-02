import React, { useEffect, useState } from 'react'
import InputBox from '../../components/InputBox'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { account } from '../../Appwrite/Auth'



function Login() {
 
  const [loginUser,setLoginUser] = useState({
      email:'',
      password:''
  })
 
  const navigate = useNavigate()
  const userLogin = async(e)=>{
    e.preventDefault();
    try {
      await account.createEmailSession(loginUser.email,loginUser.password);
      navigate('/profile')
    } catch (error) {
      console.log(error);
      alert(error)
    }
    // window.location.reload();
  }

  return (
    
      <div className='w-full h-screen flex flex-col items-center justify-center text-white '>
        <div className='flex flex-col items-center md:w-1/3 bg-transparent p-4 rounded-xl border-gray-500 backdrop-blur	border-2 shadow-xl'>
          <h1 className='m-4 font-semibold text-2xl'>Login Form</h1>
          <form onSubmit={userLogin} className='w-full'>
            <div className='mb-5'>
              <InputBox name={'Email'} type={'email'} onChange={(e)=>setLoginUser({...loginUser,email:e.target.value})} />
            </div>
            <div className='mb-5'>
              <InputBox name={'Password'} type={'password'} onChange={(e)=>setLoginUser({...loginUser,password:e.target.value})} />
            </div>
            <div className='flex items-center justify-center'>
            <button type='submit'  className='bg-transparent  border-gray-500 border-2 rounded-2xl p-2'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default Login
