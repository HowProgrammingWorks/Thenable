'use strict';

const thenable = () => ({
  then(onFulfilled) {
    onFulfilled(5);
  }
});

(async () => {
  const res = await thenable();
  console.dir({ res });
})();
