import React from 'react'

const contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        
        <h1 className='text-center font-bold text-2xl p-4'>Lets work together </h1>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type='text' placeholder='Name' />
                <input className='border shadow-lg p-3' type='email' placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-3' type='text' placeholder='subject' />
            <textarea className='border shadow-lg p-3 w-full ' placeholder='Message' rows="10" cols='30'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2' > Subbmit</button>
        </form>
    </div>
  )
}

export default contact