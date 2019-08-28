import React from 'react';
import axios from 'axios';

class Properties extends React.Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(res => {
        const properties = res.data;
        this.setState({ properties });
      });
  }

  render() {
    return (
      <div>
        <h1>Property List</h1>
        <ul>
          {this.state.properties.map(property => <l1>{property.title}</l1>)}
        </ul>
      </div>
    );
  }
}

export default Properties;
