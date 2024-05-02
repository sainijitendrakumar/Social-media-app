import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { account } from '../../Appwrite/Auth';
import { useNavigate } from 'react-router-dom';
import { logout as AuthLogout } from '../../Store/AuthSlice';
import { login as AuthLogin } from '../../Store/AuthSlice'



function Navbar() {
    // const userData = useSelector((state) => state.auth.userId)
    // console.log(userData);
    const [userData, setUserdata] = useState('')
    
    useEffect(() => {
        const getData = account.get()
        // console.log(getData);
        getData.then(function(responce){
          setUserdata(responce)
        //  console.log(responce);
        //   if(responce.$id){
        //     dispatch(AuthLogin(responce))
        //   }
        },function(error){
          console.log(error);
          alert("If you have login id. Plz.. login. if not sign up");
        })
      }, [])
    const handleLogout =async(e)=>{
        e.preventDefault()
        try {
         await account.deleteSession("current")
          navigate("/signin");
          dispatch(AuthLogout());
      } catch (error) {
          console.log(error);
      }
  window.location.reload();
       }
    return (
        <nav className="bg-transparent backdrop-blur-2xl fixed w-full rounded-lg border-2 border-gray-600 dark:bg-gray-900 text-white">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-1">
                <div>
                    <img src="logo-no-background.png" className="max-h-14" alt="logo" />
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className='block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Home</Link>
                        </li>
                        {userData?<>
                            <li>
                            <Link to='/profile'  className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Welcome:- {userData.name}</Link>
                        </li>
                        <li>
                        <Link to="/addpost" className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Post</Link>
                    </li></>:<li>
                            <Link to="/signup" className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</Link>
                        </li>}
                        
                        {userData?<li>
                            <button onClick={handleLogout} className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log Out</button>
                        </li>:<li>
                            <Link to="/signin" className="block py-2 px-3 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log In</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar