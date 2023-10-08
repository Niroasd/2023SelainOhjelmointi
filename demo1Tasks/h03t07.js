class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    sayGreeting() {
        return (`Hello ${this.name}!`);
    }
};

class SuperHero extends Person{
    constructor(name, age, superpower){
        super(name, age);

        this.superpower = superpower;
    }

    useSuperPower(){
        console.log(this.superpower);
    }
}

class ZipValidator{
    constructor(){

    }

    static isValidZip(zipCode){
        const pattern = /\D/;
        //return true if valid, return fixed value if fixable
        if (!(pattern.test(zipCode)) && zipCode.length !== 5){
            return this.fixZip(zipCode);
        } else if (!(pattern.test(zipCode)) && zipCode.length === 5){
            return true
        }
        return false;
    }

    static fixZip(zipCode){
        let fixable = zipCode;
        return fixable.padStart(5, '0');
    }
}