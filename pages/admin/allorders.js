import FullLayout from "../../layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import { Grid } from "@mui/material";
import OrderTable from "./ordertablerendering";
import Order from "models/Order";
import mongoose from "mongoose";
import React from 'react'

const allproducts = ({orders}) => {
  return (
        <ThemeProvider theme={theme}>
      <FullLayout>
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <OrderTable orders={orders}/>
      </Grid>
    </Grid>
      </FullLayout>
        </ThemeProvider>
  )
}

export default allproducts

export async function getServerSideProps(){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
  }
  let orders=await Order.find();
  return{
    props:{orders:JSON.parse(JSON.stringify(orders))}
  }
}