import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Registration from '../../forms/Registration'

const RightHero = () => {
    return (
        <div className="Right-hero">
            <button>
                <Link to='/register'>GET STARTED</Link>
            </button>

            <Switch>
                <Route path='/register'>
                    <Registration />
                </Route>
            </Switch>
        </div>
    )
}

export default RightHero