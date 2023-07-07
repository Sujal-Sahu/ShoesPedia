import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/signup.module.css'

const signup = () => {
  const router=useRouter();
  const [redirecturl, setRedirectUrl] = useState(null);
  const [name,setname]=useState("");
  const [address,setaddress]=useState("");
  const [city,setcity]=useState("");
  const [state,setstate]=useState("");
  const [zip,setzip]=useState("");
  const [country,setcountry]=useState("IN");
  const [phone,setphone]=useState("");
  const [password,setpassword]=useState("");
  const [disabled, setdisabled] = useState(true);
  const [pinjson, setpinjson] = useState();
  const [email, setemail] = useState("");

  useEffect(() => {
    setRedirectUrl(router.query.redirect || null);
  }, [router.query.redirect]);
 
  useEffect(()=>{
      if(localStorage.getItem('token')){
          if (redirecturl) {
        router.push('/' + redirecturl);
      } else {
        router.push('/'); // Redirect to home page if redirecturl is not set
      }
      }
     const handlefetch=async()=>{
        const pins=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        const pinjson=await pins.json();
        setpinjson(pinjson);
     }
     handlefetch();
  },[])
  useEffect(()=>{
         if(name.trim().length>0 && email.trim().length>0 && password.trim().length>5){
            setdisabled(false);
         }
         else{
            setdisabled(true);
         }
         if(zip.trim().length==6 && Object.keys(pinjson).includes(zip)){
             setcity(pinjson[zip][0]);
             setstate(pinjson[zip][1]);
         }
         else{
            setcity('');
            setstate('');
         }
  },[name,address,zip,password,phone])
  const handlesignup=async()=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`,{
      method:"POST",
      body:JSON.stringify({
       name:name,email:email,password:password,phone:phone,address:address,city:city,state:state,country:country,pincode:zip
      })
    })
    const jsonData = await response.json();
    console.log(jsonData);
    if(jsonData.success){
      localStorage.setItem('token',JSON.stringify(jsonData.authToken));
      if (redirecturl) {
        router.push(`/${redirecturl}`);
      } else {
        router.push('/');
      }
    }
    else{
        toast.error("Some Error Occured, Please try again...", {
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
      <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css" />
<div class="h-screen bg-indigo-50">
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
        <div class={`lg:col-span-2 col-span-3 space-y-8 m-auto ${styles.suj}`}>

        <div class="rounded-md pt-28">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 class="uppercase text-center tracking-wide text-lg font-semibold text-gray-700 my-2">Sign Up For an Account</h2>
                        <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Name</span>
                                <input name="name" placeholder="Try Odinsson" value={name} onChange={(event)=>{event.preventDefault();setname(event.target.value)}} required=""/>
                            </label>
                            
                            <label className="inline-flex border-b border-gray-200 h-12 py-3 items-center w-full md:w-1/2">
              <span className="text-right px-2">Phone</span>
              <input name="phone" type="phone" placeholder="Your 10 digit Phone Number" value={phone} onChange={(event) => { event.preventDefault(); setphone(event.target.value) }} required="" />
            </label>
            <label className="inline-flex border-b border-gray-200 h-12 py-3 items-center md:w-1/2 w-full">
                                <span class="text-right px-2">Email</span>
                                <input name="email" type="email" placeholder="try@example.com" value={email} onChange={(event) => { event.preventDefault(); setemail(event.target.value) }} required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Address</span>
                                <input name="address" placeholder="10 Street XYZ 654" value={address} onChange={(event)=>{event.preventDefault();setaddress(event.target.value)}}/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">City</span>
                                <input name="city" placeholder="San Francisco" value={city}/>
                            </label>
                            <label class="inline-flex w-2/4 border-gray-200 py-3">
                                <span class="text-right px-2">State</span>
                                <input name="state" placeholder="CA" value={state}/>
                            </label>
                            <label class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                <span class="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                                <input name="postal_code" placeholder="313001" value={zip} onChange={(event)=>{event.preventDefault();setzip(event.target.value)}}/>
                            </label>
                           
                            <label class="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span class="text-right px-2">Country</span>
                                <div id="country" class="w-full flex items-center">
                                    <select name="country" class="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none" onChange={(event)=>{event.preventDefault();setcountry(event.target.value)}}>
                                        <option value="AU">Australia</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BR">Brazil</option>
                                        <option value="CA">Canada</option>
                                        <option value="CN">China</option>
                                        <option value="DK">Denmark</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IT">Italy</option>
                                        <option value="IN" selected="selected">India</option>
                                        <option value="JP">Japan</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MX">Mexico</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="SG">Singapore</option>
                                        <option value="ES">Spain</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                    </select>
                                </div>
                            </label>
                            <label class="flex border-t border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2 xl:px-0 xl:text-none">Password</span>
                                <input name="postal_code" placeholder="123456" value={password} onChange={(event)=>{event.preventDefault();setpassword(event.target.value)}}/>
                            </label>
                        </fieldset>
                    </section>
                </form>
                <button disabled={disabled} className="disabled:bg-blue-300 submit-button px-4 py-3 bg-blue-700 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" onClick={handlesignup}>
                Submit
            </button>
            </div>
            <div className="flex justify-center items-center mt-6">
      <Link href="/login" target="_blank"><a className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
        <span>
          <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </span>
        <span className="ml-2">You already have an account?</span>
        </a></Link>
    </div>
        </div>
        </div>
    </div>
  )
}

export default signup
