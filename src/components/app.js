
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Horoscope from '../horoscope/Horoscope';
import '../style.scss';
import SignUp from './signup';
import SignIn from './signin';
import Profile from './profile';
import Matches from './matches';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul style={{
 display: 'flex', flexDirection: 'row', justifyContent: 'space-around', listStyleType: 'none',
}}
      >
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/horoscope"> Horoscope</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/suggested">Suggested Matches</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/horoscope" component={Horoscope} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route component={Matches} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
