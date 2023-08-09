//has to be first to be used
// lect32
/*
'use strict';

let hasDriversLicense=false;
const passTest=true;

if(passTest)hasDriversLicense=true;
if(hasDriversLicense) console.log(`I CAN DRIVE`);


// const interface='Audio';
//const private=543;

//forbids us to do things
*/
// lect33func
/*
function logger(){
    console.log('My name is Jonas');

}

logger();

function fruitProccessor(apples, oranges)
{
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice=fruitProccessor(5,0);
console.log(appleJuice);

const appleOrangeJuice=fruitProccessor(2,4);
console.log(appleOrangeJuice);
*/
//lect 34 fucnt
/*
function callage1(birthyear)
{
    const age= 2037-birthyear;
    return age;
}


const age1=callage1(1991);
console.log(age1);

const calcAge2=function(birthyear)
{
    return 2037-birthyear;
}

const age2 = calcAge2(1991);
console.log(age1,age2);
*/

// lect 35 arrow funct

/*
const calcage3=birthyear=>2037-birthyear;

const age3= calcage3(1991)

console.log(age3);


const yearstoretirement=(birthyear,firstName)=>{
    const age=2037-birthyear;
    const retirement=65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearstoretirement(1991,'Jonas'));
*/

// lect 36 cqalling other func
/*
function cutfruitpieces(fruit)
{
    return fruit*4;
}


function fruitProccessor(apples, oranges)
{
    const applepieces=cutfruitpieces(apples);
    const orangepieces=cutfruitpieces(oranges);

    console.log(apples,oranges);
    const juice=`Juice with ${applepieces} apple pieces and ${orangepieces} orange pieces!`;
    return juice;
}

const appleOrangeJuice=fruitProccessor(2,4);
console.log(appleOrangeJuice);
*/


// lect37 review func
/*
const calcAge= function (birthyear)
{
    return 2037-birthyear;
}

const yearstoretirement=function(birthyear,firstName) {
    const age=2037-birthyear;
    const retirement=65-age;
    if (retirement>0)
    {
        console.log( `${firstName} retires in ${retirement} years`);
     return retirement;
    }
    else 
    {
        console.log( `${firstName} has already retired`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearstoretirement(1991,'jonas'));
console.log(yearstoretirement(1970,'michael'));
*/


// lect39 arrays
/*
const friend1='Michael';
const friend2='Steven';
const friend3='Peter';

const friends=['Michael','Steven','Peter'];//literal
console.log(friends);//even though it is const you can change 1 at a time

const yea= new Array(1991,1993,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);
friends[2]='Jay';
console.log(friends);


const firstName='Jonas';
const jonas=[firstName,'Steven',20370-1991,'teacher',friends];
console.log(jonas);
console.log(jonas.length);


// exercise

const calcAge=function(birthyear)
{
    return 2037-birthyear;
}

const years=[1990,1967,2002,2010,2018];
console.log(calcAge(years));

const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages= [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
console.log(ages);

*/
//--lect 39
/*
const friends=['Michael','Steven','Peter'];
const newLength= friends.push('Jay');
console.log(friends);
console.log(friends.length);

friends.unshift('John');//adds first
console.log(friends);

const popelement=friends.pop();// remove last element
console.log(friends);
console.log(popelement);

friends.shift();//remove, first, pops first
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Tudor'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Tudor'));

if(friends.includes('Steven'))
{
    console.log('You have friend Steven');
}
*/
//-0--lect 42 OBJECTS
 /*
const jonas={
    //ARRAYS FOR ORDERER
    //OBJECTS FOR retrieving data
    firstName:'Jonas',
    lastName:'Schenman',
    age:2037-1991,
    job:'teacher',
    friends:['Michael','Peter','Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey='Name';//computed
console.log(jonas['last'+nameKey]);
console.log(jonas['first'+nameKey]);

const interestedi=prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');
console.log(jonas[interestedi]);

if(jonas[interestedi])
{
    console.log(jonas[interestedi]);
}
else
{
    console.log('Wrong request');
}

jonas.location='Portugal';
jonas['twitter']='@jonasschnenman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends , and his best friend is called ${jonas.friends[0]}`);
*/

//lect 44 obj methods
/*
const jonas={
    //ARRAYS FOR ORDERER
    //OBJECTS FOR retrieving data
    firstName:'Jonas',
    lastName:'Schenman',
    birthyear:1991,
    job:'teacher',
    friends:['Michael','Peter','Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthyear)//expresion not DECLARATION
    // {
    //     return 2037-birthyear;
    // }


    // calcAge: function()
    // {
    //     // console.log(this);
    //     return 2037-this.birthyear;//points to itself even if u cahnge method name
    // }

    calcAge:function()
    {
        this.age=2037-this.birthyear;
        return this.age;
    },

    getSummary : function()
    {
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license`;
    }

};
// console.log(jonas.calcAge(jonas.birthyear));
// console.log(jonas['calcAge'](1991));
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());
*/

//lect 46 loops
/*
console.log('Lifting wieght rep 1');
for (let i=1;i<=10;i++)
{
    console.log(`Lifting weight rep ${i}`);
}
*/

//lect47 break loops

/*const types=[];

const jonas=[
    //ARRAYS FOR ORDERER
    //OBJECTS FOR retrieving data
    'Jonas',
    'Schenman',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven']
]

for (let i=0; i<jonas.length;i++)
{
    if(typeof jonas[i]!=='string')continue;
    console.log(jonas[i],typeof(jonas[i]));

    // types[i]=typeof(jonas[i]);

    // types.push(typeof jonas[i]);
}

console.log(types);


const years=[1991,2007,1969,2020];
const ages=[]
for(let i=0;i<years.length;i++)
{
    
    ages[i]=2037-years[i];
    
}

console.log(ages);

for (let i=0; i<jonas.length;i++)
{
    if(typeof jonas[i]==='number')break;

    console.log(jonas[i],typeof(jonas[i]));
    // types[i]=typeof(jonas[i]);

    // types.push(typeof jonas[i]);
}
*/

//lect48 backloops looppspspp

/*
const jonas=[
    //ARRAYS FOR ORDERER
    //OBJECTS FOR retrieving data
    'Jonas',
    'Schenman',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven']
]

for (let i=jonas.length-1; i>=0;i--)
{
    console.log(i,jonas[i]); 
}

for (let i=1; i<=3;i++)
{
    console.log(`---------Starting exercise ${i}`);
  for (let rep=1;rep<=5;rep++)
        {
            console.log(`Exercise ${i}, Lifting wieght rep ${rep}`);
        }
}
*/

// lect49 while loop
let rep=1;
while(rep<=10)
{
         console.log(`Lifting wieght rep ${rep}`);
         rep++;
}
let dice= Math.trunc(Math.random()*6)+1;
while (dice!==6)
{
    dice= Math.trunc(Math.random()*6)+1;
    console.log(`You rolled a ${dice}`);
    if (dice===6)console.log(`Loop is endint u did a 6!`);
}