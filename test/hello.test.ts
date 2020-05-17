import { hello, user } from '../src/hello';

describe('hello', () => {
  it('should run', () => {
    hello(user);
    expect(true).toBe(true);
  });
});
