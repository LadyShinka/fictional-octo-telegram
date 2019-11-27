// exercise conditionals

// var age = prompt("How old are you?");
// Get age and convert to a number becasue prompt always returns a string!!!
var age = Number(prompt("What is your age?"))
// var a = 1;
// var b = 4;
// var c = 9;
// var d = 16;
// var e = 25;
// var f = 36;
// var g = 49;
// var h = 64;
// var i = 81;
// var j = 100;
if (age < 0) {
    console.log("Apologies, you cannot be younger than when you were born!");
}
else if (age == 21) {
    console.log("Happy 21st birthday!");
}
else if (!(age % 2 == 0)){
    console.log("your age is odd!");
}
// (age == a) || (age == b) || (age == c) || (age == d) || (age == e) || (age == f)|| (age == g) || (age == h) || (age == i) || (age == j)
else if (age % Math.sqrt(age) == 0) {
    console.log("Your age is a perfect square;");
}
else {
    console.log("Please make sure you have inserted your age!")
}
