import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import Image from '../Image'
import projectone from '../../assets/projectone.png'
import projecttwo from '../../assets/downloadtwo.png'
import projectthree from '../../assets/projectthree.png'
import { Link } from 'react-router-dom'


const MyProject = () => {
  return (
    <>
    <div className="">
        <Countener>
             <button className={`m-auto flex text-[30px] font-dm rounded-2xl font-bold border-4 border-black p-3  mb-[70px] mt-[60px]`} >My Other Project</button>
            <Flex className={`gap-x-8`}>
                <div className=" text-center bg-teal-300 rounded-2xl">
                    <Image className={`m-auto pt-5  w-[85%]`} src={projectone}/>
                    <Link to={"https://jsx-03.vercel.app/"}>
                     <button className={`mt-[20px] mb-[25px] text-[20px] text-white rounded-2xl font-dm font-bold border-2 border-white p-3 mb cursor-pointer `} >Live This Project</button>
                    </Link>
                </div>
                <div className=" text-center bg-teal-300 rounded-2xl">
                    <Image className={`m-auto pt-5  w-[85%]`} src={projecttwo}/>
                    <Link to={"https://jsx04-hazel.vercel.app/"}>
                     <button className={`mt-[20px] text-[20px] text-white rounded-2xl font-dm font-bold border-2 border-white p-3 mb cursor-pointer`} >Live This Project</button>
                    </Link>
                </div>
                <div className=" text-center bg-teal-300 rounded-2xl">
                    <Image className={`m-auto pt-5  w-[85%]`} src={projectthree}/>
                    <Link to={"https://pallabmridha.github.io/inovete/"}>
                     <button className={`mt-[20px] text-[20px] text-white rounded-2xl font-dm font-bold border-2 border-white p-3 mb cursor-pointer`} >Live This Project</button>
                    </Link>
                </div>
                <div className=" text-center bg-teal-300 rounded-2xl">
                    <Image className={`m-auto pt-5  w-[85%]`} src={projectone}/>
                    <Link to={"https://jsx-03.vercel.app/"}>
                     <button className={`mt-[20px] text-[20px] text-white rounded-2xl font-dm font-bold border-2 border-white p-3 mb cursor-pointer`} >Live This Project</button>
                    </Link>
                </div>
                
            
           
            </Flex>
        </Countener>
    </div>
    </>
  )
}

export default MyProject
