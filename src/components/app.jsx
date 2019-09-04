import React from 'react';
import '../styles/app.css';
import NavBar from './navBar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './addProperty';
import Sidebar from './sidebar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
