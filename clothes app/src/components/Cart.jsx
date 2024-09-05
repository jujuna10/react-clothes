import React, { useState } from 'react'
import Header from './Header'

export default function Cart({ sum, names }) {

    const [allPrice,setAllPrice] = useState(false)

    const handleClickCart = (value) => {
        setAllPrice(value)
    }

  return (
    <div>
      <Header stateOfCart={handleClickCart} nowState={allPrice}/>
        {allPrice && <div className='w-[420px] bg-white p-[20px] absolute top-[15%] left-[70%] rounded-[10px] z-10 shadow-[0px_20px_10px_rgb(45,22,17)]'>
            <p className=' w-[20px] text-center translate-x-[1650%] bg-gray-400 rounded-[50%] hover:cursor-pointer' onClick={() => setAllPrice(false)}>X</p>
            {names.map((name, index) => (
                <p key={index} className='mb-[5px]'>{name}</p>
            ))}
            {sum === 0 ? "cart is emtty" : <p className='mb-[20px]'>{sum}</p>}
        </div>
        }
      
    </div>
  )
}
