const student = {
    name: "Harish",
    age: "27",
    grade: "A",
}

function updateGrade (x){
    student.grade = x;
}
 
console.log(student.grade); // Output: A
updateGrade("A+");

console.log(student.grade); // Output: A+