'use strict';

const fs = require('fs');

class Thenable {
  constructor() {
    this.next = null;
  }

  then(onSuccess) {
    this.onSuccess = onSuccess;
    const next = new Thenable();
    this.next = next;
    return next;
  }

  resolve(value) {
    const onSuccess = this.onSuccess;
    if (onSuccess) {
      const next = onSuccess(value);
      if (next) {
        next.then(value => {
          this.next.resolve(value);
        });
      }
    }
  }
}

// Usage

const readFile = filename => {
  const thenable = new Thenable();
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    thenable.resolve(data);
  });
  return thenable;
};

readFile('1-contract.js')
  .then(data => {
    console.dir({ file1: data.length });
    return readFile('2-usage.js');
  })
  .then(data => {
    console.dir({ file2: data.length });
    return readFile('3-class.js');
  })
  .then(data => {
    console.dir({ file3: data.length });
  })
  .then(() => {
    console.log('Will never printed');
  });
