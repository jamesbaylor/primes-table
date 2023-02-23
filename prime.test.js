const getPrimes = require('./getPrimes');

describe('getPrimes', () => {
  test('returns an empty array for 0 input', () => {
    expect(getPrimes(0)).toEqual([]);
  });

  test('returns an array of 2 for input of 1', () => {
    expect(getPrimes(1)).toEqual([2]);
  });

  test('returns an array of 2 and 3 for input of 2', () => {
    expect(getPrimes(2)).toEqual([2, 3]);
  });

  test('returns an array of 2, 3, 5, and 7 for input of 4', () => {
    expect(getPrimes(4)).toEqual([2, 3, 5, 7]);
  });

  test('returns an array of 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29 for input of 10', () => {
    expect(getPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  test('returns an array of 100 primes for input of 100', () => {
    expect(getPrimes(100).length).toEqual(100);
  });

  test('returns 541 as the 100th prime number for input of 100', () => {
    expect(getPrimes(100)[99]).toEqual(541);
  });

  test('make sure all elements are only divisible by 1 and themselves', () => {
    const primes = getPrimes(1000);
    for (let i = 0; i < primes.length; i++) {
      for (let j = 2; j < primes[i]; j++) {
        expect(primes[i] % j).not.toEqual(0);
      }
    }
  });
});