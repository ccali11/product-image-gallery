import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductOptions from './ProductOptions.jsx';

configure({ adapter: new Adapter() });

describe('ProductOptions component', () => {
  test('renders each child without crashing', () => {
    const wrapper = shallow(<ProductOptions />);
    expect(wrapper.children()).toHaveLength(9);
    expect(wrapper.find('Ratings')).toHaveLength(1);
    expect(wrapper.find('MetalSelector')).toHaveLength(1);
  });
});