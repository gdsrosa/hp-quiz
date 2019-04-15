import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
// eslint-disable-next-line no-unused-vars
import setupTest from './setupTest';

describe('App suite test', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
