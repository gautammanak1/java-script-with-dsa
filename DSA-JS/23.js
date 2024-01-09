// Implement the Sieve of Eratosthenes algorithm to find prime numbers up to a given limit.

function guatamManak(limit) {
  let sieve = new Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve.reduce((primes, isPrime, number) => {
    if (isPrime) primes.push(number);
    return primes;
  }, []);
}

// Lets check.
let String = 100;
console.log(guatamManak(String));
