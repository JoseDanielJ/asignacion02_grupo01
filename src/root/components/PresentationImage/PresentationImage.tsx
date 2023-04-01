import React from 'react'
import InfoHeader from '../InfoHeader/InfoHeader'
import ImgContainer from '../ImgContainer/ImgContainer'
import { Information } from '../Container/Container'

interface PresentationProp{
    images:Information[],
    loadImagesClick:any
}

const PresentationImage = ({images,loadImagesClick}:PresentationProp) => {
  return (
    <main>

         <InfoHeader />
         
         <div className="grid grid-cols-5 justify-items-center mt-4 order-last md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 pb-12">
            {images.map((imag, index) => (<ImgContainer key={index} srcInfo={imag.urls.small} altInfo="" />))}
         </div>

         <div className=" w-full px-auto b bg-slate-500 flex  justify-center fixed bottom-0"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 m-4 rounded-full" onClick={loadImagesClick}> Add more images </button> </div>

      </main>
  )
}

export default PresentationImage