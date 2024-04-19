import React from 'react'
import { bucket } from '../../Appwrite/Auth'
import conf from '../../conf/conf'


function HomePostCard({item}) {
  return (
    <div className='cardimg rounded-lg'>
      {item.featuredImage && <img src={bucket.getFileView(conf.appwriteBucketId, item.featuredImage)} alt="" />}
        <div className="p-3">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">{item && item.discription}</p>
      </div>
    </div>

  )
}

export default HomePostCard
