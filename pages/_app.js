// import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Script from 'next/script';
import LoadingBar from 'react-top-loading-bar'


export default function App({ Component, pageProps }) {
  const [cart,setcart]=useState({});
  const [subtotal,setsubtotal]=useState(0);
  const [user,setuser]=useState({value:null});
  const [progress, setprogress] = useState(0);
  const router=useRouter();
  useEffect(()=>{
      router.events.on('routeChangeStart',()=>{setprogress(40)});
      router.events.on('routeChangeComplete',()=>{setprogress(100)});
      console.log("Hey!! I am a useEffect.");
      try{
      let mycart=localStorage.getItem("cart");
      if(mycart){
        mycart=JSON.parse(mycart);
        setcart(mycart);
        let subt=0;
      let keys=Object.keys(mycart);
      for(let i=0;i<keys.length;i++){
          subt+=(mycart[keys[i]].qty * mycart[keys[i]].price);
      }
      setsubtotal(subt);
      }
    }
    catch(error){
      console.error(error);
      localStorage.removeItem('cart');
    }
    const token=localStorage.getItem('token');
    if(token){
      setuser({value:token});
    }
  },[])
  const logout=async()=>{
      setuser({value:null});
      localStorage.removeItem('token');
  }
  const savecart=(mycart)=>{
      localStorage.setItem("cart",JSON.stringify(mycart));
      let subt=0;
      let keys=Object.keys(cart);
      for(let i=0;i<keys.length;i++){
          subt+=(cart[keys[i]].qty * cart[keys[i]].price);
      }
      setsubtotal(subt);
  }
  const addcart=(itemCode,qty,name,size,price,variant)=>{
      let mycart=cart;
      if(itemCode in mycart){
         mycart[itemCode].qty=mycart[itemCode].qty+qty;
      }
      else{
        mycart[itemCode]={qty:1,price,name,size,variant};
      }
      console.log(mycart);
      setcart(mycart);
      savecart(mycart);
      router.push(`${process.env.NEXT_PUBLIC_HOST}/cart`);
  }
  const removecart=(itemCode,qty,price,name,size,variant)=>{
     let mycart=cart;
     console.log("Sujal");
     if(itemCode in mycart){
      console.log("Sahu");
          mycart[itemCode].qty=mycart[itemCode].qty-qty;
          if(mycart[itemCode].qty<=0){
            delete mycart[itemCode];
         }
     }  
     setcart(mycart);
     savecart(mycart);
  }
  const clearcart=()=>{
    setcart({});
    savecart({});
  }
  const buynow=(itemCode,qty,name,size,price,variant)=>{
        let mycart={};
        mycart[itemCode]={qty:1,price,name,size,variant};
        setcart(mycart);
        savecart(mycart);
        router.push('/checkout');
  }
  return( 
    <>
  <LoadingBar
        color='red'
        progress={progress}
        waitingTime={2000}
        onLoaderFinished={() => setprogress(0)}
      />
      
  <Component user={user} logout={logout} addcart={addcart} removecart={removecart} clearcart={clearcart} cart={cart} subtotal={subtotal} buynow={buynow} {...pageProps} />
 
  </>
  );
}
