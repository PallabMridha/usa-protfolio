import React from 'react'
import Image from '../Image'
import Countener from '../Countener'

const ItBrince = () => {
  return (
   <>
   <div className="bg-[url(/src/assets/Background.png)] w-full mt-10">
    <Countener className={`p-10`}>
      <h1 className={`text-[30px] font-dm font-bold text-white`}>IT BERRIES</h1>
      <p className={`text-[15px] font-dm font-normal text-white pt-5 pb-5`}>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
      <button className={`border-x-3 border-white px-4 text-[15px] font-dm font-normal text-white`}>READ MORE</button>
    </Countener>
   </div>
   </>
  )
}

export default ItBrince
