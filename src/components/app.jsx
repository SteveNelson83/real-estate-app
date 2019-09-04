import React from 'react';
import '../styles/app.css';
import NavBar from './navBar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './addProperty';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
