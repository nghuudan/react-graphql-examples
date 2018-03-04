import React from 'react';
import { shallow } from 'enzyme';
import Hello from './hello';

describe('Hello', () => {
  const wrapper = shallow(<Hello />);

  it('should be h1', () => {
    expect(wrapper.is('h1')).toBe(true);
  });

  it('should default message to No Message', () => {
    expect(wrapper.text()).toBe('No Message');
  });

  it('should display message from props', () => {
    wrapper.setProps({
      data: {
        hello: { message: 'TEST' }
      }
    });
    expect(wrapper.text()).toBe('TEST');
  });
});
