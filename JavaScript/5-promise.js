'use strict';

const getNumbers = () => {
  const numbers = [1, 2, 3];
  return new Promise((resolve, reject) => {
    const num = numbers.shift();
    if (num) {
      resolve(num);
    } else {
      reject(new Error('I heve no numbers for you'));
    }
  });
};

(async () => {
  const data = getNumbers();
  for (let i = 0; i < 5; i++) {
    try {
      const res = await data;
      console.dir({ res });
    } catch(err) {
      console.dir({ err: err.message });
    }
  }
})();
