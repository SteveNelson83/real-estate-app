import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import FacebookLogin from '../../react-facebook-login/dist/facebook-login-render-props';

const NavBar = props => (
  <div className="navBar">
    <img src="data:image/png;base64,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" alt="igloo" />
    <span id="sitename">Surreal Estate</span>
    <ul className="nav">
      <Link className="item" to="/">
        <button>View Properties</button>
      </Link>
      <Link className="item" to="/add-property">
        <button>Add a Property</button>
      </Link>
      {props.userID ? (
        <button onClick={props.onLogout}>Logout</button>) :
        (<FacebookLogin
          appId="787029985046286"
          callback={props.onLogin}
          render={renderProps => (
            <button onClick={renderProps.onClick}>Login with Facebook</button>
          )}
        />
        )}

    </ul>
  </div>
);

export default NavBar;
