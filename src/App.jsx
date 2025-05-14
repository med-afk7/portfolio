import { useState } from 'react'
import './App.css'
import Navi from './components/navbar'
import Card1 from './components/maincard'
import Socials from './components/socials'
import TechStack from './components/technologies'
import TechCard from './components/techcard'

function App() {


  return (
    <>
    
<div className='app-container'>
    <Card1  />
   
    <Socials />


    <TechStack />
</div>
   
    </>
  )
}

export default App
