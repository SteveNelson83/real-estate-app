/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(res => {
        const properties = res.data;
        this.setState({ properties });
        console.log(this.state.properties);
      });
  }

  render() {
    return (
      <div>
        <h1>Property List</h1>
        <ul>
          {this.state.properties.map(property => <li key={property._id}>{property.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default Properties;
