import { Product, taxCalculation } from './06-function-destructuring';
// import { TaxCalculationOptions } from './06-function-destructuring';

const shoppingCart : Product[] = [
    {
        description: 'Nokia',
        price: 100

    },
    {
        description: 'iPad',
        price: 150
    }
];

// const taxCalculation : TaxCalculationOptions [] = [
//     {
//         tax: 0.15,
//         products:[]
//     }
// ];

// tax  = 0.15
const [ total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax:0.15
});

console.log('Total', total);
console.log('Tax', taxTotal);





