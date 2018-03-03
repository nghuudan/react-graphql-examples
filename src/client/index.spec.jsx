import React from 'react';
import { render } from 'react-dom';
import App from './app';
import '.';

jest.mock('react-dom', () => (
  {
    render: jest.fn()
  }
));

describe('Client', () => {
  it('should call render once', () => {
    expect(render).toHaveBeenCalledTimes(1);
  });

  it('should call render with App', () => {
    expect(render).toHaveBeenCalledWith(<App />, null);
  });
});
