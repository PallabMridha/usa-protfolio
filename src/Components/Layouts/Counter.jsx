import React from 'react'

const Counter = () => {
  return (
   <>
   <section class="max-w-container m-auto mt-20 lg:mt-25">
      <div class="gap-5 text-center w-full flex flex-wrap lg:flex-none">
       
        <div class="mr-2 w-[45%] lg:w-[22%]">
          <div class="flex justify-center items-center">
            <h1
              class="counterUp text-5xl font-semibold font-dm"
              data-number="100"
              data-speed="1000"
            >
            15  
            </h1>
            <h3 class="text-5xl font-semibold font-dm">+</h3>
          </div>
          <p class="mt-2 font-normal font-dm">PROJECTS</p>
        </div>
       
        <div class="mr-2 w-[45%] lg:w-[22%]">
          <div class="flex justify-center items-center">
            <h1
              class="counterUp text-5xl font-semibold font-dm"
              data-number="70"
              data-speed="1000"
            >
              0
            </h1>
            <h3 class="text-5xl font-semibold font-poppins">+</h3>
          </div>
          <p class="mt-2 font-normal font-dm">WINNING AWARD</p>
        </div>
        
        <div class="mr-2 w-[45%] lg:w-[22%]">
          <div class="flex justify-center items-center">
            <h1
              class="counterUp text-5xl font-semibold font-dm"
              data-number="24"
              data-speed="1000"
            >
              6
            </h1>
            <h3 class="text-5xl font-semibold font-dm">+</h3>
          </div>
          <p class="mt-2 font-normal font-dm">HAPPY CLIENTS</p>
        </div>
      
        <div class="mr-2 w-[45%] lg:w-[22%]">
          <div class="flex justify-center items-center">
            <h1
              class="counterUp text-5xl font-semibold font-dm"
              data-number="10"
              data-speed="1000"
            >
              2
            </h1>
            <h3 class="text-5xl font-semibold font-dm">+</h3>
          </div>
          <p class="mt-2 font-normal font-dm">YEAR EXPERIENCE</p>
        </div>
        
      </div>
    </section>
   </>
  )
}

export default Counter
