import React from 'react';
import { create } from 'react-test-renderer';
import Home from './index';

describe('<Home />', () => {
  const pokemonsProps = [{
    name: 'bulbasaur'
  },
  {
    name: 'ivysaur'
  },
  {
    name: 'venusaur'
  },
  {
    name: 'charmander'
  },
  {
    name: 'charmeleon'
  }];

  it('should match with snapshot', () => {
    const component = create(<Home pokemons={pokemonsProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should have a empty string in initial state', () => {
    const component = create(<Home pokemons={pokemonsProps} />);
    const instance = component.getInstance();
    expect(instance.state.search).toHaveLength(0);
  });

  it('should return full array with empty search', () => {
    const component = create(<Home pokemons={pokemonsProps} />);
    const instance = component.getInstance();
    expect(instance.renderList()).toEqual(pokemonsProps);
  });

  it('should filter the array with e.target.value', () => {
    const event = {
      preventDefault: () => {
        return;
      },
      target: {
        value: 'blb'
      }
    };

    const component = create(<Home pokemons={pokemonsProps} />);
    const instance = component.getInstance();
    instance.handleChange(event);
    expect(instance.renderList()).toEqual([{ name: 'bulbasaur' }])
  });
});