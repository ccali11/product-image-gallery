import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cost from './Cost.jsx';

configure({ adapter: new Adapter() });