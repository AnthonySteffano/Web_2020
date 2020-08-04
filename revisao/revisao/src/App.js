import React from 'react'
import './App.css'

import HelloWorld from './components/HelloWorld'
import {DirtyJonas, OldMartha, Maria as MariaJulia} from './components/Dark'
import Time from './components/dark/Time'
import Character from './components/dark/Character'

import IMC from './components/imc/IMC'

import Pai from './components/FilhoPara_oPai/Pai'

function App() {
  return (
    <div className="App">
      <Pai/>
      
      {/*<IMC peso ={80} altura={1.83}/>

      <HelloWorld nome="Anthony"  idade="25"/>
      <DirtyJonas year = "2019"/>
      <OldMartha year ="2052"/>
      <MariaJulia year="2002"/>
      <Time/>
      <Time time="2056">
      <Character name = "Ulrich Nielsen"/> 
      <Character name = "Mikkel Nielsen"/>
      <Character name = "Claudia Tiedman" />
      </Time> */}
    </div>
  )
}

export default App;
