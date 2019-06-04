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

  it('should update state with componentDidMount', async () => {
    const component = create(<App />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    expect(instance.state.pokemons.length).toBeGreaterThan(0);
  });
});