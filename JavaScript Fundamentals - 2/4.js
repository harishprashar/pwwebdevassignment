
const products = [
    { name: "Laptop", price: 12000},
    { name: "Mobile", price: 7000},
    { name: "Laptop Bag", price: 20000},
    { name: "Watch", price:20000},
    { name: "Mobile Charger", price: 1500},
];

function findMinMaxProduct () {
    let minProduct = products[0];
    let maxProduct = products[0];
    for (const product of products) {
        if (product.price > maxProduct.price) {
            maxProduct = product;
        } 
        if (product.price < minProduct.price){
            minProduct = product;
        }
    }
    console.log(`The product with maximum amount is ${maxProduct.name} with price: ${maxProduct.price}.`);
    console.log(`The product with minimum amount is ${minProduct.name} with price: ${minProduct.price}.`); 
}

findMinMaxProduct(products);
