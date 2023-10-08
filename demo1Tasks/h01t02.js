var arr = [true, false, 9, -0.7, 0, 'kissa', '', '', null, undefined, {}, [], [0,1]];

const returnTest = arr.map((x => {
    if(x){
        return true;
    } return false;
}));