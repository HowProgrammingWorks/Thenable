'use strict';

const thenable = () => ({
  then(onFulfilled) {
    onFulfilled(5);
  }
});

// Usage

(async () => {
  const res = await thenable();
  console.dir({ res });
})();
