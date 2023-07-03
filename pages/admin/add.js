import FullLayout from "../../layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import { useState,useEffect } from "react";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "Components/baseCard/BaseCard";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PlusCircle } from 'react-feather';

const allproducts = () => {
  const [highlights, setHighlights] = useState([]);
  const [tags, settags] = useState([]);
  const [title, settitle] = useState('');
  const [category, setcategory] = useState('');
  const [subcategory, setsubcategory] = useState('');
  const [size, setsize] = useState();
  const [slug, setslug] = useState('');
  const [color, setcolor] = useState('');
  const [price, setprice] = useState('');
  const [availableQty, setavailableQty] = useState();
  const [desc, setdesc] = useState();
const [img,setimg]=useState();
  const handleHighlightChange = (index, e) => {
    const newHighlights = [...highlights];
    newHighlights[index] = e.target.value;
    setHighlights(newHighlights);
  };

  const handleAddHighlight = () => {
    setHighlights([...highlights, '']);
  };

  const handleRemoveHighlight = (index) => {
    const newHighlights = [...highlights];
    newHighlights.splice(index, 1);
    setHighlights(newHighlights);
  };
  const handleTagChange = (index, e) => {
    const newTags = [...tags];
    newTags[index] = e.target.value;
    settags(newTags);
  };

  const handleAddTag = () => {
    settags([...tags, '']);
  };

  const handleRemoveTag = (index) => {
    const newtags = [...tags];
    newtags.splice(index, 1);
    settags(newtags);
  };

  const handlesubmit=async()=>{
    const data={title,category,size,subcategory,color,slug,desc,highlights,tags,price,availableQty,img}
    let a=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproduct`,{
      method:'POST',
      headers:{
          'Content-type':"application/json"
      },
      body:JSON.stringify([data])
  })
  let response=await a.json();
  console.log(response)
  if(response.success){
    // console.log("Successful");
    toast.success("Product Added Successfully!!", {
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
    toast.error("Some Error Occured!! Please fill All the details carefully and try again...", {
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
        <ThemeProvider theme={theme}>
      <FullLayout>
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
      <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add a Product">
          <Stack spacing={3}>
            <TextField
              id="title"
              label="title"
              variant="outlined"
              value={title}
              onChange={(event)=>{event.preventDefault();settitle(event.target.value)}}
            />
            <TextField id="category" label="Category" variant="outlined" value={category} onChange={(event)=>{event.preventDefault();setcategory(event.target.value)}}/>
            <TextField id="subcategory" label="Sub-Category" variant="outlined" value={subcategory} onChange={(event)=>{event.preventDefault();setsubcategory(event.target.value)}} />
            <TextField id="size" label="Size" variant="outlined" value={size} onChange={(event)=>{event.preventDefault();setsize(event.target.value)}} />
            <TextField id="slug" label="Slug" variant="outlined" value={slug} onChange={(event)=>{event.preventDefault();setslug(event.target.value)}} />
            <TextField id="color" label="Color" variant="outlined" value={color} onChange={(event)=>{event.preventDefault();setcolor(event.target.value)}} />
            <TextField id="image" label="Image URL" variant="outlined" value={img} onChange={(event)=>{event.preventDefault();setimg(event.target.value)}} />
            <TextField id="price" label="Price" variant="outlined" value={price} onChange={(event)=>{event.preventDefault();setprice(event.target.value)}} />
            <TextField id="availableqty" label="Available Qty" variant="outlined" value={availableQty} onChange={(event)=>{event.preventDefault();setavailableQty(event.target.value)}} />
            <TextField id="desc" label="Description" multiline rows={3} variant="outlined" value={desc} onChange={(event)=>{event.preventDefault();setdesc(event.target.value)}} />
            {highlights.map((highlight, index) => (
        <div key={index}>
          <TextField
          fullWidth
            label={`Highlight ${index + 1}`}
            value={highlight}
            onChange={(e) => handleHighlightChange(index, e)}
          />
          <Button variant="contained" className="hover:text-white text-gray-500 border border-2 border-gray-700 my-2 text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 transition duration-150 ease-in" onClick={() => handleRemoveHighlight(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button variant="contained" className="hover:text-white text-gray-500 border border-2 border-gray-700 flex items-center justify-center" onClick={handleAddHighlight}>
        <PlusCircle size="18"/>Add Highlights
      </Button>
            {tags.map((tag, index) => (
        <div key={index}>
          <TextField
          fullWidth
            label={`Tag ${index + 1}`}
            value={tag}
            onChange={(e) => handleTagChange(index, e)}
          />
          <Button variant="contained" className="hover:text-white text-gray-500 border border-2 border-gray-700 my-2 text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 transition duration-150 ease-in" onClick={() => handleRemoveTag(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button variant="contained" className="hover:text-white text-gray-500 border border-2 border-gray-700 flex items-center justify-center" onClick={handleAddTag}>
        <PlusCircle size="18"/>Add Tags
      </Button>
        
          </Stack>
          <br />
          <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in" onClick={handlesubmit}>
            <span className="mr-2 uppercase">Submit</span>
          </button>
        </BaseCard>
      </Grid>

     
    </Grid>
      </FullLayout>
        </ThemeProvider>
  )
}

export default allproducts
