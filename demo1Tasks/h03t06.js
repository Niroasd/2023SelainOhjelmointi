const getRandomIntegerFromRange = (startRange, endRange) => {
    if(typeof(startRange) === "number" && typeof(endRange) === "number"){
        return Math.floor(Math.random() * (endRange - startRange + 1) + startRange);
    } else {
        return(`Invalid argument(s), give integers.`);
    }
};

const getTimeDifferenceInFullDays = (startDate, endDate) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    var difference = end.getTime() - start.getTime(); 
      
    var differenceDays = difference / (1000 * 3600 * 24); 
    return (`There's ${differenceDays} days between the dates.`);
}
