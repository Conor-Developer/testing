const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 and 2', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it('multiplies 5 and 10', () => {
    expect(multiply(5, 10)).toBe(50);
  });
});