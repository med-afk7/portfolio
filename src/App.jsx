import { useState } from 'react'
import './App.css'
import Navi from './components/navbar'
import Card from './components/maincard'
import Socials from './components/socials'
import TechStack from './components/technologies'

function App() {


  return (
    <>
    <Navi  />

    <Card />

    <Socials />


    <TechStack />
    </>
  )
}

export default App
