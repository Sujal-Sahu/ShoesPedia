import FullLayout from "../../layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import React from 'react'
import { Grid, ImageList, ImageListItem } from "@mui/material";
import BaseCard from "Components/baseCard/BaseCard";
import MyUploader from "./MyUploader";
import Image from "models/Image";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import { useEffect } from "react";

const allproducts = ({images}) => {
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
const srcset2=(image)=>{
  fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getImage?filename=${image}`)
    .then((response) => response.blob())
    .then((blob) => {
      console.log(blob)
      const imageURL = URL.createObjectURL(blob);
      console.log(imageURL);
      const imgElement = document.createElement('img');
      imgElement.src = imageURL;
      imgElement.alt="Uploaded image"
      
      // Append the image element to a container in your UI
      document.getElementById('imageContainer').appendChild(imgElement);
    })
    .catch((error) => {
      console.error('Error fetching image:', error);
    });
 
}

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1574020462714-5451391cc336?ixlib=rb-",
    title: "Bike",
    cols: 2,
  },
];
  return (
    <div>
        <ThemeProvider theme={theme}>
      <FullLayout>
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Image Uploader">
        <MyUploader/>
          <div className="flex" id="imageContainer">
            {images.map((item) => (
                srcset2(item.filename)
            ))}
            </div>
          <ImageList
            sx={{ height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </BaseCard>
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
  let images=await Image.find();
  return{
    props:{images:JSON.parse(JSON.stringify(images))}
  }
}