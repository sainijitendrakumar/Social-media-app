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
    }
  }

  return (
    
      <div className='w-full h-screen flex flex-col items-center justify-center bg-blue-gray-400'>
        <div className=' md:w-1/3 bg-green-400 p-4 rounded-xl'>
          <form onSubmit={userLogin}>
            <div className='mb-5'>
              <InputBox name={'Email'} type={'email'} onChange={(e)=>setLoginUser({...loginUser,email:e.target.value})} />
            </div>
            <div className='mb-5'>
              <InputBox name={'Password'} type={'password'} onChange={(e)=>setLoginUser({...loginUser,password:e.target.value})} />
            </div>
            <button type='submit'  className='bg-red-400 rounded-2xl p-2'>Submit</button>
          </form>
        </div>
      </div>
    
  )
}

export default Login