import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';

const myaccount = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [cpass,setcpass]=useState("");
    const [npass,setnpass]=useState("");
    const [address,setaddress]=useState("");
    const [pincode,setpincode]=useState("");
    const [phone,setphone]=useState("");
    useEffect(()=>{
      const handlefetch=async()=>{
        const token=JSON.parse(localStorage.getItem('token'));
        if(token){
        const usertemp=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getcredentials`,{
            method:'POST',
            body: JSON.stringify({token})
        })
        let u = await usertemp.json();
        console.log(u);
        setemail(u.email);
        setname(u.name);
        setpincode(u.pincode);
        setphone(u.phone);
        setaddress(u.address);
        }
     }
     handlefetch();
    },[])
    const handleuserupdate=async()=>{
      let token=JSON.parse(localStorage.getItem('token'));
      console.log(token)
        if(token){
        const usertemp=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`,{
            method:'POST',
            body: JSON.stringify({token,name,address,pincode,phone})
        })
        let res = await usertemp.json();
        console.log(res);
        if(res.success){
          console.log("User information updated successfully.")
          toast.success("User information updated successfully.", {
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
          console.log("Some error Occured.")
          toast.error("Some error Occured.", {
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
    }
    const handlepasswordupdate=async()=>{
      let token=JSON.parse(localStorage.getItem('token'));
      console.log(token)
      if(npass.trim().length<=5){
        toast.error("Please Enter the password of more than 5 characters!!", {
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
        else if(token){
        const resmsg=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`,{
            method:'POST',
            body: JSON.stringify({token,password,npass,cpass})
        })
        let res = await resmsg.json();
        console.log(res);
        if(res.success){
          console.log("User Password updated successfully.")
          toast.success("User Password updated successfully.", {
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
          console.log(res.message)
          toast.error(res.message, {
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
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update Details</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Change the details whichever u want to edit and click on the submit button</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
    <h1 className="font-bold text-2xl text-gray-900 mb-3">1. Edit Details</h1>
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={(event)=>{event.preventDefault();setname(event.target.value)}}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email}/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-325 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={address} onChange={(event)=>{event.preventDefault();setaddress(event.target.value)}}></textarea>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="pincode" class="leading-7 text-sm text-gray-600">PinCode</label>
            <input type="text" id="pincode" name="pincode" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={pincode} onChange={(event)=>{event.preventDefault();setpincode(event.target.value)}}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
            <input type="text" id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={phone} onChange={(event)=>{event.preventDefault();setphone(event.target.value)}}/>
          </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={(event)=>{event.preventDefault();handleuserupdate()}} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
        </div>
        
      </div>
    <h1 className="font-bold text-2xl text-gray-900 mt-5 mb-3">2. Edit Password</h1>
    <div class="flex flex-wrap -m-2">
        <div class="p-2 w-full">
          <div class="relative">
            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
            <input type="text" id="password" name="password" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={(event)=>{event.preventDefault();setpassword(event.target.value)}}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="npassword" class="leading-7 text-sm text-gray-600">New Password</label>
            <input type="email" id="npassword" name="npassword" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={npass} onChange={(event)=>{event.preventDefault();setnpass(event.target.value)}}/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="cpassword" class="leading-7 text-sm text-gray-600">Confirm Password</label>
            <input type="email" id="cpassword" name="cpassword" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={cpass} onChange={(event)=>{event.preventDefault();setcpass(event.target.value)}}/>
          </div>
        </div>
        </div>
        <div class="p-2 w-full">
          <button onClick={(event)=>{event.preventDefault();handlepasswordupdate()}} class="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
        </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default myaccount
