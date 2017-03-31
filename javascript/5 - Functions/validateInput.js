// This example shows how to use a do...while loop
// to gather valid input from a user.

// In this case, we are using the prompt() function
// to get the user input.

var numBetween1And10 = -1;
do {
    numBetween1And10 = prompt("Please enter a number between 1 and 10");
} while (isNaN(numBetween1And10) || numBetween1And10 > 10 || numBetween1And10 < 1);

// We could do something like this in a while loop as well
// Keep in mind that a while loop only executes if the loop condition is true
while (numBetween1And10 <= 5){
    numBetween1And10 = prompt("Please enter a number greater than 5");
}
