import React from 'react';
import { shallow } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
import App from './app';

describe('App', () => {
  it('should be an ApolloProvider', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.is(ApolloProvider)).toBe(true);
  });
});
