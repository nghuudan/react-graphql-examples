import { makeExecutableSchema } from 'graphql-tools';
import './schema';

jest.mock('graphql-tools');

describe('Schema', () => {
  it('should call makeExecutableSchema once', () => {
    expect(makeExecutableSchema).toHaveBeenCalledTimes(1);
  });
});
