/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import PropertyCard from './propertyCard';
import '../styles/propertyCard.css';
import '../styles/properties.css';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
    };
  }

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

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  }

  render() {
    return (
      <div id="propertyGrid">
        <h1>Property List</h1>
        {this.state.properties.map(property => (
          <div key={property._id}>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    );
  }
}

export default Properties;
