import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/welcomeText.jsx'
import WelcomeText from './components/welcomeText.jsx'
import ListaPorHacer from './components/listaPorHacer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeText/>
      <ListaPorHacer/>
    </>
  )
}

export default App
