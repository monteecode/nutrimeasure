import React from 'react'
import LeftHero from './hero/LeftHero'
import RightHero from './hero/RightHero'

function HeroMain(){
    return(
        <section className="Hero-main">
            <LeftHero />
            <RightHero />
        </section>
    )

}

export default HeroMain