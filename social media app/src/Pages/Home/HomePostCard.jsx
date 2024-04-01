import React from 'react'
import { bucket } from '../../Appwrite/Auth'
import conf from '../../conf/conf'


function HomePostCard({item}) {
  return (
    <div className="max-w-sm m-1 bg-blue-gray-200 border border-gray-200 rounded-3xl shadow-md dark:bg-gray-800 dark:border-gray-700" key={item.$id}>
      <a href="#">
        {item.featuredImage && <img className="rounded-3xl " src={bucket.getFileView(conf.appwriteBucketId, item.featuredImage)} alt="" />}
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
          <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">{item && item.discription}</p>
        </a>
      </div>
      
    </div>
  )
}

export default HomePostCard