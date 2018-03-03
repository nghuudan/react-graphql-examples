import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress } from 'apollo-server-express';
import health from './health';
import server from '.';

jest.mock('body-parser', () => (
  {
    json: jest.fn()
  }
));

jest.mock('cors');

jest.mock('apollo-server-express', () => (
  {
    graphqlExpress: jest.fn()
  }
));

describe('Server', () => {
  it('should call express once', () => {
    expect(express).toHaveBeenCalledTimes(1);
  });

  it('should call use with cors', () => {
    expect(server.use).toHaveBeenCalledWith(cors());
  });

  it('should call get with * and express.static', () => {
    expect(server.get).toHaveBeenCalledWith('*', express.static());
  });

  it('should call get with /health', () => {
    expect(server.get).toHaveBeenCalledWith('/health', health);
  });

  it('should call post with /graphql', () => {
    expect(server.post).toHaveBeenCalledWith('/graphql', bodyParser.json(), graphqlExpress());
  });

  it('should call listen once', () => {
    expect(server.listen).toHaveBeenCalledTimes(1);
  });

  it('should call listen with port 4444', () => {
    expect(server.listen).toHaveBeenCalledWith(4444);
  });
});
