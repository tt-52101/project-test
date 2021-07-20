import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import Login from "./components/login";
import Settings from "./components/settings";
import Error from "./components/Error";
import { Token } from "./components/token";
import {useState} from "react"
import Rooms from './components/rooms'
import Residents from './components/residents'
import Dashboard from "./components/dashboard";
function Mainpage() {
  return (
   
    <div className="App">
     
      
        <ul>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          
        </ul>

        
    </div>
  );
}


function App() {
  const [context, setContext] = useState();
  return (
    <div className="App">


  <BrowserRouter>
  <Token.Provider value={[context, setContext]}>
      <Router>
        <Switch>
     
     

        <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
         
          <Route path="/error">
          <Error />
          </Route>
          <Route path="/rooms">
          <Rooms/>
          </Route>
          <Route path="/residents">
            <Residents/>         
            </Route>
            <Route path="/dashboard">
            <Dashboard/>         
            </Route>
          <Route path="*">
            <Redirect to="/error" />
          </Route>
        
        </Switch>
      </Router>
      </Token.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
