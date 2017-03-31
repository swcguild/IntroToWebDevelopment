// These are the average temperatures that could repesent
// a week in Cleveland, OH at any given point of the year.
var averageTemps = [70, 55, 65, 55, 55, 60, 70];

function calculateAverageTemp(temperatureArray){
    // To calculate the average, get the sum of the averageTemps
    // Then divide the sum of the temperatures by the number of temperatures
    var sumOfTemperatures = 0;

    // We calculate the sum by looping through the array
    // updating the total as we go
    for (var tempPosition=0; tempPosition < temperatureArray.length; tempPosition++){
        // Using the unary += is a shorthand of saying
        // sumOfTemperatures = sumOfTemperatures + averageTemps[tempPosition]
        sumOfTemperatures += temperatureArray[tempPosition];
    }

    // The number of temperatures is the length of the array.
    return sumOfTemperatures / temperatureArray.length;

}

// Let's write out the average 
console.log("Cleveland's average temperature is: ");
console.log(calculateAverageTemp(averageTemps));