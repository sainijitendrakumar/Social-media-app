import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { ID } from 'appwrite'
import conf from '../conf/conf'
import { useSelector } from 'react-redux'
import { bucket, databases } from '../Appwrite/Auth'
import RTE from './RTE'
import { Editor } from '@tinymce/tinymce-react'




function PostForm() {
    const [title, setTitle] = useState('')
    const [discription, setDiscription] = useState('')
    const [image, setImage] = useState([])
    const [featuredImage, setFeaturedImage] = useState('')
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userId)
    // console.log(userData);
    console.log(image);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // Create file and wait for it to complete
            const fileResponse = await bucket.createFile(conf.appwriteBucketId, ID.unique(), image);
            console.log(fileResponse.$id);
            const fileId = fileResponse.$id
            setFeaturedImage(fileId[0]);

            // Create document with the obtained featuredImage value
            const documentResponse = await databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                uuidv4(), {
                title,
                discription,
                featuredImage: fileResponse.$id,  // Use the value obtained from file creation

                userId: userData.$id
            }
            );

            console.log(documentResponse);
            navigate('/profile');
        } catch (error) {
            console.error(error);
            // Handle errors here
        }
    };
    return (
        <div className='w-full h-screen flex flex-row justify-center items-center' >
            <form className="mx-auto border-solid w-2/3 bg-blue-gray-300 p-5 rounded-xl border">
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => { setTitle(e.target.value) }} />
                </div>
                {/* <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
          <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e=>{setSlug(e.target.value)}} />
        </div> */}
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Discription</label>
                {/* <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." onChange={e => { setDiscription(e.target.value) }}>
 </textarea> */}
                <Editor
                initialValue=""
                    apiKey='8yxxwha8l3h6iwencf11oqhmtddj4hik7ooukt1l1br58goj'
                    init={{
                        height: 250,
                        menubar: true,
                        plugins: [
                            "emoticons",
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",
                        ],
                        toolbar:
                            "undo redo|emoticons | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

                    }}
                    onEditorChange={newText => { setDiscription(newText) }}
                />

                <div>
                    <label className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload image</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={e => setImage(e.target.files[0])} />
                </div>
                <div className='my-3'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleSubmit}>submit</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm