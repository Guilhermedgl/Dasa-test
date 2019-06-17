import React from 'react';
import { create } from 'react-test-renderer';
import Card from './index';

describe('<Card />', () => {
  const pokemon = {
    name: 'bulbasaur'
  };
  it('should snapshot should match', () => {
    const component = create(<Card pokemon={pokemon} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should not use class', () => {
    const component = create(<Card pokemon={pokemon} />);
    expect(component.toJSON().props.class).toBeFalsy();
  });
  
  it('should receive props', () => {
    const component = create(<Card pokemon={pokemon} />);
    expect(component.toTree().props).toBeTruthy();
  });
});