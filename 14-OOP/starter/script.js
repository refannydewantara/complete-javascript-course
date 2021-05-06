'use strict';

const Person = function (firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

}

const repha = new Person ('repha', 1998);

// Prototypes - set method
Person.prototype.calcAge = function(){
    console.log(2021 - this.birthYear);
}

repha.calcAge();

console.log(Person.prototype);

console.log(repha.__proto__ === Person.prototype) //true

console.log(Person.prototype.isPrototypeOf(repha)) //true

console.log(Person.prototype.isPrototypeOf(Person)) //false

//.prototyoe --> .prototypeOfLinkedObjects (more honest name)

//Prototypes - set properties

Person.prototype.species = 'Homo Sapiens';

console.log(repha.species);


console.log(repha.hasOwnProperty('firstName')); //true, declared directly on the object
console.log(repha.hasOwnProperty('species')); //false, inherited (has access)


//curly bracket --> object
function curly() {
    console.log(123);
}

curly();