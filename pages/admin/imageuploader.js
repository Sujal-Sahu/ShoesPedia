import FullLayout from "../../layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import React from 'react'
import { Grid, ImageList, ImageListItem } from "@mui/material";
import BaseCard from "Components/baseCard/BaseCard";
import MyUploader from "./MyUploader";
import Image from "models/Image";
import mongoose from "mongoose";

const allproducts = ({images}) => {

const srcset=(image)=>{
  fetch(`http://localhost:3000/api/getImage?filename=${image}`)
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
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
                srcset(item.filename)
            ))}
            </div>
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
    await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");
  }
  let images=await Image.find();
  return{
    props:{images:JSON.parse(JSON.stringify(images))}
  }
}