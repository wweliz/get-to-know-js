// Variables
var dog = {
	name: "Sealie",
	nickname: "Seal Puppy",
	breed: "Labrador Retriever",
	color: "chocolate",
	bYear: 1998,
	dYear: 2014,
	treat: "bones"
}

var referenceToBreed = dog.breed

var familyMember = {
	name: "Hannah",
	nickname: "Bean",
	relation: "sister",
	bYear: 1990,
	dYear: null,
	age: 24
}

// notdef // will return "notdef is not defined" because notdef is not a named variable
var nope = null // will return "null" because the vaiable is defined, but has no inherent/assigned value
var undf // will return "undefined" because the variable is named but not defined
var obj = {} // will return obj {}

// Strings
var stt = "string-text-here" // will return "string-text-here"; a string is just text/numbers, etc. inside a set of matching parentheses

var eins = "one"
var zwei = "two"
	// typing "eins+zwei" in console will return "onetwo" because it concatenates (sticks together) the strings
var drei = "3"
var vier = "4"
	// typing "drei+vier" in console will return "34" because it treats the numerals in a string like text instead of like numbers
var fuenf = 5
	// typing "fuenf+6" in console will return "11" because it treats fuenf as a number (5 is not in quotation marks, so it's not a string)

// Booleans
var richtig = true
var falsch = false
	// typing "richtig+falsch" in the console will return "1" because the computer understands true to have a value of 1, and false to have 
	// a value of 0 (binary code)

// Arrays
var siebenachtneun = [7, 8, 9]
	// an array is a group of multiple values that can be assigned to a single variable; arrays are indexed (meaning that each of the the 
	// values occupies a certain numerical position) starting at a count of zero (imagine that every value is preceded by a comma; count the)
	// commas to determine which position a value occupies)

	// typing "siebenachtneun" in the console will return "[7, 8, 9]"
	// typing "siebenachtneun[0]" in the console will return "7" because 7 is in the zero position

// Comparison Operators
console.log(10 + 10); // addition
console.log(10 - 10); // subtraction

console.log(10 * 10); // multiplication
console.log(10 / 10); // division

console.log(10 == 10); // is equal to
console.log(10 != 10); // is not equal to

console.log(10 === 10); // is identical to (values in exact same format -- letters/numerals/string, etc.)
console.log(10 !== 10); // is not identical to

console.log(10 > 10); // is greater than
console.log(10 < 10); // is less than

console.log(10 >= 10); // is greater than or equal to
console.log(10 <= 10); // is less than or equal to

// If/Else Statements
if (fuenf=5) {
	alert("Congratulations, you just learned the German word for five!"); // fuenf equals five, so you will see the alert
}
else {
	alert("Nope, five isn't smaller than four. Sucker."); // fuenf will never not equal five, so you'll never see this alert
}

if (fuenf<6) {
	prompt("Yep, five is still less than six. If you'd like to type in a box that will do nothing, go right ahead!")
}

// Methods
function sisterName (x, y) {
	return x + y;
};

console.log("I call my little sister", familyMember.name + familyMember.nickname)

	// a method is simply a function nested inside of an object; unlike with functions, you can call a method without having to use the 
	// object-dot prefix (objectname.methodname)

// Functions
function dogAge (x, y) {
	return x - y;
};
	// typing "dogAge(dog.dYear, dog.bYear)" into your console will return the answer 16

