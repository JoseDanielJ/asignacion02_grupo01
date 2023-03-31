import React from 'react'
import Image from 'next/image'

interface SrcImage {
   srcInfo: string
   altInfo: string
}

const ImgContainer = ({ srcInfo, altInfo }: SrcImage) => {
   return (
         <Image className=" h-4/5 w-4/5" src={srcInfo} alt={altInfo} width={500} height={500} unoptimized/>
   )
}

export default React.memo(ImgContainer)
