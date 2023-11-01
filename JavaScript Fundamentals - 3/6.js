
function reverseString (n) {
    let string = n;
    string =  string.split(" ");
    let reversed = string.reverse();
    let joined = reversed.join(" ");
    console.log(joined);
}   

// put string in function call as an argument
reverseString("Virat Kohli"); 