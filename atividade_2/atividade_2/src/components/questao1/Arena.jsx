import React from 'react'

import Hero from './Hero'
import ImgHero from '../../img/hero.jpg'
import Enemy from './Enemy'
import ImgEnemy from '../../img/enemy 1.jpg'

export default function Arena(){
    return (
        <div>
            <Hero name="Luke Skywalker" img={ImgHero}/>
            <Enemy name="Darth vader" img={ImgEnemy}/>
            
            
        </div>
    )
}