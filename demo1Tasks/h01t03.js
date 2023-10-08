const baseString = `I have `
const secondString = ` euros.`
const numberValue = 36.5

const printFunc = () => {
    console.log(`I have ${numberValue} euros.`);
    console.log(baseString.toLowerCase() + numberValue + secondString);
};