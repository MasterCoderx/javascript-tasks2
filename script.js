// Exercise 1

function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    }
    return false;
}

console.log(setAlarm(true, false))

// Exercise 2

function closeCompare(a, b, margin) {
    if (margin > 0 && Math.abs(a - b) >= margin) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1
}

console.log(closeCompare(1, 2, 0));

