import React from 'react'

import Arena from './Arena'
import Enemy from './Enemy'
import Hero from './Hero'

import ImgHero from '../../img/obi.jpg'
import ImgEnemy from '../../img/darth.jpg'

export default prop=>{
    return(
        <div>
            <Arena arena="Teste">
            <Hero name= "Obi Wan Kenobi" img={ImgHero}/>
            <Enemy name = "Darth Maul" img={ImgEnemy}/>
            </Arena>
        </div>
    )
}
