import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import sladerone from '../../assets/sliderone.png'
import sladertwo from '../../assets/slidertwo.png'

const Aboutus = () => {
  return (
   <>
  <div className="">
     <Countener className={`pt-10`} >
    <div className="text-center">
        <button className={` text-[30px] rounded-2xl font-dm font-bold border-4 border-black p-3`} >ABOUT ME</button>
        <p className={`pt-5 pb-5 text-[15px] font-dm font-bold`}>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br/> sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
        <button className={`border-x-3 border-black px-4 text-[15px] font-dm font-semibold`}>EXPLORE</button>
        <div className="pt-28">
            <h1 className={`text-4xl font-dm font-bold relative inline-block after:absolute after:content-[''] after:h-[5px] after:w-[50px] after:bg-black after:top-[18px] after:left-[70px] before:absolute  before:h-[5px] before:w-[50px] before:bg-black before:content-[''] before:right-[70px] before:bottom-[16px]`}>PM</h1>
        </div>
    </div>

    <div className="pt-10">
            <Flex className={`gap-x-4`}>
                <div className="w-30% bg-amber-100 p-2.5">
                   <Flex>
                     <Image className={`w-[45px] h-[40px]`} src={sladerone}/>
                 <div className="">
                       <h1 className={`text-[22px] font-dm font-bold`}>DESIGN</h1>
                    <p className={`text-[14px] font-dm font-light`}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                 </div>
                   </Flex>
                </div>
                <div className="w-30% bg-amber-100 p-2.5">
                   <Flex>
                     <Image className={`w-[45px] h-[40px]`} src={sladertwo}/>
                 <div className="">
                       <h1 className={`text-[22px] font-dm font-bold`}>DEVELOPMENT</h1>
                    <p className={`text-[14px] font-dm font-light`}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                 </div>
                   </Flex>
                </div>
                <div className="w-30% bg-amber-100 p-2.5">
                   <Flex>
                     <Image className={`w-[45px] h-[40px]`} src={sladerone}/>
                 <div className="">
                       <h1 className={`text-[22px] font-dm font-bold`}>MAINTENANCE</h1>
                    <p className={`text-[14px] font-dm font-light`}>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                 </div>
                   </Flex>
                </div>
               
            </Flex>
        </div>
         <div className="pt-28 text-center">
            <h1 className={`text-4xl font-dm font-bold relative inline-block after:absolute after:content-[''] after:h-[5px] after:w-[50px] after:bg-black after:top-[18px] after:left-[70px] before:absolute  before:h-[5px] before:w-[50px] before:bg-black before:content-[''] before:right-[70px] before:bottom-[16px]`}>PM</h1>
        </div>
   </Countener>
  </div>
   </>
  )
}

export default Aboutus
