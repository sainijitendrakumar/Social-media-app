import React from 'react'


function InputBox({name,type,className,onChange}) {
  return (
    <div>
      <div className=' text-white'>
        <label htmlFor={name} className={`block mb-2 ${className} font-bold text-xl dark:text-white`}>{name} :-</label>
        <input type={type?type:"text"} id={name} onChange={onChange} className="bg-transparent border border-gray-600  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={name} required />
      </div>
    </div>
  )
}

export default InputBox