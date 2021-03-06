import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Gallery from './Gallery.jsx';

configure({ adapter: new Adapter() });

describe('Gallery component', () => {
  test('renders each child without crashing', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find('Carousel').length).toEqual(1);
    expect(wrapper.find('ImageView').length).toEqual(1);
    expect(wrapper.find('ProductOptions').length).toEqual(1);
  });
});