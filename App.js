/*import "./App.css";
//import Home from "./Home.js";

//function App() {
  //return (
   // <div classname="App" >
   //  <h2>Welcome to the frontend</h2>
   //  <Home/>
   // </div>
 // );
//}

//export default App;
*/

import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import "./App.css";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import AllProducts from './AllProducts';
import AllCurrencies from './AllCurrencies';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Welcome to the frontend</h2>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/AllProducts" component={AllProducts} />
          <Route path="/AllCurrencies" component={AllCurrencies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;