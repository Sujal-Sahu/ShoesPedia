import Navbar from 'Components/Navbar'
import React from 'react'
import Image from 'next/image'
import home1 from 'assets/images/ImageGalleryPage/home1.png'
import home2 from 'assets/images/ImageGalleryPage/home2.png'
import home3 from 'assets/images/ImageGalleryPage/home3.png'
import home4 from 'assets/images/ImageGalleryPage/home4.png'
import addproduct from 'assets/images/ImageGalleryPage/addproduct.png'
import admin1 from 'assets/images/ImageGalleryPage/admin1.png'
import admin3 from 'assets/images/ImageGalleryPage/admin3.png'
import adminproducts1 from 'assets/images/ImageGalleryPage/adminproducts1.png'
import adminorders from 'assets/images/ImageGalleryPage/adminorders.png'
import cart from 'assets/images/ImageGalleryPage/cart.png'
import rebook1 from 'assets/images/ImageGalleryPage/rebook1.png'
import rebook2 from 'assets/images/ImageGalleryPage/rebook2.png'
import rebook3 from 'assets/images/ImageGalleryPage/rebook3.png'
import imageuploader from 'assets/images/ImageGalleryPage/imageuploader.png'
import addproduct2 from 'assets/images/ImageGalleryPage/addproduct2.png'
import checkout from 'assets/images/ImageGalleryPage/checkout.png'
import userorder from 'assets/images/ImageGalleryPage/order.png'
import myorders from 'assets/images/ImageGalleryPage/myorders.png'
import Footer from 'Components/Footer'
const imagegallery = ({user,logout}) => {
  return (
    <div>
        <Navbar user={user} logout={logout} heading="ImageGallery"/>
        <div className="h-20"></div>
        <div className="main-top-heading">
       <div className='font-bold text-4xl mx-auto text-center mt-16'>Some Glimpses of Website</div>
       <div className="text-center">(As a User, you can't access whole website and also due to lack of time you are unable to visit all the pages i made this page to give you a view of website.)</div>
       </div>
       <section className="content">
           <section className="homepagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">1. Home Page</h1></div>
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={home1} width={1000} height={1000} alt='Image Related to the home Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={home2} width={1000} height={1000} alt='Image Related to the home Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={home3} width={1000} height={1000} alt='Image Related to the home Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={home4} width={1000} height={1000} alt='Image Related to the home Page.'/>
                   </div>
               </div>
           </section>
           <section className="Rebookpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">2. Rebook/Puma/Adidas/Campus/Nike/Bata Page</h1></div>
               <div className="subheading text-center">(All the Pages have a Almost Same UI)</div>
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={rebook1} width={1000} height={1000} alt='Image Related to the Rebook Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={rebook2} width={1000} height={1000} alt='Image Related to the Rebook Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={rebook3} width={1000} height={1000} alt='Image Related to the Rebook Page.'/>
                   </div>
                   </div>
           </section>
           <section className="cartpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">3. Cart Page</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={cart} width={1000} height={1000} alt='Image Related to the Cart Page.'/>
                   </div>
                   
               </div>
           </section>
           <section className="checkoutpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">4. CheckOut Page</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={checkout} width={1000} height={1000} alt='Image Related to the Checkout Page.'/>
                   </div>
                  
               </div>
           </section>
           <section className="adminpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">5. Admin Page</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={admin1} width={1000} height={1000} alt='Image Related to the Admin Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={admin3} width={1000} height={1000} alt='Image Related to the Admin Page.'/>
                   </div>
                  
               </div>
           </section>
           <section className="imageuploaderpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">6. Image Uploader Page for Admin</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={imageuploader} width={1000} height={1000} alt='Image Related to the Admin Image Uploader Page.'/>
                   </div>
                  
               </div>
           </section>
           <section className="adminproductspagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">7. View Products Page for Admin</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={adminproducts1} width={1000} height={1000} alt='Image Related to the Admin products Page.'/>
                   </div>
                 
               </div>
           </section>
           <section className="adminorderspagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">8. View Orders Page for Admin</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={adminorders} width={1000} height={1000} alt='Image Related to the Admin Orders Page.'/>
                   </div>
                  
               </div>
           </section>
           <section className="adminorderspagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">9. Add Product Page for Admin</h1></div>
               {/* <div className="subheading text-center">(All the Pages have a Almost Same UI)</div> */}
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={addproduct} width={1000} height={1000} alt='Image Related to the Admin Orders Page.'/>
                   </div>
                   <hr className='w-[80%] h-4 border border-2 border-solid border-black mt-4' style={{height: "5px"}}/>
                <div className="img mt-4">
                   <Image src={addproduct2} width={1000} height={1000} alt='Image Related to the Admin Page.'/>
                   </div>
               </div>
           </section>
           <section className="orderpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">10. Order Page For user</h1></div>
               <div className="subheading text-center">(This page shows the order details of a user after payment like transaction ID or other details. It shows the details of a specific order related to user.)</div>
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={userorder} width={1000} height={1000} alt='Image Related to the Order Page.'/>
                   </div>
                   
               </div>
           </section>
           <section className="Rebookpagephotos">
               <div className="text-center mt-20 text-3xl font-bold"><h1 className="">10. My Orders Page</h1></div>
               <div className="subheading text-center">(This Page is used to show all the orders related to user.)</div>
               <div className="flex flex-col items-center justify-center">
                <div className="img mt-8">
                   <Image src={myorders} width={1000} height={1000} alt='Image Related to the My Orders Page.'/>
                   </div>  
               </div>
           </section>
           
       </section>
       <Footer/>
    </div>
  )
}

export default imagegallery
