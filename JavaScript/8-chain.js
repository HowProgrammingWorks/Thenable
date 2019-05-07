'use strict';

const getNumbers = () => ({
  numbers: [1, 2, 3],
  then(onFulfilled, onRejected) {
    const num = this.numbers.shift();
    if (num) {
      onFulfilled(num);
    } else {
      onRejected(new Error('I heve no numbers for you'));
    }
    return this; // chain thenable
  }
});

// Usage

const onSuccess = res => console.dir({ res });
const onError = err => console.dir({ err: err.message });

getNumbers()
  .then(onSuccess, onError)
  .then(onSuccess, onError)
  .then(onSuccess, onError)
  .then(onSuccess, onError)
  .then(onSuccess, onError);
