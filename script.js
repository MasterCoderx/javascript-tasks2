// Exercise 1

function checkIfEmployed(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    }
    return false;
}

console.log(checkIfEmployed(true, false));

// Exercise 2

function closeCompare(distanceA, distanceB, margin) {
    if (margin > 0 && Math.abs(distanceA - distanceB) >= margin) {
        return 0;
    }
    if (distanceA < distanceB) {
        return -1;
    }
    return 1;
}

console.log(closeCompare(1, 2, 0));

// Exercise 3

function xor(valueOne, valueTwo ) {
    if (valueOne === true && valueTwo === false)
        return true;
    return valueOne === false && valueTwo === true;
}

console.log(xor(false, true))

function or(valueOne, valueTwo) {
    return valueOne === true || valueTwo === true;

}
console.log(or(true, false))

// Exercise 4


function _if(boolean, functionOne, functionTwo) {
    if (boolean === true) {
        return functionOne;
    }
    return functionTwo;
}

_if(true, function() {console.log('True')}, function() {console.log('False')})