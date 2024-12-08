import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/Assests/assets";
import axios from "axios";
import { toast } from "react-toastify";
function Header() {
  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email', formData);
    if(response.data.success){
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error");
    }

  }

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[7px_7px_0px_darkgray]">
          Get Started <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="text-xs mt-5 max-w-[740px] m-auto sm:text-base">
          While I like to think that the content is the only thing that draws
          people to a blog post and keeps them reading.
        </p>
        <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[7px_7px_0px_darkgray]">
          <input
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
            type="email"
            placeholder="Enter Your Email Id"
            className="pl-4 outline-none"
          ></input>
          <button type="submit" className="border-1 border-black px-4 py-4 sm:px-8 active:bg-gray-600 active:text-white">
            {" "}
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
