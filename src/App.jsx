import { useState } from 'react'
import './styles/App.css'
import Hero from './sections/Hero'
import TrilemaCrypto from './components/TrilemaCrypto'
import CryptopIntrudictions from './sections/CryptoIntroductions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero />
     <TrilemaCrypto />
     <CryptopIntrudictions />
    </>
  )
}

export default App
