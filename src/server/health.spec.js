import health from './health';

describe('Health', () => {
  it('should be a function', () => {
    expect(health).toBeInstanceOf(Function);
  });

  it('should call send on response once', () => {
    const response = {
      send: jest.fn()
    };
    health(null, response);
    expect(response.send).toHaveBeenCalledTimes(1);
  });
});
