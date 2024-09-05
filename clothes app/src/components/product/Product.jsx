import React, { useEffect, useState } from 'react';
import cart from '../../assets/cart.png'

// const api = 'https://fakestoreapi.com/products'
// const api = 'https://api.escuelajs.co/api/v1/products'
const api = "https://api.escuelajs.co/api/v1/products";


// const fakeData = [
//   { id: 1, category: "men's clothing", title: "Men's Shirt", price: 20, image: 'https://via.placeholder.com/125' },
//   { id: 2, category: "women's clothing", title: "Women's Dress", price: 30, image: 'https://via.placeholder.com/125' },
//   { id: 3, category: "jewelery", title: "Gold Necklace", price: 50, image: 'https://via.placeholder.com/125' }
// ];


export default function Product({onBuy, name, click}) {
  const [selectValue, setSelectValue] = useState("")
  const [data, setData] = useState([])
  const [mens, setMens] = useState([])
  const [womens, setWomens] = useState([])
  const [jewelery, setJewelery] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const respo = await fetch(api)
      const dataP = await respo.json()
      setData(dataP)

    // useEffect(() => {
    //   setData(fakeData);
    //   setMens(fakeData.filter(item => item.category === "men's clothing"));
    //   setWomens(fakeData.filter(item => item.category === "women's clothing"));
    //   setJewelery(fakeData.filter(item => item.category === "jewelery"));
    // }, []);
    
    }
    fetchData()
  }, [])

  console.log(data)


  // useEffect(() => {
  //   setData(fakeData);
  //   setMens(fakeData.filter(item => item.category === "men's clothing"));
  //   setWomens(fakeData.filter(item => item.category === "women's clothing"));
  //   setJewelery(fakeData.filter(item => item.category === "jewelery"));
  // }, []);

  console.log(data)

  const handleChange = (event) => {
    setSelectValue(event.target.value)
  }


  return (
    <div className=' mt-[50px] flex flex-col gap-10 items-center'>
      <select onChange={handleChange} value={selectValue} className='float-right w-[200px] pl-[20px]'>
        <option value="">Choose</option>
        <option value="mens">Men's Clothing</option>
        <option value="womens">Women's Clothing</option>
        <option value="jewelery">jewelery</option>
      </select>

      <div className='flex gap-2'>
        {selectValue === "" 
          ? null 
          : selectValue === "mens" 
          ? mens.map((item, index) => (
              <div key={index} className='border border-gray-400 flex justify-center items-start flex-col w-[250px] px-[20px] rounded-[10px] p-[10px]'>
                <img src={item.image} className='w-[125px] h-[125px]'/>
                <p className='max-w-[185px]'>{item.title}</p>
                <p className='font-medium'>{item.price}$</p>
                <p>{item.category}</p>
                <button  className='flex w-[180px] p-[8px] rounded-[10px] gap-[20px] bg-[#FFEFEB] hover:bg-[#F8F5F4]' onClick={() => click(item.price,item.title)}><img src={cart} className='w-[20px]'/> Add to cart</button>
              </div>
            ))
          : selectValue === "womens" 
          ? womens.map((item, index) => (
              <div key={index} className='border border-gray-400 flex justify-center items-start flex-col w-[250px] px-[20px] rounded-[10px] p-[10px]'>
                <img src={item.image} className='w-[125px] h-[125px]'/>
                <p className='max-w-[185px]'>{item.title}</p>
                <p className='font-medium'>{item.price}$</p>
                <p>{item.category}</p>
                <button  className='flex w-[180px] p-[8px] rounded-[10px] gap-[20px] bg-[#FFEFEB] hover:bg-[#F8F5F4]' onClick={() => click(item.price,item.title)}><img src={cart} className='w-[20px]'/> Add to cart</button>

              </div>
            ))
            : selectValue === "jewelery"
            ? jewelery.map((item,index) => (
              <div key={index} className='border border-gray-400 flex justify-center items-start flex-col w-[250px] px-[20px] rounded-[10px] p-[10px]'>
                <img src={item.image} className='w-[125px] h-[125px]'/>
                <p className='max-w-[185px]'>{item.title}</p>
                <p className='font-medium'>{item.price}$</p>
                <p>{item.category}</p>
                <button  className='flex w-[180px] p-[8px] rounded-[10px] gap-[20px] bg-[#FFEFEB] hover:bg-[#F8F5F4]' onClick={() => click(item.price,item.title)}><img src={cart} className='w-[20px]'/> Add to cart</button>

              </div>
            ))
          : null
        }
      </div>
    </div>
  );
}
