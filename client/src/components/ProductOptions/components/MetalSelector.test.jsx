import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MetalSelector from './MetalSelector.jsx';

configure(({ adapter: new Adapter() }));

describe('MetalSelector component', () => {
  test('renders without error', () => {
    const wrapper = shallow(<MetalSelector />);
    expect(wrapper.children()).toHaveLength(5);
  });
});