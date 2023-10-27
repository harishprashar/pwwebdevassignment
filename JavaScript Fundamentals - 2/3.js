const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
];

function moreThan90 (name) {
    for (const student of students) {
        if(student.name === name){
            if (student.marks > 90 ) {
                console.log("Congratulations " + student.name + " ! You have cleared the exam.")
        }
        else{
            console.log("Sorry, you have not cleared the exam.")
        }
        return;
        }
    }
    console.log("Invalid User !!");
}

moreThan90("Aman");
moreThan90("Mithun");