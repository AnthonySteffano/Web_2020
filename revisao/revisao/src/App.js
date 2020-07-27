import React from 'react'
import './App.css'

import HelloWorld from './components/HelloWorld'
import {DirtyJonas, OldMartha, Maria as MariaJulia} from './components/Dark'
import Time from './components/dark/Time'
import Character from './components/dark/Character'

function App() {
  return (
    <div className="App">
      <HelloWorld nome="Anthony"  idade="25"/>
      <DirtyJonas year = "2019"/>
      <OldMartha year ="2052"/>
      <MariaJulia year="2002"/>
      {/*<Time/>*/}
      <Time>
      <Character name = "Ulrich Nielsen" time="1986"/>
      <Character name = "Mikkel Nielsen" time="2019"/>
      <Character name = "Claudia Tiedman" time="2056"/>
      </Time>
    </div>
  )
}

export default App;
