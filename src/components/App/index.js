import React from 'react';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SignUp';
import ErrorPage from '../ErrorPage';
import '../../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/welcome' component={Welcome}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
