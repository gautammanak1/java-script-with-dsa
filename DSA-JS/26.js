// Implement memoization for Fibonacci series to improve performance.
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

//Lets Check.
let count = 7;
console.log(fibonacciMemo(count));
