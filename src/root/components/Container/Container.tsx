import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import ImgContainer from '../ImgContainer/ImgContainer'
import InfoHeader from '../InfoHeader/InfoHeader'



interface Information {
   id: string
   urls: { small: string; [key: string]: string }
}

const Container = () => {
   const [images, setImages] = useState<Information[]>([])
   const [page, setPage] = useState(1)

   const loadImagesClick = () => { setPage((currentPage) => currentPage + 1) }

   const getImagesInfo=useCallback(()=>{
      fetch(`https://api.unsplash.com/photos/?client_id=DtRkN9Uc2c5u33Ehd8ehhblvbES-PAHThWw40uhYHcs&page=${page} `)
         .then((response) => response.json())
         .then((data) => {
            setImages([...images, ...data])
         })
         .catch((error) => console.error(error))
   },[page])();

   return (
      <main>
         <InfoHeader />
         <div className=" grid grid-cols-5 justify-items-center mt-4 order-last md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 pb-12">
            {images.map((imag, index) => (
               <ImgContainer key={index} srcInfo={imag.urls.small} altInfo="" />
            ))}
         </div>
         <div className=" w-full px-auto b bg-slate-500 flex  justify-center fixed bottom-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 m-4 rounded-full" onClick={loadImagesClick}>
               Add more images
            </button>
         </div>
      </main>
   )
}

export default Container
