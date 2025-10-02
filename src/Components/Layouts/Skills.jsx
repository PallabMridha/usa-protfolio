import React from 'react'
import Countener from '../Countener'
import Image from '../Image'
import skillone from '../../assets/Group 12.png'
import skilltwo from '../../assets/Group 13.png'
import skillthree from '../../assets/Group 14.png'
import skillfure from '../../assets/bootstrap.png'
import skillfive from '../../assets/figma.png'
import skillsix from '../../assets/image-7.png'
import skillseven from '../../assets/JavaScript-Emblem.png'
import Flex from '../Flex'

const Skills = () => {
  return (
   <>
   <div className="pt-[60px]">
    <Countener>
        <button className={`m-auto  rounded-2xl flex text-[30px] font-dm font-bold border-4 border-black p-3`} >SKILLS</button>
        <h1 className={`pt-[90px] text-[30px] font-bold font-dm`}>USING NOW:</h1>
        <Flex className={`justify-between pt-[50px]`}>
           <div className="">
             <Image  src={skillone}/>
            <p className={`text-[24px] font-dm font-normal`}>HTML5</p>
           </div>
           <div className="">
             <Image className={`m-auto`} src={skilltwo} />
            <p className={`text-center text-[24px] font-dm font-normal`}>CSS3</p>
           </div>
           <div className="">
             <Image className={`m-auto`} src={skillthree}/>
            <p className={`text-center text-[24px] font-dm font-normal`}>REACT</p>
           </div>
           <div className="">
             <Image className={`m-auto`}  src={skillfure}/>
            <p className={`text-[24px] font-dm font-normal`}>BOOTSTRAP</p>
           </div>
           
        </Flex>
        <Flex className={`pt-[45px]`}>
          <div className="">
             <Image className={`m-auto`} src={skillfive}/>
            <p className={`text-[24px] font-dm font-normal`}>FIGMA</p>
           </div>
          <div className="pl-[205px]">
             <Image className={`m-auto w-[180px]`} src={skillsix}/>
            <p className={`text-[24px] font-dm font-norma uppercase`}>Thilwine css</p>
           </div>
          <div className="pl-[205px]">
             <Image className={`m-auto w-[145px]`} src={skillseven}/>
            <p className={`text-[24px] font-dm font-norma uppercase pt-4`}>Javascript</p>
           </div>
        </Flex>
    </Countener>
   </div>
   </>
  )
}

export default Skills
