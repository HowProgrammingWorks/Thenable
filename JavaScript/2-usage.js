'use strict';

const getPerson = id => {
  const thenable = {
    then(onFulfilled) {
      setTimeout(() => {
        const person = { id, name: 'Marcus Aurelius' };
        onFulfilled(person);
      }, 1000);
    }
  };
  return thenable;
};

(async () => {
  const person = await getPerson(10);
  console.dir({ person });
})();
