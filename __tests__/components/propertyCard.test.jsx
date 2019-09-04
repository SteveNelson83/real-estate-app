/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import PropertyCard from '../../src/components/propertyCard';

describe('propertyCard component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow((
      <PropertyCard
        title="mockTitle"
        price="mockPrice"
        type="mockType"
        city="mockCity"
        bedrooms="mockBedrooms"
        bathrooms="mockBathrooms"
        email="mockEmail"
      />
    ));
  });
  it('renders the price', () => {
    const text = wrapper.find('PropertyCard.price');
    console.log(text);
    expect(text).toBe('mockPrice');
  });
});
