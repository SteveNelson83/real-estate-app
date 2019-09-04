/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';
import '../styles/propertyCard.css';
import '../styles/properties.css';
import qs from 'qs';
import { Link } from 'react-router-dom';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
    };
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(res => {
        const properties = res.data;
        this.setState({ properties });
        console.log(this.state.properties);
      })
      .catch(() => this.setState({
        error: true,
      }));
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  handleSearch = event => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
  };

  render() {
    return (
      <div>
        <div id="sidebar">
          <h2>Keyword Search</h2>
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              value={this.state.search}
              onChange={event => this.setState({ search: event.target.value })}
            />
            <button type="submit">Search</button>
          </form>
          <h2>Filter By City</h2>
          <Link to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
          <br />
          <Link to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
          <br />
          <Link to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
          <br />
          <Link to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
          <br />
          <h2>Sort by Price</h2>
          <Link to={this.buildQueryString('sort', { price: 1 })}>Low to High</Link>
          <br />
          <Link to={this.buildQueryString('sort', { price: -1 })}>High to Low</Link>
        </div>
        <div id="propertyGrid">
          <h1>Property List</h1>
          {this.state.properties.map(property => (
            <div key={property._id}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Properties;
