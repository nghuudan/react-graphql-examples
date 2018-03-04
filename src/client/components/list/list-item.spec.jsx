import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './list-item';

describe('ListItem', () => {
  const Child = () => <div />;
  const wrapper = shallow(<ListItem><Child /></ListItem>);

  it('should be li', () => {
    expect(wrapper.is('li')).toBe(true);
  });

  it('should render its children', () => {
    expect(wrapper.find(Child)).toHaveLength(1);
  });

  it('should render text', () => {
    const text = 'TEXT';
    const textWrapper = shallow(<ListItem>{text}</ListItem>);
    expect(textWrapper.text()).toBe(text);
  });
});
