import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Registration from '../../forms/Registration'

const RightHero = () => {
    return (
        <div className="Right-hero">
            <button>
                <Link to='/forms/registration'>GET STARTED</Link>
            </button>

            <Switch>
                <Route path='/forms/registration'>
                    <Registration />
                </Route>
            </Switch>
        </div>
    )
}

export default RightHero