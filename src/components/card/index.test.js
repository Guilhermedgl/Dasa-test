import React from 'react';
import { create } from 'react-test-renderer';
import Card from './index';

describe('<Card />', () => {
  it('should render props.name', () => {
    const pokemon = {
      name: 'bulbasaur'
    }
    const component = create(<Card pokemon={pokemon} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});