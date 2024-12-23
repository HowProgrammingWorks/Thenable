'use strict';

const thenable = {
  then(onFulfilled) {
    setTimeout(onFulfilled, 1000);
  },
};

(async () => {
  await thenable;
  console.log('---uno---');
  await thenable;
  console.log('---due---');
  await thenable;
  console.log('---tre---');
  await thenable;
})();
