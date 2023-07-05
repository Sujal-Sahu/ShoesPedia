import FullLayout from "../../layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import React from 'react'
import { Grid } from "@mui/material";
import ProductTable from "../../Components/admin/Productstablerendering";
import Product from "models/Product";
import mongoose from "mongoose";
import { useRouter } from "next/router";

const allproducts = ({products}) => {
  const router=useRouter();
  useEffect(()=>{
      const handlefetch=async()=>{
        const token=JSON.parse(localStorage.getItem('token'));
        const usertemp=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getcredentials`,{
          method:'POST',
          body: JSON.stringify({token})
      })
      let a = await usertemp.json();
      console.log(a);
      if(a.email!==process.env.NEXT_PUBLIC_EMAIL || a.password!==process.env.NEXT_PUBLIC_PASSWORD){
        localStorage.removeItem('token');
        router.push('/admin/login');
      }
      }
      if(localStorage.getItem('token')){
          handlefetch();
      }
      else{
        router.push('/admin/login');
      }
  },[])
  return (
    <div>
        <ThemeProvider theme={theme}>
      <FullLayout>
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <ProductTable products={products} />
      </Grid>
    </Grid>
      </FullLayout>
        </ThemeProvider>
    </div>
  )
}

export default allproducts

export async function getServerSideProps(){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products=await Product.find();
  return{
    props:{products:JSON.parse(JSON.stringify(products))}
  }
}

 