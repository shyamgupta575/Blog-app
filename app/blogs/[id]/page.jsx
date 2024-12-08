"use client";
import { blog_data, assets } from "@/Assests/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/Components/Footer";
import axios from "axios";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchBlogData = async () => {
    // for (let i = 0; i < blog_data.length; i++) {
    //   if (Number(params.id) === blog_data[i].id) {
    //     setData(blog_data[i]);
    //     console.log("blog_data[i]", blog_data[i]);
    //     break;
    //   }
    // }

    // upr vala uncomment kre to fetchblog function me se async ko bhi hta dena 

    const response = await axios.get('/api/blog/', {
      params:{
        id: params.id
      }
    })
    setData(response.data);
  };
  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);
  return (
    data?<>
    <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          />
        </Link>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[7px_7px_0px_darkgray]">
          Get Started <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>
      <div className="text-center my-12 mb-24">
        <h1 className="lg:text-3xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
        <Image className="mx-auto mt-6 border border-white rounded-full" src={data.authorImg} alt="" width={60} height={60}/>
        <p className="mt-1 mx-auto pb-2 max-w-[700px] text-lg">{data.author}</p>
      </div>
    </div>
    <div className="mx-5 md:mx-auto max-w-[800px] mt-[-100px] mb-10">
      <Image className="border-4 border-white" src={data.image} alt="" width={1100} height={600}/>
      <h1 className="my-8 text-[26px] font-semibold">Introduction!</h1>
      <p>{data.description}</p>
      <h3 className="mt-5 mb-1 text-[18px] font-semibold">Define Your Audience</h3>
      <p className="mx-4 my-3">Identify the target readers for your blog.</p>
      <p className="mx-4 my-3">Tailor your content to their interests and needs.</p>
      <h3 className="mt-5 mb-1 text-[18px] font-semibold">Create Valuable Content</h3>
      <p className="mx-4 my-3">Offer insightful, informative, and engaging content.</p>
      <p className="mx-4 my-3">Solve problems or answer questions your readers may have.
      </p>
      <h3 className="mt-5 mb-1 text-[18px] font-semibold">Promote on Social Media</h3>
      <p className="mx-4 my-3">Engage with your audience to build a community around your blog.
      </p>
      <p className="mx-4 my-3">Share your blog posts on platforms like Twitter, Instagram, and LinkedIn.</p>
      <h3 className="mt-5 mb-1 text-[18px] font-semibold">Monetization Opportunities</h3>
      <p className="mx-4 my-3">Explore affiliate marketing, sponsored content, or ad placements as potential revenue streams.</p>
      <p className="mx-4 my-3">Ensure that monetization strategies align with the content and audience expectations.</p>
      <h3 className="mt-5 mb-1 text-[18px] font-semibold">Analyze Performance</h3>
      <p className=" mx-4 my-3">Use tools like Google Analytics to track the performance of your blog.</p>
      <p className="mx-4 my-3">Adjust your content strategy based on what resonates with your audience.</p>
      <h3 className="mt-5 mb-1 text-[18px] font-semibold">Conclusion</h3>
      <p className="mx-4 my-3">Blogging is a powerful way to share knowledge, connect with an audience, and build authority in your chosen niche. By consistently creating valuable content, optimizing for SEO, and engaging with readers, you can grow your blog and even monetize it effectively. </p>
      <div className="my-12">
          <p className="text-black font font-semibold my-4">Share this article on social media.</p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} height={50}/>
            <Image src={assets.twitter_icon} alt="" width={50} height={50}/>
            <Image src={assets.googleplus_icon} alt="" width={50} height={50}/>

          </div>
      </div>
    </div>
    <Footer/>
    </>:<></>
  );
};

export default Page;
