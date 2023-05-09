import React from 'react'
import Image from 'next/image'

const porfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center '>
        
        <h1 className='text-2xl font-bold p-4'> Travel Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-sapn-3 row-span-2 gap-4'>
                <Image 
                src='https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                alt='/'
                layout='responsive'
                height='400'
                width='600'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                 src='https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                 width='215'
                 height='217'
                 layout='responsive'
                 objectFit='cover'
                 alt='/'

                 
                 />

            </div>

            <div className='w-full h-full'>
                <Image 
                 src='https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                 width='215'
                 height='217'
                 layout='responsive'
                 objectFit='cover'
                 alt='/'
                    
                 
                 />

            </div>

            <div className='w-full h-full'>
                <Image 
                 src='https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                 width='215'
                 height='217'
                 layout='responsive'
                 objectFit='cover'
                 alt='/'
                    
                 
                 />

            </div>

            <div className='w-full h-full'>
                <Image 
                 src='https://images.unsplash.com/photo-1682712581615-18fc7a7b9092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                 width='215'
                 height='217'
                 layout='responsive'
                 objectFit='cover'
                 alt='/'
                    
                 
                 />

            </div>
        </div>
    </div>
  )
}

export default porfolio