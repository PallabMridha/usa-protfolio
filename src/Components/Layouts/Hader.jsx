import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import { Link } from 'react-router-dom';


const Hader = () => {
  return (
    <>
      <div className="bg-bg-nav  p-2.5">
        <Countener>
          <Flex className={` `}>
            <div className=" text-white font-bold flex items-center justify-cente ">
          
             <Link to={"/"} className={``}>
               <h1 className={``}>PM</h1>
             </Link>
            
            </div>
            <ul className={'flex items-center m-auto'}>
            
             <Link to={"/"}>

              <li className={`font-bold text-[17px] pr-10 dm text-white hover:text-red-500`}>Home</li>
             


             
             </Link>             

             
            
               <Link to={"/about"}>
               <li className={` font-bold text-[17px] pr-10 dm text-white`}>About Me</li>
               </Link>



              <Link to={"/service"}>
               <li className={`font-bold text-[17px] pr-10 dm text-white`}>Skills</li>
              </Link>
              


            
              <Link to={"/resume"}>
              <li className={`font-bold text-[17px] pr-10 dm text-white`}>Portfolio</li>
              </Link> 


               <Link to={"/"}>
            <button className={` rounded-2xl uppercase font-bold text-[15px] dm text-white border items-center px-5 py-3`}>CONTACT ME </button>
            </Link>
           
            </ul>

           

          </Flex>
        </Countener>
      </div>

    </>
  )
}

export default Hader
