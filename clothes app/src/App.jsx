import { useState } from 'react'
import Hero from './components/hero/HeroContainer'
import ImageSlider from './components/Slider'
import Cart from './components/Cart'
import Product from './components/product/Product'
import Footer from './components/Footer'

function App() {
  const [sum, setSum] = useState(0)
  const [names, setNames] = useState([])

  const handleBuy = (price) => {
    setSum((prev) => prev + price)
  }

  const handleName = (name) => {
    setNames((prev) => [...prev, name])
  }

  const handleClick = (price, name) => {
    handleBuy(price)
    handleName(name)
  }

  return (
    <div>
      <Cart sum={sum} names={names} />

      <Hero />

      <Product onBuy={handleBuy} name={handleName} click={handleClick} />

      <ImageSlider />
      <Footer />
    </div>
  )
}

export default App

