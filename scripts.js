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
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// 5. Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);
console.log(nonCapeProvinces);

// 6. Finding 'S'
const containsS = names.map(name => name.toLowerCase().includes('s'));
console.log(containsS);

// 7. Creating Object Mapping
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// Log Products
products.forEach(product => console.log(product.product));

// Filter by Name Length
const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);

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
