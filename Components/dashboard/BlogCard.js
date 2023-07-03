import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
 
const blogs = [
  {
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Super awesome, Rebook Shoes is coming soon!",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corrupti fuga nam accusamus ab dolores!",
    btncolor: "error",
  },
  {
    img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Super awesome, Nike brand is coming soon!",
    subtitle:
       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corrupti fuga nam accusamus ab dolores!",
    btncolor: "warning",
  },
  {
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    title: "Super awesome, New brand is coming soon!",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corrupti fuga nam accusamus ab dolores!",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image src={blog.img} alt="img" width={400} height={100} style={{width:"378px",height:"270px"}} />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              <button type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 px-2 mt-2 transition duration-150 ease-in">
            <span className="mr-2 uppercase">Read More...</span>
          </button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
