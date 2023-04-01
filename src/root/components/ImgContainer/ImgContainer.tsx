import React, {useState } from 'react'
import Image from 'next/image'

interface SrcImage {
   srcInfo: string
   altInfo: string
}

const ImgContainer = ({ srcInfo, altInfo }: SrcImage) => {
      const [isHide,setHide] = useState<boolean>(false)
      
      const hideElement=()=>{
         setTimeout(()=>{
            setHide(true)
         },1000)
      };

      hideElement()

      return (
         <div className='w-full h-full relative flex justify-center'>
            {isHide?null:<p className=' absolute -top-4 animate-ren text-base font-mono' >Render...</p>}
             <Image className=" h-4/5 w-4/5" src={srcInfo} alt={altInfo} width={500} height={500} unoptimized/>
         </div>
        
      )
}

export default React.memo(ImgContainer)
