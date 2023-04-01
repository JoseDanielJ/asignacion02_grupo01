import React, { useState, useCallback, useEffect, useRef } from 'react'

import PresentationImage from '../PresentationImage/PresentationImage'

export interface Information {
   id: string
   urls: { small: string; [key: string]: string }
}

const Container = () => {
   const [images, setImages] = useState<Information[]>([])
   const [page, setPage] = useState(1)
   const newImagesSectionRef = useRef<HTMLDivElement>(null)

   const loadImagesClick = () => {
      setPage((currentPage) => currentPage + 1)
      setTimeout(() => {
         const myElement = newImagesSectionRef.current
         if (myElement != null) {
            myElement.scrollIntoView({ behavior: 'smooth' })
         }
      }, 500)
   }

   const getImagesInfo = useCallback(() => {
      fetch(`https://api.unsplash.com/photos/?client_id=DtRkN9Uc2c5u33Ehd8ehhblvbES-PAHThWw40uhYHcs&page=${page} `)
         .then((response) => response.json())
         .then((data) => {
            setImages([...images, ...data])
         })
         .catch((error) => console.error(error))
   }, [page])

   useEffect(() => {
      getImagesInfo()
   }, [page])

   return <PresentationImage images={images} loadImagesClick={loadImagesClick} newImagesSectionRef={newImagesSectionRef} />
}

export default Container
