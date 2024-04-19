import React, { useState,useEffect } from 'react'
import { databases } from '../../Appwrite/Auth'
import conf from '../../conf/conf'
import HomePostCard from './HomePostCard'
import './style.css'


function Home() {
    const[data,setData]=useState([])
    
    useEffect(() => {
        const promise = databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            );
    
            promise.then(function(res) {
                console.log(res);
                setData(res.documents)
            },function(error) {
                console.log(error);
            })
    }, [])
    console.log(data);

    const BlankPage = ()=>{
        return(
          <div className='w-full h-screen flex flex-wrap items-center justify-center'>
            <div className=''>
            <h1 className='text-2xl'>No post to show. Please Log In and Add post.</h1>
            </div>
          </div>
        )
        }
    

  return (
    <>
    <div className='card'>
        {data && data.length!==0 && data.map((item)=>(
        <div key={item.$id} className='lala m-3 rounded-md'>
          <HomePostCard item={item} />
        </div>
      ))}
      
    </div>
    {data.length===0 && <BlankPage />}
    </>
  )
}

export default Home
