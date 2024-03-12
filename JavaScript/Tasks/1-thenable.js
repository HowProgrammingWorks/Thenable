'use strict';

// Task: change `iterate` contract from callbacks to Thenable

const iterate = (items, callback) => {
  for (const item of items) {
    callback(item);
  }
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

// Use await syntax to get items
iterate(electronics, (item) => {
  console.log(item);
});
