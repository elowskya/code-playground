function giveMeEms(pixels) {
    var baseValue = 16;

    function doMath(){
        return pixels/baseValue;
    }

    return doMath;
}

var smallSize = giveMeEms(12);
var medSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xLargeSize = giveMeEms(32);


console.log("small:", smallSize());
console.log("medium:", medSize());
console.log("large:", largeSize());
console.log("xlarge:", xLargeSize());