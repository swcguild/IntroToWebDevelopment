// This shows how to get the value from the text box.
function displayValue(){
    alert(document.getElementById("sampleNumber").value);
}

// This shows how to add 1 to the value from the text box.
// Note how this behaves.  Does .value give you what you expect - both in the value and the type?
function displayValuePlus1(){
    alert(document.getElementById("sampleNumber").value + 1);
}

// This shows how to add 1 to the value from the text box.
// Note parseInt is used to change the value to a numeric value, before performing math on it.
function displayConvertedValuePlus1(){
    alert(parseInt(document.getElementById("sampleNumber").value) + 1);
}