import React, { useState,useEffect } from 'react'
import { databases } from '../../Appwrite/Auth'
import conf from '../../conf/conf'
import { Query } from 'appwrite'
import PostCard from './PostCard'
import '../Home/style.css'

function Posts({userid}) {
  const[data,setData]=useState([''])
  // console.log(userid);
  useEffect(() => {
    const promise = databases.listDocuments(
       conf.appwriteDatabaseId,
       conf.appwriteCollectionId,
       [
         Query.equal('userId', userid)
       ]
    );

    promise.then(function (response) {
      // console.log(response.documents[0]);
      setData(response.documents)
      
 }, function (error) {
     console.log(error);
 });
  }, [userid])
  // console.log(data);

  const BlankPage = ()=>{
  return(
    <div className='w-full h-screen flex flex-wrap items-center justify-center'>
      <div className=''>
      <h1 className='text-2xl'>No post to show. Please add post.</h1>
      </div>
    </div>
  )
  }
  return (
    <>
    <div className='card pt-16' >
      {data && data.length!==0 && data.map((item)=>(
        <div key={item && item.$id} className='lala m-3 rounded-md'>
          <PostCard item={item}/>
        </div>
      ))}
    </div>
    {data.length===0 && <BlankPage />}
    </>
  )
}

export default Posts
