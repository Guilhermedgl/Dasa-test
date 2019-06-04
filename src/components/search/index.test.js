import React from 'react';
import { create } from 'react-test-renderer';
import Search from './index';

describe('<Search />', () => {
  const handleChange = jest.fn();

  it('should snapshot should match', () => {
    const component = create(<Search handleChange={handleChange} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should not use class', () => {
    const component = create(<Search handleChange={handleChange} />);
    expect(component.toJSON().props.class).toBeFalsy();
  });
  
  it('should receive handleChange props', () => {
    const component = create(<Search handleChange={handleChange} />);
    expect(component.toTree().props.handleChange).toBeTruthy();
  });
});