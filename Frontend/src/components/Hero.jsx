import React from 'react'
import './Hero.css'
const Hero=()=> {
  return (
    <>
    <div className='home '>
        <div className='relative flex w-[80%]   m-auto top-[190px]   '>
            <div className='w-[50%] p-4 box-border text-white'>
            <h1 className='font-Aldrich text-[3rem] xl:text-[7rem] lg:text-[5rem] text-center font-semibold xl:leading-[150px] mt-4'>WE THINK, WE DO</h1>
            <p className='text-center'>
            We are the team of Decentaralized Personal Health Record application . This application manages all record of patient through blockchain
            </p>
            </div>
            <div className='flex w-[50%] items-center justify-center'>
               <div className='w-[70%] h-[300px] bg-red-300 rounded-full'>
                <img className="relative z-10 h-[100%] w-[100%] rounded-full" src='\public\image.jpg'/>
                
               </div>
            </div>
           
        </div>
         <div className='try'>
         </div>
         <div className=' flex m-auto items-center justify-center mt-[280px] pl-[80px] pr-[80px]'>
         <svg width="1200" height="135" viewBox="0 0 1201 135" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 67.2686C52.5 -15.7319 141 -10.7319 187.5 67.2686C234 145.269 325.5 160.269 397 67.2686C468.5 -25.7319 568 15.7682 598 75.7682C628 135.768 744.5 172.268 801 67.2686C857.5 -37.7307 955.5 -2.73196 999 67.2686C1042.5 137.269 1140 155.268 1200 67.2686" stroke="url(#paint0_linear_5_3)"/>
<defs>
<linearGradient id="paint0_linear_5_3" x1="1" y1="67.396" x2="1200" y2="67.396" gradientUnits="userSpaceOnUse">
<stop stop-color="#578ECF"/>
<stop offset="1" stop-color="#4CB35D"/>
</linearGradient>
</defs>
</svg>

         </div>
    </div>
    </>
  )
}
export default Hero;