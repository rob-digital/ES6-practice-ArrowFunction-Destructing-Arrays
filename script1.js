//##############################################
// 1. Arrow functions
//##############################################

const dates = [1990, 2004, 1980, 2010];

// 1
let years = dates.map( el => 2020 - el);
console.log(years);
console.log(dates);

// 2
let ages = dates.map((el, index) => `${index + 1}: ${2020 - el} `);

console.log(ages);

// 3
ages = dates.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;

  return `Age number ${index + 1}: ${age}`;
});

console.log(ages);


//ES5 ~~~~~~~~~~~~~~~~~~~~~~
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
       var self = this;  document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box no: ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

box5.clickMe();


//ES6 ~~~~~~~~~~~~~~~~~~~~~~~~~

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            const str = `This is a ${this.color} box, and it is on position no ${this.position}`;
            alert(str);
        })
    }
}
    
    box6.clickMe();


// -----------------------------------
// ES5 with Prototype

function Person(name) {
    this.name = name;
}

Person.prototype.hasFriends = function (friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friend with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Sam', 'Bob', 'Tom'];

new Person('John').hasFriends(friends);



// ES6 with Prototype

function Person2(name) {
    this.name = name;
}

Person2.prototype.hasFriendsES6 = function (friends) {
    var arr = friends.map((el) => 
        `${this.name} is friends with ${el}` );
    
    console.log(arr);
}

var friends = ['Sam', 'Bob', 'Tom'];

new Person2('Mike').hasFriendsES6(friends);



//##############################################
// 2. Destructuring
// - putting each element of the array into a separate variable
//##############################################

// ES5
var john = ['John', 25, 'New York'];
var name = john[0];
var age = john[1];
var place = john[2];


// ES6
const [name2, age2, place2] = ['Tom', 33, 'Scotland'];
console.log(name2, age2, place2);
console.log(`${name2} is ${age2} and he is from ${place2}`);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(`${firstName} ${lastName}`);

// setting different names than variable names to key names 
const {firstName: obj1name, lastName: obj1surname} = obj;
console.log(`${obj1name} ${obj1surname}`);



//Es6 destructing from a function
function clacAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [newAge, newRetirement] = clacAgeRetirement(2000);
console.log(newAge);
console.log(newRetirement);

//##############################################
// 3. Arrays
//##############################################


const boxes = document.querySelectorAll('.box');

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
//console.log('boxes5:', boxesArr5);
boxesArr5.forEach(function (el) {
    el.style.backgroundColor = 'blue';
})


for (var i = 0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className ==='box blue') {
        continue;
    }
   // boxesArr5[i].innerHTML = 'rts';
    boxesArr5[i].textContent = 'rts45345325';
   
}
*/

//ES6 "from" method
const boxesArr6 = Array.from(boxes);

boxesArr6.forEach( el => el.style.backgroundColor = 'lightblue');

// ES6 - forof
for (const cur of boxes) {
     //if(cur.className ==='box blue') {
     if(cur.className.includes('blue') ) {
        continue;
    }
    cur.textContent = 'I turn into blue';
}


// Array Exercise2 - to find ONE element in the array

//ES5 
ages = [12, 15, 14, 21, 17];

var fullAge = ages.map(function (cur) {
    return cur >= 18;
})

console.log('fullAge:', fullAge);
fullAge.indexOf(true);
console.log('True on position:', fullAge.indexOf(true));
console.log('Adult person:', ages[fullAge.indexOf(true)]);

//ES6
const checkPositionOfAdult = ages.findIndex(el => el >= 18);
console.log('checkPositionOfAdult:', checkPositionOfAdult);

const checkAdult = ages.find(el => el >= 18);
console.log('checkAdult:', checkAdult);

























