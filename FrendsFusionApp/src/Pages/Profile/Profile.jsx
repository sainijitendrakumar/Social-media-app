import React, { useState,useEffect } from 'react'
import Posts from '../Posts/Posts'
import { account } from '../../Appwrite/Auth'
import { useDispatch,useSelector } from 'react-redux'
import { login as AuthLogin } from '../../Store/AuthSlice'
import { logout as AuthLogout } from '../../Store/AuthSlice'

function Profile() {
  const [userDetails, setUserDetails] = useState('')
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(AuthLogin(null))
      const getData = account.get()
      // console.log(getData);
      getData.then(function(responce){
        setUserDetails(responce)
       console.log(responce);
        if(responce.$id){
          dispatch(AuthLogin(responce))
        }
      },function(error){
        console.log(error);
      })
    }, [])
    
   
  
  return (
    <div>
      <Posts userid={userDetails.$id}/>
    </div>
  )
}

export default Profile