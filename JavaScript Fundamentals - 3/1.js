const car = {
    make: "suzuki",
    model: "Ritz",
    year: 2012,
}
function carProperties (x) {
    for (const key in x) {
        console.log( key + ": " + x[key]);        
        }
    }


carProperties(car);
