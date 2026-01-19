'use strict';

// Task: change `iterate` contract from callbacks to Thenable

const iterate = (items) => ({
  then(resolve) {
    for (const item of items) {
      resolve(item);
    }
  },
});

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

iterate(electronics).then(item=>console.log(item))



