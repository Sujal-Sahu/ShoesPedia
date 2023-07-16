import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = (props) => {
  const router=useRouter();
  // console.log(router.query);
  const [redirecturl, setRedirectUrl] = useState(null);

  useEffect(() => {
    setRedirectUrl(router.query.redirect || null);
  }, [router.query.redirect]);
 
  useEffect(() => {
    if (localStorage.getItem('token')) {
      if (redirecturl) {
        router.push('/' + redirecturl);
      } else {
        router.push('/'); // Redirect to home page if redirecturl is not set
      }
    }
  }, [redirecturl]);

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const handlelogin = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const JSONdata = await response.json();
    console.log(JSONdata);
    if (JSONdata.success) {
      localStorage.setItem('token', JSON.stringify(JSONdata.authToken));
      props.user.value = JSONdata.authToken;
      if (redirecturl) {
        router.push(`/${redirecturl}`);
      } else {
        router.push('/');
      }
    }
    else{
      toast.error("Invalid credentials", {
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
  };
  return (
    <div>
     <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />
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
<div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50">
  <div className="flex flex-col shadow-lg text-gray-600 px-4 sm:px-6 md:px-8 lg:px-10 py-8 w-full max-w-md bg-white">
    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
    {/* <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fab fa-facebook-f"></i></span>
      <span>Login with Facebook</span>
    </button> */}
    <div className="relative mt-10 h-px bg-gray-300">
      <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span className="bg-white px-4 text-xs text-gray-500 uppercase">Login With Email</span>
      </div>
    </div>
    <div className="mt-10">
      <form onSubmit={(event)=>{event.preventDefault();handlelogin()}}>
        <div className="flex flex-col mb-6">
          <label for="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <input id="email" type="email" name="email" value={email} onChange={(event)=>{event.preventDefault();setemail(event.target.value)}} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>

            <input id="password" type="password" name="password" value={password} onChange={(event)=>{event.preventDefault();setpassword(event.target.value)}} className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
          </div>
        </div>

        <div className="flex items-center mb-6 -mt-4">
          <div className="flex ml-auto">
            <Link href="/forgotpassword" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"><a>Forgot Your Password?</a></Link>
          </div>
        </div>

        <div className="flex w-full">
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Login</span>
            <span>
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
    <div className="flex justify-center items-center mt-6">
      <Link href={`/signup?redirect=${redirecturl}`} target="_blank" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"><a className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
        <span>
          <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </span>
        <span className="ml-2">You don't have an account?</span>
        </a></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default login
