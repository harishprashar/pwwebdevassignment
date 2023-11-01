const car = {
    make: "suzuki",
    model: "Ritz",
    year: 2012,
}

function checkproperty (a,b) {
   return a.hasOwnProperty(b);
}

console.log(checkproperty(car,"name")); //output: true
console.log(checkproperty(car,"model")); //output: false
