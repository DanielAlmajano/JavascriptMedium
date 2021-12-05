//Forma zoomer
var myCar1 = new Object();
myCar1.make = 'Ford';
myCar1.model = 'Mustang';
myCar1.year = 1969;
//console.log(myCar1);


let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

//console.log(myCar.make, myCar.model, myCar.year);



//Show props
function showProps(obj, objName) {
    let result = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    return result;
}
console.log(showProps(myCar,  "myCar"))



//Enumerate the properties of the object
function listAllProperties(o) {
    let objectToInstepct;
    let result = [];

    for (objectToInstepct = 0; objectToInstepct !== null; objectToInstepct = Object.getPrototypeOf(objectToInstepct)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInstepct));
    }
    return result
}

console.log(listAllProperties(myCar))


//A constuctor function
function Car(make, model, year, owner=null) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}


//Delete property
a = {a: 1, b: 2};
console.log(delete a.a && delete a.b);
console.log(a);