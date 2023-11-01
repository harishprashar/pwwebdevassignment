const employee = {
    name: "Rachin",
    salary: 15000,
    age: 23,
    id: "kiwi2023",
}

function numberOfProperties (x){
    console.log(Object.keys(x).length);
}

numberOfProperties(employee);