const productDetails = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: "Grey",
    hardDisk: "256 GB",
};

console.log("Belowe are the product details.");

for (let key in productDetails) {
    console.log(key + `: ` + productDetails[key]);
};
