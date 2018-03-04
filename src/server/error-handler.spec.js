import errorHandler from './error-handler';

describe('Error Handler', () => {
  const originalConsole = global.console;

  global.console = { error: jest.fn() };

  afterAll(() => global.console = originalConsole);

  it('should be a function', () => {
    expect(errorHandler).toBeInstanceOf(Function);
  });

  it('should log an error', () => {
    errorHandler(null, null, null, jest.fn());
    expect(global.console.error).toHaveBeenCalledTimes(1);
  });

  it('should call next', () => {
    const next = jest.fn();
    errorHandler(null, null, null, next);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
