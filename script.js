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

function callFunction(boolean, functionOne, functionTwo) {
    if (boolean === true) {
        return functionOne();
    }
    return functionTwo()
}

callFunction(
    false,
    function() {
        console.log('True');
    },
    function() {
        console.log('False');
    }
);

// Exercise 5

const pricePerDay = 40; // [$]
const firstLevelDiscount = -20; // [$]
const secondLevelDiscount = -50; // [$]

function carRentalCost(numberOfDays) {
    const totalPrice = pricePerDay * numberOfDays;
    if (numberOfDays >= 7) {
        return totalPrice + secondLevelDiscount;
    }
    if (numberOfDays >= 3) {
        return totalPrice + firstLevelDiscount;
    }
    return totalPrice;
}

console.log(carRentalCost(6));
console.log(carRentalCost(8));
console.log(carRentalCost(2));

// Exercise 6

function convertToEuropeanSystem(FloorInAmericanSystem) {
    if (FloorInAmericanSystem > 13) {
        return FloorInAmericanSystem -2;
    }
    if (FloorInAmericanSystem === 13) {
        return "Due to superstition, 13th floor does not exist in the American system. Please try entering another floor level value";
    }
    if (FloorInAmericanSystem <= 0) {
        return FloorInAmericanSystem;
    }
    return FloorInAmericanSystem - 1;
}

console.log(convertToEuropeanSystem(0));
