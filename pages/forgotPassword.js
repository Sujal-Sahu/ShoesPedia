import {React,useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const forgotPassword = () => {
  const [password,setpassword]=useState('');
  const [cpassword, setcpassword] = useState('');
  const [email, setemail] = useState("");
  const router=useRouter();
  useEffect(()=>{
        if(localStorage.getItem('token')){
            router.push('/');
        }
  },[])

  const handleresetpassword=async()=>{
    const data={
      password:password,
      sendEmail:false
    }
    const response=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`,{
      method:'POST',
      body: JSON.stringify(data)
  })
  let res = await response.json();
  console.log(res);
  if(res.success){
    toast.success("Password updated successfully.", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else{
    toast.error("Some error occured!!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  }
  const handlesendemail=async()=>{
    let data={
      email:email,
      sendEmail:true
    }
    const response=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`,{
      method:'POST',
      body: JSON.stringify(data)
    })
    let res = await response.json();
    if(res.success){
      toast.success("Email has been sent successfully.", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      console.log("Some Error Occured.")
      toast.error("Some Error Occured.", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  return (
    <div>
      <ToastContainer
position="top-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
       <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />
{router.query.token && 
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
  <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Update Password</div>
    
    <div className="mt-10">
      <form>
        <div className="flex flex-col mb-6">
          <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">New Password:</label>
          <div className="relative">

            <input id="password" type="text" name="password" className="text-sm sm:text-base placeholder-gray-500 pl-3 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter New Password" value={password} onChange={(event)=>{event.preventDefault();setpassword(event.target.value)}}/>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Confirm Password:</label>
          <div className="relative">

            <input id="cpassword" type="text" name="cpassword" className="text-sm sm:text-base placeholder-gray-500 pl-3 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Enter Password Again" value={cpassword} onChange={(event)=>{event.preventDefault();setcpassword(event.target.value)}}/>
          </div>
        </div>
             
        <div className="flex w-full">
          <button type="submit" onClick={(event)=>{event.preventDefault();handleresetpassword()}} disabled={password.length==0 || password!=cpassword} className="disabled:bg-blue-300 flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Update</span>
            <span>
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
   
  </div>
</div>
}
{!router.query.token && 
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
  <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Forgot Your Password</div>
    
    <div className="mt-10">
      <form>
        <div className="flex flex-col mb-6">
          <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <input id="email" type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" value={email} onChange={(event)=>{event.preventDefault();setemail(event.target.value)}} />
          </div>
        </div>
             
        <div className="flex w-full">
          <button type="submit" onClick={(event)=>{event.preventDefault();handlesendemail()}} className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Submit</span>
            <span>
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
   
  </div>
</div>
}
    </div>
  )
}

export default forgotPassword
