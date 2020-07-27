import React from 'react'
import './App.css'

import HelloWorld from './components/HelloWorld'
import {DirtyJonas, OldMartha, Maria as MariaJulia} from './components/Dark'

function App() {
  return (
    <div className="App">
      <HelloWorld nome="Anthony"  idade="25"/>
      <DirtyJonas year = "2019"/>
      <OldMartha year ="2052"/>
      <MariaJulia year="2002"/>
    </div>
  )
}

export default App;
