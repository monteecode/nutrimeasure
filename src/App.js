import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './homepage/Homepage';
import Registration from './forms/Registration'
import Login from './forms/Login'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
