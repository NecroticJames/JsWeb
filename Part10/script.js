'use strict';
/* it is for scoping exercise
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);
      const firstName = 'Steven';
      function add(a, b) {
        return a + b;
      }
      //   if you add const or let it creates a new one that happens to have the samename
      output = 'NEW OUTPUT';
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

// hoisting and TDZ

/*
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

// only this one works bcs is a function
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// execution altough its still 10
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

// global scope with var
console.log(x === window.x); // the x from this windows value
console.log(y === window.y);
console.log(z === window.z);
*/

// this points to global object when in sloppy mode
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

// it has not his own this keyword, it will point to global scope
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

// method inside objects this calls objects

// this point to the objects that calls the method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
// copy but noy called
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// no owner, regular function call
f();
*/
// arrow vs regular

//more of a object literal

// var firstName = 'Matilda';

// arrow and regulars

/*
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      //   console.log(self);
      console.log(this.year >= 1981 && this.year <= 1996);
      //   console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
  //   never use arrow as a method, arrows call the this of the parent scope
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function addDecl(a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 1, 9);
// const addExpr = function (a, b) {
//   return a + b;
// };

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// arguments does not exist in arrow funct
addArrow(2, 5, 1);
*/
/*
// age point to addres 30
// oldage points to old age
// age point to 31 adress now
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

// me reference value
// it stores the value of the heap address
// friend also points to the same heap memory as address
//all the value of address is in call stack that points to heap
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

*/

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
// we basically change in the heap so it points to same address
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('Before marriage:', marriedJessica);

// it will create a blank one with different address
// but its constant si in call stack it wont change
// marriedJessica={};

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// copies the information from jessica2
//only first level copy shallow
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// altough it copied it points to the same family address
// and it changes the information in heap from family
// family is deeply nested
console.log('Before marriage:', jessica2);
console.log('Before marriage:', jessicaCopy);
