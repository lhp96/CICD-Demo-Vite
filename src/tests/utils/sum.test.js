const sum = require('../../utils/sum');

describe('sum', () => {
  it('可以做加法', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('sum test2', () => {
    expect(sum(100000000000000, 1)).toEqual(100000000000001);
  });
});
