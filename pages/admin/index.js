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

const Index=({orders,products})=>{
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
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
  }
  let orders=await Order.find().limit(6);
  let products=await Product.find().limit(5);
  console.log("orders",orders);
  console.log("products",products);
  return{
    props:{orders:JSON.parse(JSON.stringify(orders)),products:JSON.parse(JSON.stringify(products))}
  }
}


 