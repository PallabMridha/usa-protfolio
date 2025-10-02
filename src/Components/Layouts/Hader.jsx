import React from 'react'
import Countener from '../Countener'
import Flex from '../Flex'
import { Link } from 'react-router-dom';


const Hader = () => {
  return (
    <>
      <div className="bg-black  p-2.5">
        <Countener>
          <Flex className={` `}>
            <div className=" bg-white  text-black font-bold rounded-full w-10 h-10 flex items-center justify-cente ">
          
             <Link to={"/"} className={`m-auto`}>
               <h1 className={``}>PM</h1>
             </Link>
            
            </div>
            <ul className={'flex items-center m-auto'}>
            
             <Link to={"/"}>

              <li className={`font-bold text-[17px] pr-10 dm text-white`}>Home</li>
             
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
            <button className={` rounded-2xl uppercase font-bold text-[15px] dm text-black bg-white items-center px-5 py-3`}>CONTACT ME </button>
            </Link>
           
            </ul>

           

          </Flex>
        </Countener>
      </div>

    </>
  )
}

export default Hader
