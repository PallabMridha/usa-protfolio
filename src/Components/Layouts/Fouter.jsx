import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


const Fouter = () => {
  return (
   <>
   <footer
      class="bg-black max-w-container m-auto mt-10 text-white py-15 px-6 md:px-25 rounded-t-2xl"
    >
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        
        <div class="flex flex-col max-w-md">
          <div class="flex justify-center items-center lg:flex lg:justify-start  lg:items-center  space-x-3 mb-4">
            <div
              class="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center "
            >
              PM
            </div>
            <h1 class="text-xl font-semibold">POLLOB_MRIDHA</h1>
          </div>
          <p class="text-sm text-gray-300 text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit.
          </p>
        </div>

        
        <div class="flex flex-col gap-4 text-sm text-gray-300 m-auto lg:m-0">
          <div class="flex justify-center items-center lg:flex lg:justify-start lg:items-start space-x-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66667 5.00016C1.66667 4.55814 1.84227 4.13421 2.15483 3.82165C2.46739 3.50909 2.89131 3.3335 3.33334 3.3335H16.6667C17.1087 3.3335 17.5326 3.50909 17.8452 3.82165C18.1577 4.13421 18.3333 4.55814 18.3333 5.00016V15.0002C18.3333 15.4422 18.1577 15.8661 17.8452 16.1787C17.5326 16.4912 17.1087 16.6668 16.6667 16.6668H3.33334C2.89131 16.6668 2.46739 16.4912 2.15483 16.1787C1.84227 15.8661 1.66667 15.4422 1.66667 15.0002V5.00016Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.66667 6.6665L7.91751 11.6673C8.50858 12.1403 9.24302 12.3979 10 12.3979C10.757 12.3979 11.4914 12.1403 12.0825 11.6673L18.3333 6.6665"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>pallabmridha409@gmail.com</span>
          </div>
          <div class="flex justify-center items-center lg:flex lg:justify-start lg:items-start space-x-3">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5h12M9 3v2m6 6H3m6 2v2m6-2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>01321105301</span>
          </div>



          <div class="flex justify-center items-center lg:flex lg:justify-start lg:items-start  space-x-4 text-white ">
            <Link to={"https://www.facebook.com/pallab.mrida/"}target="_blank">
            <samp><FaFacebookF /></samp>
            </Link>
            <Link to={"https://github.com/PallabMridha"}target="_blank">
            <samp><FaGithub /></samp>
            </Link>
            <Link to={"https://www.linkedin.com/in/pallab-mridha-881795264"}target="_blank">
            <samp><FaLinkedinIn /></samp>
            </Link>
            
            
          </div>



        </div>
      </div>

      <div class="my-6 border-t border-gray-700"></div>

      <div
        class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
      >
        <div class="flex space-x-10 mb-4 md:mb-0">
          <a href="#" class="hover:text-white">HOME</a>
          <a href="#" class="hover:text-white">ABOUT US</a>
          <a href="#" class="hover:text-white">SERVICES</a>
          <a href="#" class="hover:text-white">WORKS</a>
        </div>
        <div>&copy; All Right Reserved</div>
      </div>
    </footer>
   </>
  )
}

export default Fouter
