import './App.css';
import {Switch, Route} from 'react-router-dom'
import Homepage from './homepage/Homepage';
import Registration from './forms/Registration'

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route>
          <Registration />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
