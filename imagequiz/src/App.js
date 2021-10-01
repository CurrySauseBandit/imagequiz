import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
        <HashRouter>
          <Switch>
            <Route path = '/signup'>
              <Register></Register>
            </Route>
            <Route path = '/login'>
              <Login></Login>
            </Route>
            <Route path = '/'>
              <Home/>
            </Route>
          </Switch>
        </HashRouter>
  );
}

export default App;
