const products = [
    {name:'iphone',price:1200,color:'green'},
    {name:'tecno',price:2200,color:'green'},
    {name:'itel',price:1800,color:'green'},
    {name:'samsong',price:20,color:'yellow'}
];

const expensive = products.filter(product => product.price > 100);
console.log(expensive);
const green = products.find(product => product.color == 'green');
console.log(green);