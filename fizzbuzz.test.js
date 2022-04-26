const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('returns Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
  });

  it('returns Fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe('Fizzbuzz')
  });

  it('returns number', () => {
    expect(fizzbuzz(8)).toBe(8)
  });
});