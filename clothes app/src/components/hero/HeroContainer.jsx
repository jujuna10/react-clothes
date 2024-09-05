import React, { useEffect, useState } from 'react'
import h1 from '../../assets/hphoto1.webp'
import h2 from '../../assets/hphoto2.webp'
import h3 from '../../assets/hphoto3.jpg'
import h4 from '../../assets/hphoto4.jpg'
import Hero from './Hero'


export default function HeroContainer() {

    const [imgg,setImgg] = useState(0)
    const [text,setText] = useState(0)
    const images = [h1,h2,h3,h4]
    const texts = [ "New style and comfort",
                    "trendy collections for each season",
                    "Special discounts this month only",
                    "Pay attention to our exclusive offers" ]
    useEffect(() => {
        const nextPhoto = setInterval(() => {
            setImgg((prev) => (prev + 1) % images.length)
        },4000)

        return () => clearInterval(nextPhoto)
    },[])

    useEffect(() => {
        const nextText = setInterval(() => {
            setText((prev) => (prev + 1) % texts.length)
        },4000)

        return () => clearInterval(nextText)
    },[])


    //     ii ++
    //     if(ii == images.length){
    //         ii = 0
    //     }
    // }, 1000);
    

  return (
    <Hero image={images[imgg]} text={texts[text]}/>
  )
}
