const getPrimes = (n) => {
    if (n < 1)
    return [];
    
    let primes = [2];
    let num = 3;

    while (primes.length < n) {
        let isPrime = true;
        for (let i=0; i < primes.length  && primes[i] ** 2 <= num; i++) {
            if (num % primes[i] == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
        num ++;
    } 
    
    return primes;
}

module.exports = getPrimes;