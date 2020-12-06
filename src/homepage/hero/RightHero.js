import React from 'react'
import {Link} from 'react-router-dom'

const RightHero = () => {
    return (
        <div className="Right-hero">
            <button>
                <Link to='/register'>GET STARTED</Link>
            </button>
        </div>
    )
}

export default RightHero