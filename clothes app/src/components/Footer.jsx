import React from 'react'
import fb from '../assets/fb.png'
import insta from '../assets/social.png'


export default function Footer() {
  return (
    <div className='w-full flex justify-around' style={{ backgroundColor: 'rgb(46, 39, 38)' }}>
        <div className='pt-[20px]'>
            <div className='flex flex-col gap-[20px]'>
                <div>
                    <p className='text-white'>email:dkoodkd@gmail.com</p>
                    <p className='text-white'>tel:2039032</p>
                    <p className='text-white'>addres:dkodokdokdk dkokododk</p>
                 </div>
                <div className='flex gap-[10px] '>
                    <img src={fb} width={25} />
                    <img src={insta} width={25} />
                </div>

            </div>
        </div>

        <div className='pt-[20px] flex flex-col gap-[20px]'>
            <textarea placeholder='enter text' className='pl-[10px]'></textarea>
            <button className='text-white w-[80px] bg-black p-[7px] rounded-[10px]'>submit</button>
        </div>
    </div>
  )
}
