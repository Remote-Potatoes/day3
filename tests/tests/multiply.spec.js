const { multiply } = require('../calculator');

// () => {}
// function (){}

describe('Multiply', function () {
  it('should multiply two positive integers correctly', function () {
    const result = multiply(5, 5);
    expect(result).toBe(25);
  });
});
