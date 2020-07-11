'use strict';

const PAUSE = 1000;

const thenable = {
  then(onFulfilled) {
    setTimeout(onFulfilled, PAUSE);
  }
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
