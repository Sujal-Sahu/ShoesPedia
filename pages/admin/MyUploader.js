import { useState,useEffect } from 'react';
import Image from 'next/image';

function MyUploader() {
  const [file, setFile] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
      formData.append('image', file);
     console.log(formData);
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/upload`, {
          method: 'POST',
          ContentType:"multipart/form-data",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Image uploaded:', data.image);
          // TODO: Perform any additional actions after successful upload
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Image upload failed:',error);
      }
    }
  };

  const displayImage=(file)=>{
    fetch(`http://localhost:3000/api/getImage?filename=${file}`)
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
  return (
    <div>
      {/* <h2>Image Uploader</h2> */}
      <form onSubmit={handleSubmit} encType="multipart/form-data" className='border border-dashed border-2 border-black flex flex-row justify-between items-center py-4 px-20 mb-2'>
        <input type="file" onChange={handleFileChange}/>
        <button type="submit" className='text-sm bg-blue-600 px-4 py-2 text-white duration-100 hover:bg-blue-800'>Upload</button>
      </form>
      {/* <div className="imageContainer" id='imageContainer'>
        {displayImage('image-1688132098826-501880168')}
      </div> */}
  {/* {imageBase64 && (
        <img src={`data:image/*;base64,${imageBase64}`} alt="Uploaded Image" />
      )} */}
      {/* <Image src={`/uploads/image-1688128334675-551360558.png`} alt="Uploaded Image" width={500} height={300} /> */}
    </div>
  );
}

export default MyUploader;