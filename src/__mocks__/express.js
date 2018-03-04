const expressMock = jest.fn(() => (
  {
    get: jest.fn(),
    listen: jest.fn(),
    post: jest.fn(),
    use: jest.fn()
  }
));

expressMock.static = jest.fn();

export default expressMock;
