
import Countener from "../Countener"
import Flex from "../Flex"
import Image from "../Image"
import logo from "../../assets/logo 1.png"
import { FaFacebook } from "react-icons/fa";
import boxtwo from "../../assets/VectorTwo.png"
import benerimage from "../../assets/sayed-mridha-pallob.png"
import boxThree from "../../assets/VectorThree.png"
import { Link } from "react-router-dom"






const Bener = () => {


  return (
    <>
      <div className="bg-[url(/src/assets/bgimage.png)] w-full h-[600px] mt-6 bg-center bg-cover bg-no-repeat">
      <Countener>
        <Flex className={`justify-between`}>
          <div className="pt-[40px]">
            <Image src={logo}/>

            <div className="pt-[100px]">
              <h1 className={`text-[40px] font-bold font-dm`}>Hi, I am<br/><samp className={`text-[80px] font-bold font-dm`}> Pollob Mridha</samp></h1>
            <p className={`text-[25px] font-bold font-dm text-pramiry pt-[-0px]`}>full stack developer</p>
            <Flex className={`gap-x-5 pt-[40px]`}>
              <div className="bg-box w-12 h-12  ">
                <Link to={"https://www.facebook.com/pallab.mrida/"}target="_blank">
                  <FaFacebook className="m-auto text-[30px] mt-[9px]"/>
                </Link>
              </div>

              <div className="bg-box w-12 h-12  ">
              <Link to={"https://github.com/PallabMridha" }target="_blank">
                <Image className={`m-auto pt-1.5 `} src={boxtwo}/>
              </Link>
              </div>

             <Link to={"https://www.linkedin.com/in/pallab-mridha-881795264"}target="_blank">
              <div className="bg-box w-12 h-12  ">
                <Image className={`m-auto pt-1.5`} src={boxThree}/>
              </div>
             </Link>
            </Flex>

            </div>
          </div>


          <div className="pt-[40px]">
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
            <div className="pt-[66px]">
              <Image className={`max-w-100 rounded-4xl`} src={benerimage}/>
            </div>
          </div>
        </Flex>
      </Countener>
      </div>
    </>
  )
}









export default Bener
