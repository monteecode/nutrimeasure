import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Login from '../forms/Login'

function HeroHeader(){
    return (
        <header className="Hero-header">
            <Link to="/">Nutrimeasure</Link>
            <Link to="/login" >LOGIN</Link>
            <Switch>
                <Route exact path="/">
                    
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </header>
        
    )
}

export default HeroHeader