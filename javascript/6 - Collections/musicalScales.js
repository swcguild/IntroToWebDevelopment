// A collection of musical notes
var scale = ["do","re","mi","fa","so","la","ti","do"];

// Just the scale
// We can use a for loop to loop through the collection
for (var notePosition=0; notePosition < scale.length; notePosition++){
    console.log(scale[notePosition]);
}

// Now let's make the associations
var scaleDescriptions = [
    "a deer - a female deer",
    "a drop of golden sun",
    "a name I call myself",
    "a long, long way to run",
    "a needle pulling thread",
    "a note to follow so",
    "a drink with jam and bread"
];

// Now, let's sing...
console.log("When you know the notes to sing,\nyou can sing most anything!");

// We can loop through the 2 collections
// Notice that scaleDescriptions does not have a description for the last "do"
for (var notePosition=0; notePosition < scale.length; notePosition++){
    // If we're at the end, we need to change our lyrics
    if (notePosition == (scale.length - 1)){
        console.log("That will bring us back to... " + scale[notePosition]);
    } else {
        // For most cases, we will sing the note and its respective description
        console.log(scale[notePosition] + " - " + scaleDescriptions[notePosition] );
    }
}