import React from 'react'
import tie from '../assets/tie.png'
import cart from '../assets/cart.png'



export default function Header({stateOfCart, nowState}) {
  return (
    <div className='flex justify-around bg-gray-50 p-8 shadow-xl'>
        <div className='flex justify-center items-center gap-10'>
            <p className='font-serif text-2xl'>Clothes</p>
            <div className='flex gap-4 text-gray-500'>
                <a href="#">Men's clothing</a>
                <a href="#">Wolemns's clothing</a>
                <a href="#">Electronic</a>
                <a href="#">Jewelery</a>

            </div>
        </div>
        <div className='flex gap-20'>
            <input type="text" name="search" placeholder='Search for products,brands and more' className='border border-gray-200 rounded-md w-96 pl-9 h-9 mt-4'/>
            <img src={cart} className='h-7 mt-4 hover:cursor-pointer' onClick={() => stateOfCart(!nowState)}/>

        </div>
    </div>
  )
}
