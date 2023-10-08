const elements = [6,4,2,5,9,7,5,7,2];

const containsNumber = function(numbers, aNumber) {
    for(let x = 0; x < numbers.length; x++){
        if(numbers[x] === aNumber){
            return (`Array contains ${aNumber}`);
        }
    }
    return (`Array doesn't contain ${aNumber}`);
}
