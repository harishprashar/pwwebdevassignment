let typeOfPackage = "express";

switch (typeOfPackage) {
    case "standard":
        console.log("Your package might take 3-5 days");
        break;
    case "express":
        console.log("Your package might take 1-2 days");
        break;
    case "overnight":
        console.log("Your package would be delivered the next day.")
    default:
        console.log("Please choose delivery type !!!")
        break;
}
