'use strict';

const thenable = () => ({
  numbers: [1, 2, 3],
  then(onFulfilled, onRejected) {
    const num = this.numbers.shift();
    if (num) {
      onFulfilled(num);
    } else {
      onRejected(new Error('I heve no numbers for you'));
    }
  }
});

(async () => {
  const data = thenable();
  for (let i = 0; i < 5; i++) {
    try {
      const res = await data;
      console.dir({ res });
    } catch(err) {
      console.dir({ err });
    }
  }
})();
