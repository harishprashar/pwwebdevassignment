
function calculateRemainingDays () {    
    const currentDate = new Date();
    const eventday = new Date (eventDate);
    const Difference = eventday - currentDate; 
    const remainingDays = Math.ceil( Difference / (1000*60*60*24) );
    return remainingDays; 
}

const eventDate = '2023-11-26'; // submitting assignment late so using anothor date that is 30 days from today's date
console.log(calculateRemainingDays(eventDate));
