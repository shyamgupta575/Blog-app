'use client'
import AllSubscription from "@/Components/adminComponents/AllSubscription";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Page = () => {
  const [emails,setEmails] = useState([]);

  const fetchEmail = async() =>{
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  }

  const deleteSubscription = async(mongoId) =>{
    const response = await axios.delete("/api/email",{
      params: {
        id: mongoId
      }
    });
    toast.success(response.data.msg);
    fetchEmail();
}

  useEffect(()=>{
    fetchEmail()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt12 sm:pl-16'>
      <h1>All Subscription</h1>
      <div className='relative g-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide' >
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text bg-gray-700 text-left uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                EMAIL SUBSCRIPTION
              </th>
                <th scope='col' className='px-6 py-3'>
                DATE
                </th>
                <th scope='col' className='px-6 py-3'>
                ACTION
                </th>

            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) =>{
              return <AllSubscription key={index} mongoId={item._id} email={item.email} date={item.date} deleteSubscription={deleteSubscription} />
            
            })}
            
          </tbody>

        </table>
      </div>

    </div>
    
  )
}

export default Page