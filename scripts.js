// A list of provinces:
/*const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]*/

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products1 = [
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


const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Log Products
console.log(products.forEach(product => console.log(product.product)));

// Filter by Name Length
console.log(products.filter(product => product.product.length <= 5));

// Price Manipulation
console.log(products
  .filter(product => product.price.trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((total, product) => total + product.price, 0)
);

// Concatenate Product Names
console.log(products.reduce((acc, product) => acc + product.product, ''));

// Find Extremes in Prices
console.log(products
  .filter(product => product.price.trim() !== '')
  .map(product => ({ ...product, price: Number(product.price) }))
  .reduce((acc, product) => {
    if (product.price > acc.highest.price) acc.highest = product;
    if (product.price < acc.lowest.price) acc.lowest = product;
    return acc;
  }, { highest: { price: -Infinity }, lowest: { price: Infinity } })
);

// Object Transformation
console.log(Object.entries(products).reduce((acc, [key, value]) => {
  acc[key] = { name: value.product, cost: value.price };
  return acc;
}, {}));
