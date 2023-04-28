'use strict';

const thenableAdapter = (fn) => (...args) => {
  const res = fn(...args);
  return ({
    then(onResolved, onRejected) {
      if (res instanceof Error) onRejected(res);
      else onResolved(res);
    }
  });
};

// Usage

const sum = (a, b) => a + b;

const tSum = thenableAdapter(sum);

tSum(2, 3)
  .then(
    (result) => console.log(result),
    (error) => console.error(error)
  );
