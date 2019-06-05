import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

describe('<App />', () => {

  it('should match with snapshot', () => {
    const component = create(<App />);
    const instance = component.getInstance();
    expect(component.toJSON()).toMatchSnapshot();
    expect(instance.state.pokemons).toHaveLength(0);
  });
});