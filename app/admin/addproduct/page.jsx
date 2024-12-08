'use client'
import { assets } from '@/Assests/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'
const Page = () => {
  const [image, setImage] = useState(false)

  const [data,setData]=useState({
    title:'',
    description:'',
    category:'Startup',
    author:'Shyam Gupta',
    authorImg:'/author_img.png'
  })
  const onChangeHandeler= (event) =>{
    const name= event.target.name;
    const value = event.target.value;
    setData(data =>({...data,[name]:value}))
    console.log(data)
  }

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',data.title);
    formData.append('description',data.description);
    formData.append('category',data.category);
    formData.append('author',data.author);
    formData.append('authorImg',data.authorImg);
    formData.append('image',image);

    const response = await axios.post('/api/blog',formData);
    if(response.data.success){
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title:'',
          description:'',
          category:'Startup',
          author:'Shyam Gupta',
          authorImg:'/author_img.png'
        })
    }
    else{
      toast.error("Error")
    }
  }
  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} alt="" width={140} height={70}/>
          <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required/>
        </label>
        <p className='text-xl mt-4'>Blog Title</p>
        <input name='title' onChange={onChangeHandeler} value={data.title} className='w-full sm:w-[500px] mt-3 px-4 py-3 border border-gray-900' type='text' placeholder='Type Title' required/>
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea name='description' onChange={onChangeHandeler} value={data.description} className='w-full sm:w-[500px] mt-3 px-4 py-3 border border border-gray-900' type='text' placeholder='write your content here' rows={6} required/>
        <p className='text-xl mt-4'>Blog Category</p>
        <select name='category' onChange={onChangeHandeler} value={data.category}  className='mt-3 border border-gray-900 px-3 py-2' >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifecycle">Lifecycle</option>
        </select><br></br>
        <button type='submit' className='bg-gray-900 py-3 mt-3 px-5 text-center text-white text-xl'>Add</button>
      </form>
    </>
  )
}

export default Page