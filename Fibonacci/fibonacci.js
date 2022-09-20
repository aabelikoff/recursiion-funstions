// Function returns n-row of fibonacci numbers (uses loop)
const fibs = (n) => {
  if (n <= 0 || !Number.isInteger(n)) {
    return 'Argument must be a natual number!';
  }
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(0);
    } else {
      arr.push(i - 2 <= 0 ? 1 : arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
};

console.log('Loop fibonacci function for n=10', fibs(10));

// Function returns n-row of fibonacci numbers (uses recursion)
const fibsRec = (n) => {
  if (n <= 0 || !Number.isInteger(n)) {
    return 'Argument must be a natual number!';
  }
  return n <= 2
    ? [0, 1].slice(0, n)
    : [
        ...fibsRec(n - 1),
        fibsRec(n - 1).slice(-2)[0] + fibsRec(n - 1).slice(-2)[1],
      ];
};
// Function returns n-row of fibonacci numbers (uses recursion)
const fibsRec1 = (n, arr = [0, 1]) => {
  if (n <= 0 || !Number.isInteger(n)) {
    return 'Argument must be a natual number!';
  }

  return n <= arr.length
    ? arr.slice(0, n)
    : fibsRec1(n, [...arr, arr.slice(-2)[0] + arr.slice(-2)[1]]);
};

console.log('Recursive fibonacci function for n=10', fibsRec(10));

console.log('Another recursive fibonacci function for n=10', fibsRec1(10));
