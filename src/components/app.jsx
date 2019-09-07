import React from 'react';
import '../styles/app.css';
import NavBar from './navBar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './addProperty';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      userID: null,
    };
  }

  handleLogin = response => {
    this.setState({
      userID: response.userID,
    });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({
      userID: null,
    });
  };

  render() {
    return (
      <div>
        <NavBar onLogin={this.handleLogin} onLogout={this.handleLogout} userID={this.state.userID} />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    );
  }
}


export default App;
