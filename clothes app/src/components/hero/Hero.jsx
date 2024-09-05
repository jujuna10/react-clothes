import React from 'react'

export default function Hero({image,text}) {
  return (
    <div>
         <div>
        <div className='relative'>
        <img src={image} className='w-full h-[800px]' />

        </div>
        <div className='absolute top-[250px] left-[120px] max-w-[400px]'>

        <p className='text-[32px] text-white'>{text}</p>
        </div>
    </div>
    </div>
  )
}
