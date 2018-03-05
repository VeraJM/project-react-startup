import React from 'react';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders', () => {
    const app = shallow(<App />);

    expect(toJson(app)).toMatchSnapshot();
  });
});
