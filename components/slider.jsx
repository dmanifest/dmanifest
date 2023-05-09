import React, { useState } from 'react';
import { Sliderdata } from './sliderdata';
import Image from 'next/image';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

const Slider = ({slides}) => {
  const [current,setCurrent] = useState(0)
  const length =slides.length

  const nextSlide =() =>{
    setCurrent(current ===length - 1 ? 0 :current + 1 )
  };
  const preSlide =()=>{
    setCurrent(current === 0 ? length -1 :current -1)
  };

  if(!Array.isArray(slides) || slides.length <= 0){
    return null ;
  }



  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
        <div className='relative flex justify-center p-4'>

       
            {Sliderdata.map ((slide ,index) =>{
                return(

                  <div key= {index} className= {index === current ? 'opacity -[1] ease-in duration-1000 ':'opacity-0' } >

                    

                    < FaArrowAltCircleLeft onClick={preSlide} className='absolute top-[50%] left-[30px] cursor-pointer z-[2] text-white/70' size={50} />

                    {index == current && (
                    <Image 
                    src={slide.image} 
                    alt='/'
                     width='1440' 
                     height='400'
                     className=' object-cover'
                      />
                      )}

< FaArrowAltCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] cursor-pointer z-[2] text-white/70' size={50} />
</div>
                     
                );
                
            })}
        </div>

    </div>
  );
};

export default Slider;