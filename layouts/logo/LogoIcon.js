import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/" style={{textDecoration:"none"}}><a className="" style={{textDecoration:"none",color:"black"}}>
      {/* <Image src={LogoDark} alt={LogoDark} /> */}
      <div className=""> <h1 className='text-black-700 mt-2 mb-8 ml-2 text-3xl font-bold'>ShoesPedia</h1></div>
      </a></Link>
  );
};

export default LogoIcon;
