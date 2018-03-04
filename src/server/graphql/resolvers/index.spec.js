import resolvers from '.';

describe('Resolvers', () => {
  it('should have a Query property', () => {
    expect(resolvers).toHaveProperty('Query');
  });

  describe('Query', () => {
    it('should have a hello property', () => {
      expect(resolvers).toHaveProperty('Query.hello');
    });

    it('should have a hello function', () => {
      expect(resolvers.Query.hello).toBeInstanceOf(Function);
    });

    it('should have a hello function that returns a promise', () => {
      expect(resolvers.Query.hello()).toBeInstanceOf(Promise);
    });
  });
});
