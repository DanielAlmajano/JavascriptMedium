//get
let person = {
    name: 'name',
    surname: 'surn1 surn2',
    getFullName: () => this.name + ' ' + this.name
};

class Person {
    constructor() {
        this.name = 'name';
        this.surname = 'sur1 sur2'
    }
    get FullName() {
        return this.name + ' ' + this.surname;
    }
}

let person1 = new Person();
let person2 = person.getFullName();
console.log(person1);
console.log(person2);

//set 
let interval = {
    maximun: 4,
    minimun: 3,
    get values() {
        let contents = [];
        for (let i = this.minimun; i <= this.maximun; i++) {
            contents.push(i);
        }
        return contents;
    }
}

let interval1 = interval.values();
console.log(interval1);
