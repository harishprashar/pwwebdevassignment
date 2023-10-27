function generateOtp (){
const r = Math.random();
const otp = Math.floor(r* 9000) + 1000 ;
console.log("Here is your otp: " + otp);
}

generateOtp();