
const convertToMins = (hoursInHundreds) => {

    const fullHours = String(hoursInHundreds).substring(0, hoursInHundreds.indexOf('.'));

    const minutes = String(hoursInHundreds).substring(hoursInHundreds.indexOf('.') + 1, )

    return fullHours + ":" + minutes * 0.60;

};