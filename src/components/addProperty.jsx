/* eslint-disable no-console */
import React from 'react';
import '../styles/addProperty.css';

class AddProperty extends React.Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: '',
      bathrooms: '',
      price: '',
      city: 'Manchester',
      email: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <h1>Add Property Page</h1>
        <form id="formbox" onSubmit={this.handleAddProperty}>
          <span>
            <div>Title</div>
            <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          </span>
          <span>
            <div>Property Type</div>
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Igloo">Igloo</option>
              <option value="Shack">Shack</option>
            </select>
          </span>
          <span>
            <div>No. of Bedrooms</div>
            <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} />
          </span>
          <span>
            <div>No. of Bathrooms</div>
            <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} />
          </span>
          <span>
            <div>Price</div>
            £<input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} />
          </span>
          <span>
            <div>City</div>
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </span>
          <span>
            <div>Email Address</div>
            <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} />
          </span>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
