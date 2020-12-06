import React from 'react'
import {Link} from 'react-router-dom'


function HeroNav(){
    return (
        <header className="Hero-header">
            <Link to="/">Nutrimeasure</Link>
            <Link to="/login" >LOGIN</Link>
        </header>
        
    )
}

export default HeroNav