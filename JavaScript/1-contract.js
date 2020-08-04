'use strict';

const thenableFactory = () => ({
  then(onFulfilled) {
    onFulfilled(5);
  }
});

// Usage

(async () => {
  const res = await thenableFactory();
  console.dir({ res });
})();
