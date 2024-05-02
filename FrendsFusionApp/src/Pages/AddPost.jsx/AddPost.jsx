import PostForm from "../../components/PostForm"
import React, { useState } from "react"
import { useEffect } from "react"
import { account } from '../../Appwrite/Auth'
import { useDispatch,useSelector } from 'react-redux'
import { login as AuthLogin } from '../../Store/AuthSlice'




function AddPost() {
  const [userDetails ,setUserDetails] = useState()
  const userData = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AuthLogin(null))
    const getData = account.get()
    getData.then(function(responce){
      setUserDetails(responce)
      // console.log(responce);
      if(responce.$id){
        dispatch(AuthLogin(responce))
      }
    },function(error){
      console.log(error);
    })
  }, [])
  
  return (
    <>
     <PostForm />
     
    </>
  )
}

export default AddPost