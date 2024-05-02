import React from 'react'
import { bucket } from '../../Appwrite/Auth'
import conf from '../../conf/conf'
import './style.css'
import parse from 'html-react-parser'


function HomePostCard({ item }) {
  return (
    <div className='w-full rounded mb-4'>
      {item.featuredImage && <img className='rounded' src={bucket.getFileView(conf.appwriteBucketId, item.featuredImage)} alt="" />}
        <div className="p-3">
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <div className="mb-2  font-normal text-gray-900 dark:text-gray-400">{parse(item && item.discription)}</div>
      </div>
    </div>

  )
}

export default HomePostCard
