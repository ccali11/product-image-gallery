import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ratings from './Ratings.jsx';

configure({ adapter: new Adapter() });

describe('Ratings component', () => {
  test('renders without error', () => {
    const wrapper = shallow(<Ratings />);
    expect(wrapper.children()).toHaveLength(1);
  })
});