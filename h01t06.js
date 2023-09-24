const distances = [ 164, 526, 248, 12, 81, 181, 34 ];
const numsToAdd = [8, 533, 76];

const arrAdd = () =>{
    for (let x in numsToAdd){
        distances.push(numsToAdd[x]);
    } 

    console.log(distances);
    return;
}

const arrLen = () => {
    return distances.length;
}

const arrRemove = () => {
    distances.splice(2, 1);
    return distances;
}


const copyArr = () => {
    const distances_duplicate = [...distances];
    return distances_duplicate;
}