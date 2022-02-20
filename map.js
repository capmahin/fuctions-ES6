const numbers = [12,23,43,77,88];
const output = numbers.map(x=> x*x);
console.log(output);


// map and forEach

const products = [
    {name:'iphone',price:1200,color:'green'},
    {name:'tecno',price:2200,color:'green'},
    {name:'itel',price:1800,color:'green'},
    {name:'samsong',price:1700,color:'green'}
]
const productName = products.map(product => product.name);
console.log(productName);
const productPrice = products.map(product => product.price);
console.log(productPrice);
products.map(product =>console.log(product));
products.forEach(product => console.log(product));