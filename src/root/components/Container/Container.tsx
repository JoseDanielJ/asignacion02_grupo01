import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import ImgContainer from '../ImgContainer/ImgContainer'

function Encabezado() {
   return (
      <header className="text-gray-600 body-font">
         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
               </svg>
               <span className="ml-3 text-xl">LUDANI</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
               <a className="mr-5 hover:text-gray-900">Tap the button to bring up 10 more images</a>
            </nav>
         </div>
      </header>
   )
}

interface Information {
   id: string
   urls: { small: string; [key: string]: any }
}

const Container = () => {
   const [images, setImages] = useState<Information[]>([])
   const [page, setPage] = useState(1)

   const click = () => {
      setPage((prevPage) => prevPage + 1)
   }

   useEffect(() => {
      fetch(`https://api.unsplash.com/photos/?client_id=DtRkN9Uc2c5u33Ehd8ehhblvbES-PAHThWw40uhYHcs&page=${page} `)
         .then((response) => response.json())
         .then((data) => {
            setImages([...images, ...data])
         })
         .catch((error) => console.error(error))
   }, [page])

   return (
      <main>
         {Encabezado()}
         <div className=" grid grid-cols-5 justify-items-center mt-4 order-last md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 pb-12">
            {images.map((imag, index) => (
               <ImgContainer key={index} srcInfo={imag.urls.small} altInfo="" />
            ))}
         </div>
         <div className=" w-full px-auto b bg-slate-500 flex  justify-center fixed bottom-0">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 m-4 rounded-full" onClick={click}>
               Add more images
            </button>
         </div>
      </main>
   )
}

export default Container
