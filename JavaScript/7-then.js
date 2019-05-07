'use strict';

const getNumbers = () => {
  const numbers = [1, 2, 3];
  return () => new Promise((resolve, reject) => {
    const num = numbers.shift();
    if (num) {
      resolve(num);
    } else {
      reject(new Error('I heve no numbers for you'));
    }
  });
};

// Usage

const getNext = getNumbers();
for (let i = 0; i < 5; i++) {
  getNext().then(
    res => console.dir({ res }),
    err => console.dir({ err: err.message })
  );
}
