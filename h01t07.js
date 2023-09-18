const points = [64,56,48,12,81,91,34,19,95,55];

const grades = points.map((x) => {
    if(x >= 85){
        return 5
    } else if(x >= 70){
        return 4
    } else if(x >= 60){
        return 3
    } else if(x >= 50){
        return 2
    } else if(x >= 40){
        return 1
    } else {
        return 0
    }
});