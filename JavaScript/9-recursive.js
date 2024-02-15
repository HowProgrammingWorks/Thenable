'use strict';

const fs = require('node:fs');

class Thenable {
  next = null;

  then(onSuccess) {
    this.onSuccess = onSuccess;
    this.next = new Thenable();
    return this.next;
  }

  resolve(value) {
    if (!this.onSuccess) return;
    const next = this.onSuccess(value);
    if (!next) return;
    if (!next.then) return void this.next.resolve(next);
    next.then((value) => {
      this.next.resolve(value);
    });
  }
}

// Usage

const readFile = (filename) => {
  const thenable = new Thenable();
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    thenable.resolve(data);
  });
  return thenable;
};

readFile('1-contract.js')
  .then((data) => {
    console.dir({ file1: data.length });
    return readFile('2-usage.js');
  })
  .then((data) => {
    console.dir({ file2: data.length });
    return readFile('3-class.js');
  })
  .then((data) => {
    console.dir({ file3: data.length });
    return 'I will be printed by callback in the next then';
  })
  .then((data) => {
    console.dir({ text: data });
  })
  .then(() => {
    console.log('Will be never printed');
  });
