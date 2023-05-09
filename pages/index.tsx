import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '../components/banner'
import {Sliderdata} from '../components/sliderdata';
import Slider from '../components/slider';
import Instagram from '../components/instagram'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>

   
    <Banner heading='D manifest' message='People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do' />
    
    <Slider slides ={Sliderdata} />

    <Instagram />
    
    
    </>
    
  );
}
