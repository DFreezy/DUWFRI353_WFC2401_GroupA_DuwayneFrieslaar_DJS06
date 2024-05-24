const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. ForEach Basics
names.forEach(name => console.log(name));
//I console.log each name
provinces.forEach(province => console.log(province));
//I console.log each province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
//Finally I logged eeach name with their respective province in the console using the forEach method

// 2. Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);
//I used the map method to iterate over the array of provinces, and make a new array where each province is upperCase

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
//I used map to iterate over the array, and return a new array of the length of each.

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);
//I sorted all provinces in alphabetical order

// 5. Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);
console.log(nonCapeProvinces);
//I filtered out all provinces which doesn't include 'Cape'

// 6. Finding 'S'
const containsS = names.map(name => name.split('').some(char => char.toLowerCase() === 's'));
console.log(containsS);
//I used map and some methods to find the letter 's'

// 7. Creating Object Mapping
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);
//I created an object storing the names as keys, and the provinces as values

// Log Products
products.forEach(product => console.log(product.product));

// Filter by Name Length
const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);
//I filtered out the product name based on length

// Price Manipulation
const validProducts = products
  .filter(product => product.price !== '')
  .map(product => ({ ...product, price: Number(product.price) }));

const totalPrice = validProducts.reduce((total, product) => total + product.price, 0);
console.log(totalPrice);

// Concatenate Product Names
const concatenatedProductNames = products.reduce((acc, product) => acc + product.product, '');
console.log(concatenatedProductNames);

// Find Extremes in Prices
const priceExtremes = validProducts.reduce((acc, product) => {
  if (product.price > acc.highest.price) acc.highest = product;
  if (product.price < acc.lowest.price) acc.lowest = product;
  return acc;
}, { highest: { price: -Infinity }, lowest: { price: Infinity } });

console.log(`Highest: ${priceExtremes.highest.product} (${priceExtremes.highest.price}). Lowest: ${priceExtremes.lowest.product} (${priceExtremes.lowest.price})`);

// Object Transformation
const transformedProducts = products.reduce((acc, product, index) => {
  acc[index] = { name: product.product, cost: product.price };
  return acc;
}, {});

console.log(transformedProducts);
