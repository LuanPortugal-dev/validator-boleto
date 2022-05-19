import { moduleEleven } from '../../src/validation/arrecadacao/moduleEleven'

describe('moduleEleven test suite', () => {
  it('moduleEleven test, it should return 9', () => {
    expect(
      moduleEleven([
        0, 4, 7, 1, 6, 5, 7, 4, 4, 0, 0, 1, 2, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0,
        0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 7, 8, 5, 7, 9, 2, 1, 2,
      ]),
    ).toBe(9);
  });

  it('moduleEleven test, it should return an error informing verification digit is incorret', () => {

    expect(moduleEleven([84670010002], 7, 2)).toEqual('Invalid verification digit of field: 2');
  });
});
