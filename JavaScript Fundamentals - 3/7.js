const UserMap = new Map();

function addUser (name,age,email){
    if(UserMap.has(email)){ //taking email as key because email is always unique edentity
        console.log("User already exists !!");
    }
    else{
        UserMap.set(email,{name,email,age});
    }
}

function updateUser (email,name,age){
    if (UserMap.has(email)) {
        UserMap.set(email,{name,email,age})
    } else {
        console.log("User does not exits !!")        
    }
}

function deleteUser (email){
    if (UserMap.has(email)) {
        UserMap.delete(email);
    } else {
        console.log("User not found !!");
    }
}

addUser("Harish",27,"harish.prashar1996@gmail.com");
addUser("Rohit Sharma",35,"rohitsharma87@gmail.com");

console.log(UserMap);

updateUser("harishprashar@gmail.com",27,"Harish");
updateUser("harish.prashar1996@gmail.com",25,"Harish Prashar")

console.log(UserMap);

deleteUser("rohitsharma87@gmail.com",35,"Rohit Sharma");

console.log(UserMap);