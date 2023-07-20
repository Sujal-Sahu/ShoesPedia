import Head from 'next/head';
import {React,useEffect,useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from 'Components/Navbar';
import { useRouter } from 'next/router';
import styles from '../styles/checkout.module.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = ({addcart,removecart,clearcart,cart,subtotal,user,logout}) => {
    const router=useRouter();
  const [name,setname]=useState("");
  const [address,setaddress]=useState("");
  const [city,setcity]=useState("");
  const [state,setstate]=useState("");
  const [zip,setzip]=useState("");
  const [email,setemail]=useState("");
  const [country,setcountry]=useState("US");
  const [phone,setphone]=useState("");
  const [disabled, setdisabled] = useState(true);
  const [pinjson, setpinjson] = useState();
 const [sdkready, setSdkready] = useState(false)
  useEffect(()=>{
     const handlefetch=async()=>{
        const pins=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        const pinjson=await pins.json();
        setpinjson(pinjson);
        const token=JSON.parse(localStorage.getItem('token'));
        if(token){
        const emailtemp=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getcredentials`,{
            method:'POST',
            body: JSON.stringify({token})
        })
        let a = await emailtemp.json();
        console.log(a);
        setemail(a.email);
        setname(a.name);
        setzip(a.pincode);
        setphone(a.phone);
        setaddress(a.address);
        }
        else{
            router.push('/login?redirect=checkout');
        }
     }
   
     handlefetch();
  },[])
  useEffect(()=>{
         if(name.trim().length>0 && address.trim().length>0 && zip.trim().length>0){
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
  },[name,address,zip])
  
  const intiatePayment=async()=>{
    let oid=Math.floor(Math.random()*Date.now());
    const data={cart,subtotal,oid,name,email,address,city,state,zip,country,cart,phone};
    let a=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,{
        method:'POST',
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify(data)
    })
    let txnRes=await a.json();
    // console.log(txnToken);
    if(txnRes.success){
    let txnToken=txnRes.txnToken;
        var config = {
            "root": "",
            "flow": "DEFAULT",
            "data": {
            "orderId": oid,
            "token": txnToken, /* update token value */
            "tokenType": "TXN_TOKEN",
            "amount": subtotal /* update amount */
            },
            "handler": {
            "notifyMerchant": function(eventName,data){
            console.log("notifyMerchant handler function called");
            console.log("eventName => ",eventName);
            console.log("data => ",data);
            }
            }
            };
            window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
            // initialze configuration using init method
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error){
            console.log("error => ",error);
            });
            });
    }
    else{
        console.log(txnRes.error);
        if(txnRes.cartClear){
        clearcart();
        }
        toast.error(txnRes.error, {
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
        <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
        {/* <Script type="application/javascript" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous"> 
        </Script>*/}
        </Head>
        <Navbar user={user} logout={logout} heading="CheckOut"/>
        <div className="h-20"></div>
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
      {/* <div class="h-screen grid grid-cols-3"> */}
      <div class="min-h-screen flex flex-col md:flex-row">
        <div class={`${styles.suj} w-full md:w-2/3 bg-indigo-50 space-y-8 ${styles.suju}`}>
            <div class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto sm:pb-0">
                    <div class="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="text-sm font-medium ml-3">Checkout</div>
                </div>
                <div class="text-sm tracking-wide text-gray-500 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div class="rounded-md">
                <form id="payment-form" method="POST" action="">
                    <section>
                        <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                        <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Name</span>
                                <input name="name" class="focus:outline-none px-3 w-full" placeholder="Try Odinsson" value={name} onChange={(event)=>{event.preventDefault();setname(event.target.value)}} required=""/>
                            </label>
                            
                            <label className="inline-flex border-b border-gray-200 h-12 py-3 items-center w-full md:w-1/2">
              <span className="text-right px-2">Phone</span>
              <input name="phone" type="phone" class="focus:outline-none w-full" placeholder="Your 10 digit Phone Number" value={phone} onChange={(event) => { event.preventDefault(); setphone(event.target.value) }} required="" />
            </label>
            <label className="inline-flex border-b border-gray-200 h-12 py-3 items-center md:w-1/2 w-full">
                                <span class="text-right px-2">Email</span>
                                <input name="email" type="email" placeholder="try@example.com" class="focus:outline-none w-full"  value={email} required=""/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">Address</span>
                                <input name="address" class="focus:outline-none px-3 w-full"  placeholder="10 Street XYZ 654" value={address} onChange={(event)=>{event.preventDefault();setaddress(event.target.value)}}/>
                            </label>
                            <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span class="text-right px-2">City</span>
                                <input name="city" class="focus:outline-none px-3 w-full" placeholder="San Francisco" value={city}/>
                            </label>
                            <label class="inline-flex w-2/4 border-gray-200 py-3">
                                <span class="text-right px-2">State</span>
                                <input name="state" class="focus:outline-none px-3 w-full" placeholder="CA" value={state}/>
                            </label>
                            <label class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                                <span class="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                                <input name="postal_code" class="focus:outline-none px-3 w-full" placeholder="313001" value={zip} onChange={(event)=>{event.preventDefault();setzip(event.target.value)}}/>
                            </label>
                            <label class="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span class="text-right px-2">Country</span>
                                <div id="country" class="focus:outline-none px-3 w-full flex items-center">
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
                        </fieldset>
                    </section>
                </form>
            </div>
            <div class="rounded-md">
                <section>
                    <h2 class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Payment Gateway</h2>
                    <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                        <label class="flex border-b border-gray-200 h-12 py-3 items-center">
                            <span class="text-right px-2 font-bold">PayPal</span>
                            {/*<input name="card" class="focus:outline-none px-3 w-full" placeholder="Card number MM/YY CVC" required=""/> */}
                        </label>
                    </fieldset>
                </section>
            </div>
            {/* <button disabled={disabled} id="paypal-button-container" className="disabled:bg-blue-300 submit-button px-4 py-3 rounded-full bg-blue-700 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" onClick={intiatePayment}>
                Pay ₹{subtotal}
            </button> */}
            <PayPalScriptProvider options={{ 
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}}>
            <PayPalButtons style={{ layout: "horizontal",color:"blue"}} />
        </PayPalScriptProvider>

        </div>
        <div class={`${styles.sujal} w-full md:w-1/3 bg-white`}>
            <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
            <ul class="py-6 border-b space-y-6 px-8">
                {Object.keys(cart).map((k)=>{
                return <li class="grid grid-cols-6 gap-2 border-b-1">
                    <div class="col-span-1 self-center">
                        <img src={cart[k].img} alt="Product" class="rounded w-full"/>
                    </div>
                    <div class="flex flex-col col-span-3 pt-2">
                        <span class="text-gray-600 text-md font-semi-bold">{cart[k].name}</span>
                        <span class="text-gray-400 text-sm inline-block pt-2">{cart[k].category}</span>
                    </div>
                    <div class="col-span-2 pt-3">
                        <div class="flex items-center space-x-2 text-sm justify-between">
                            <span class="text-gray-400">{cart[k].qty} x ₹{cart[k].price}</span>
                            <span class="text-pink-400 font-semibold inline-block">₹{cart[k].qty*cart[k].price}</span>
                        </div>
                    </div>
                </li>})}
               
            </ul>
            <div class="px-8 border-b">
                <div class="flex justify-between py-4 text-gray-600">
                    <span>Subtotal</span>
                    <span class="font-semibold text-pink-500">₹{subtotal}</span>
                </div>
                <div class="flex justify-between py-4 text-gray-600">
                    <span>Shipping</span>
                    <span class="font-semibold text-pink-500">Free</span>
                </div>
            </div>
            <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                <span>Total</span>
                <span>₹{subtotal}</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Checkout
