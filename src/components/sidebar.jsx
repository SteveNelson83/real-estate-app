/* eslint-disable babel/quotes */
import React from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="sidebar">
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            value={this.state.search}
            onChange={event => this.setState({ search: event.target.value })}
          />
          <button type="submit">Search</button>
        </form>
        <h2>Filter By City</h2>
        <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        <br />
        <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        <br />
        <Link to={`/?query={"city": "Liverpool"}`}>Liverpool</Link>
        <br />
        <Link to={`/?query={"city": "Sheffield"}`}>Sheffield</Link>
        <br />
        <h2>Sort by Price</h2>
        <Link to={`/?sort={"price":1}`}>Low to High</Link>
        <br />
        <Link to={`/?sort={"price":-1}`}>High to Low</Link>
      </div>
    );
  }
}

export default Sidebar;
