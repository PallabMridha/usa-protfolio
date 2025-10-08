
import Countener from "../Countener"
import Flex from "../Flex"
import Image from "../Image"
import logo from "../../assets/logo 1.png"
import { FaFacebook } from "react-icons/fa";
import boxtwo from "../../assets/VectorTwo.png"
import benerimage from "../../assets/sayed-mridha-pallob.png"
import boxThree from "../../assets/VectorThree.png"
import { Link } from "react-router-dom"
import TextType from "/src/Animation/TextType"
import SplitText from "/src/Animation/SplitText";
import AnimatedContent from "/src/Animation/AnimatedContent";


const Bener = () => {

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

//  className="bg-[url(/src/assets/bgimage.png)] w-full h-[600px] mt-6 bg-center bg-cover bg-no-repeat"

  return (
    <>
      <div className="bg-bg-nav mt-3">
      <Countener>
        <Flex className={`justify-between`}>
          <div className="pt-[40px]">
            <Image src={logo}/>

            <div className="pt-[100px]">
            
            <TextType className={`text-[40px] font-bold font-dm text-white`}
              text={["Hi, I am Pollob Mridha", "Hi, I am Pollob Mridha", "Hi, I am Pollob Mridha"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              loop={true} 
  
            />

          <div className="">
              <SplitText
                text="Full Stack Developer"
                className="text-[25px] font-bold font-dm text-white"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
          </div>


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

            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
              >
              <div>
                <button className={` mt-8 mb-8 rounded-2xl uppercase font-bold text-  [15px] dm text-white border items-center px-5 py-3`}>CONTACT ME </  button>
              </div>
            </AnimatedContent>


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
