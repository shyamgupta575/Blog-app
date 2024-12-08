import React from 'react'

function AllSubscription({email,date,deleteSubscription,mongoId}) {
    const EmailDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {email?email:"No Email"}
        </th>
        
        <td className='px-6 py-4'>
            {EmailDate.toDateString()}
        </td>
        <td onClick={()=>deleteSubscription(mongoId)} className='px-6 py-4 cursor-pointer'> 
            X
        </td>

    </tr>
  )
}

export default AllSubscription
