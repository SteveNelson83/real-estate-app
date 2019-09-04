/* eslint-disable babel/quotes */
import React from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div id="sidebar">
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

export default Sidebar;
