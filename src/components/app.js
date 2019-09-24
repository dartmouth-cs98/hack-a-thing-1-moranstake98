
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Horoscope from '../horoscope/Horoscope';
import '../style.scss';
import SignUp from './signup';
import SignIn from './signin';
import Profile from './profile';
import Matches from './matches';
// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };
// const Welcome = (props) => {
//   return <div>Welcome</div>;
// };

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
        <li><NavLink to="/horoscope"> Horoscope</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
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
          <Route exact path="/test/:id" component={Test} />
          <Route exact path="/horoscope" component={Horoscope} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Route component={Matches} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
