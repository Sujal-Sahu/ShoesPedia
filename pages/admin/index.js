import { Grid } from "@mui/material";
import BlogCard from "../../Components/dashboard/BlogCard";
import SalesOverview from "../../Components/dashboard/SalesOverview";
import FullLayout from "../../layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import OrderTable from "../../Components/admin/Ordertablerendering"
import Order from "models/Order";
import mongoose from "mongoose";
import Product from "models/Product";
import ProductTable from "../../Components/admin/Productstablerendering";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Index=({orders,products})=>{
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
    <ThemeProvider theme={theme}>
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      <Grid item xs={12} lg={6}>
      <ProductTable products={products} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <OrderTable orders={orders} />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
    </FullLayout>
  </ThemeProvider>
  );
}

export default Index

export async function getServerSideProps(){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let orders=await Order.find().limit(6);
  let products=await Product.find().limit(5);
  console.log("orders",orders);
  console.log("products",products);
  return{
    props:{orders:JSON.parse(JSON.stringify(orders)),products:JSON.parse(JSON.stringify(products))}
  }
}


 