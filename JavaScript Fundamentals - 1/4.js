let childTicketprice = 100;
let adultTicketprice = 150;
let seniorTicketprice = 120;

let numberofChilds = 2;
let numberofAdults = 1;
let numberofSeniors = 1;

let totalPrice = 
numberofChilds * childTicketprice + numberofAdults * adultTicketprice + 
numberofSeniors * seniorTicketprice;

console.log("The total ticket price is $ " + totalPrice);