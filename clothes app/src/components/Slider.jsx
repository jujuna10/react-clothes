import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const api = "https://api.escuelajs.co/api/v1/products";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 2000,  
  };

  const [dataa, setDataa] = useState([]);
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const result = await response.json();
      setDataa(result);
      setClothes(result.filter(item => item.category.name === "Clothes"));
    };
    fetchData();
  }, []);

  console.log(dataa)

  return (
    <div className='p-4 overflow-hidden'>
        <p className='text-center m-[20px] font-bold text-[25px]'>Our product</p>
      <Slider {...settings}>
        {clothes.map((item) => (
          <div key={item.id} className='text-center hover:translate-y-[-10px] duration-500 p-[20px]'>
            <img src={item.category.image} className='w-[200px] rounded-[10px] mx-auto' alt={item.title} /> {/* სურათის ზომა შეასწორე */}
            <p className='text-lg font-semibold'>{item.title}</p>
            <p className='text-md'>{item.price}$</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
