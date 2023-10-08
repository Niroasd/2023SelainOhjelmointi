

function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0) || (year % 400 === 0)){
        return true;
    }
    return false;
}

function isLeapYearShorter(year) {
    return (year % 4 === 0 && (year % 100 !== 0) || (year % 400 === 0));
}

let arr = ['asd', 2, ['a', 'b']];

