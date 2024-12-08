import { assets } from '@/Assests/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm-pl-14 py-3 border border-black'>
            <Image src={assets.logo} alt="" width={118}/>
        </div>
        <div className='w-28 sm:w-80 py-12 h-[100vh] relative border border-black '>
            <div className='w-[50%] sm:w-[80%] absolute right-5'>
                <Link href='/admin/addproduct' className='flex items-center border border-black gap-3 font-small px-3 py-1 bg-white shadow-[5px_5px_0_gray]'>
                    <Image src={assets.add_icon} alt="" width={28} /><p>Add Blog</p>
                </Link>
                <Link href='/admin/bloglist' className='mt-5 flex items-center border border-black gap-3 font-small px-3 py-1 bg-white shadow-[5px_5px_0_gray]'>
                    <Image src={assets.blog_icon} alt="" width={28} /><p>Blog List</p>
                </Link>
                <Link href='/admin/subscription' className='mt-5 flex items-center border border-black gap-3 font-small px-3 py-1 bg-white shadow-[5px_5px_0_gray]'>
                    <Image src={assets.email_icon} alt="" width={28} /><p>Subscription</p>
                </Link>
            </div>
            
        </div>
    </div>
  )
}

export default SideBar