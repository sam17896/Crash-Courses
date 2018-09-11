import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Staff from './components/Pages/Staff';
import Home from './components/Pages/Home';
import Login from './components/Auth/Login';
import Test from './components/Test/Test';
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';

class App extends Component {

  constructor(){
    super();
  }

  onAuthRequired({history}) {
    history.push('./login')
  }

  render() {
    return (
    <Router>
      <Security
      issuer='https://dev-533929.oktapreview.com/oauth2/default'
      client_id='0oafqd69dgg8TTYd40h7'
      redirect_uri={window.location.origin + '/implicit/callback'}
      onAuthRequired={this.onAuthRequired} >
        <div className="App">
          <Navbar links={this.props.links}/>

          <div className="container">
            <Route exact path="/" component={Home} />
            <SecureRoute path="/staff" component={Staff} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-533929.oktapreview.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </div>
        </Security>
      </Router>
    );
  }
}

export default App;





// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );
