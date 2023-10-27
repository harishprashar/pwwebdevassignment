Alluser = ["Ajay","Hrithik","Rahul","Mithun"];

function isUserPresent(user){
    if (Alluser.includes(user)) {
        console.log("Yes, " + user + " is a valid user.")
    }
    else{
        console.log("No, " + user + " is not a valid user.")
    }
}

isUserPresent("Mithun");
isUserPresent("Someone");
