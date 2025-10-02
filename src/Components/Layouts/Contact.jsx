
import { Link } from 'react-router-dom'
import Countener from '../Countener'

const Contact = () => {
  return (
   <>
   <Countener>
  <div className=" text-center pt-[80px] ">
      <Link to={"https://www.facebook.com/pallab.mrida/"}>
      <button className={`cursor-pointer m-auto flex text-[30px] rounded-2xl font-dm font-bold border-4 border-black p-3`} >CONTACT</button>
      </Link>
    <p className={`text-center text-[16px] font-dm font-normal pt-[50px] pb-[40px]`}>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem <br/> sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
    <h1 className={` text-4xl font-dm font-bold relative inline-block after:absolute after:content-[''] after:h-[5px] after:w-[50px] after:bg-black after:top-[18px] after:left-[70px] before:absolute  before:h-[5px] before:w-[50px] before:bg-black before:content-[''] before:right-[70px] before:bottom-[16px]`}>PM</h1>
  </div>
  <div className="justify-center pt-[80px]">
     
     <input className={` m-auto pl-2.5 pb-1 block border-l-4 border-b-4 border-black outline-none`} type="text" placeholder='ENTER YOUR NAME*' />
     <input className={`m-auto mt-10 pl-2.5 pb-1 block border-l-4 border-b-4 border-black outline-none`} type="email" placeholder='ENTER YOUR EMAIL*' />
    
     <input className={`m-auto mt-10 pl-2.5 pb-1 block border-l-4 border-b-4 border-black outline-none`} type="text" placeholder='PHONE NUMBER' />
    
     <input className={`m-auto mt-10  pl-2.5 pb-[60px] block border-l-4 border-b-4 border-black outline-none`} type="text" placeholder='YOUR MESSAGE*' />


     <button className={` m-auto block mt-[60px] border-x-3 border-black px-4 text-[15px] font-dm font-semibold`}>SUBMIT</button>
    
     
  </div>
   </Countener>
   </>
  )
}

export default Contact
