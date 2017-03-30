// This is a simple function
// It has no parameters
// It returns no values
function sayHi(){
    alert("Hi!");
}

// Now call the sayHi() function:
sayHi();

// Now if we want to say hi with a name
// We could pass the name in as an argument
// The function then needs a parameter to take in the values

// First - we build the function
// Note that we do not need to use var in the function parameters
// JavaScript will figure out the type on its own
function sayHiTo(name){
    alert("Hi, " + name + "!");
}

// Now, let's say hi to Dave and Eric, with 2 calls to the sayHiTo() function
sayHiTo("Dave");
sayHiTo("Eric");

// What if we passed in something that isn't a string? 
// Let's try with a number:
sayHiTo(3.1415);

// What about a boolean?
sayHiTo(true);

// What about null?
sayHiTo(null);

// What about undefined?
var undefinedName;
sayHiTo(undefinedName);