'use strict';

const getPerson = id => {
  const thenable = {
    then(f) {
      setTimeout(() => {
        const person = { id, name: 'Marcus Aurelius' };
        f(person);
      }, 1000);
    }
  };
  return thenable;
};

(async () => {
  const person = await getPerson(10);
  console.dir({ person });
})();
