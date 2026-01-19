'use strict';

// Task: support rejection with an error after last item

const iterate = (items) => {
  let index = 0;
  return {
    then(fulfill, reject) {
      // Call both: fulfill and reject
      if (index < items.length) {
        fulfill(items[index++]);
      } else {
        reject(new Error('No items'))
      }
    },
  };
};

const electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 10 },
];

(async () => {
  const items = iterate(electronics);
  const item1 = await items;
  console.log(item1);
  const item2 = await items;
  console.log(item2);
  const item3 = await items;
  console.log(item3);
  const item4 = await items;
  console.log(item4);
})();
