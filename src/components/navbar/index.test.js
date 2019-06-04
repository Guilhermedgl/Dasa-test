import React from 'react';
import { create } from 'react-test-renderer';
import Navbar from './index';

describe('<Navbar />', () => {

  it('should match with snapshot', () => {
    const component = create(<Navbar />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  
  it('should not use class', () => {
    const component = create(<Navbar />);
    expect(component.toJSON().props.class).toBeFalsy();
  });
});