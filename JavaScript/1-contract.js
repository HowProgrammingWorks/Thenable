'use strict';

const thenable = () => ({
  then(f) {
    f(5);
  }
});

(async () => {
  const res = await thenable();
  console.dir({ res });
})();
