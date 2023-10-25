const orders = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];
function countFlavors(orders) {
  let obj = {};
  for (let i = 0; i < orders.length; i++) {
    let flavor = orders[i];
    if (obj.hasOwnProperty(flavor)) {
      obj[flavor]++;
    } else {
      obj[flavor] = 1;
    }
  }
  return obj;
}

const flavorCounts = countFlavors(orders);
console.log(flavorCounts);
console.table(flavorCounts);
// 1. Create an empty object to hold flavor counts
// 2. Loop over the ‘orders’ array
// 3. In the loop add an if/else
// obj { flavor: count}
// IF the flavor is IN the obj, increase the count
// ELSE add key:value pair to obj
