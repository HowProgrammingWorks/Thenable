'use strict';

// Task: rewrite to `class Iterator` implementing
// Thenable contract with private fields.

const iterate = (items) => {
  let index = 0;
  return {
    then(fulfill, /*reject*/) {
      if (index < items.length) {
        fulfill(items[index++]);
      }
    }
  };
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

(async () => {
  const items = iterate(electronics);
  // Use `new Iterator(electronics)`
  const item1 = await items;
  console.log(item1);
  const item2 = await items;
  console.log(item2);
  const item3 = await items;
  console.log(item3);
  const item4 = await items;
  console.log(item4);
})();
