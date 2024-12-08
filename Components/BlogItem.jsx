import { assets, blog_data } from "@/Assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogItem = ({ image, title, description, category, id }) => {
  return (
    <div>
      <div className="max-w-[330px] sm:max-w[300px] bg-white border border-black hover:shadow-[7px_7px_0px_darkgrey]">
        <Link href={`/blogs/${id}`}>
          <Image
            src={image}
            alt="blogitem"
            width={400}
            height={400}
            className="border-b border-black"
          ></Image>
        </Link>
        <p className="ml-5 mt-5 px-1 bg-black text-white text-sm inline-block">
          {category}
        </p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-lg font  tracking-tight text-gray-700">
            {description}
          </p>
          <Link href={`/blogs/${id}`}>
            <div className="flex gap-2">
              Read more{" "}
              <Image src={assets.arrow} alt="arrow" width={30} height={5} />
            </div>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
