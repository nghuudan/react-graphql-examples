import React from 'react';
import { shallow } from 'enzyme';
import List from './list';
import ListItem from './list-item';

describe('List', () => {
  const wrapper = shallow(<List />);

  it('should be ul', () => {
    expect(wrapper.is('ul')).toBe(true);
  });

  it('should render items', () => {
    wrapper.setProps({
      data: {
        colorList: [{
          id: 1,
          name: 'Red'
        }]
      }
    });
    expect(wrapper.find(ListItem)).toHaveLength(1);
  });
});
