"use strict";
/*
const xasdfasdf = "23";
const calcAge = (birthyear) => 2047 - birthyear;

console.log("$a");
console.log(xasdfasdf);

*/
// problem:
// company building  smart home thermo. array of temp
// calc the temp aplitude, sometimes sensor erros

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// understandin
// what it temp aplitude, difference between high and low temp
// compute min and max?
// what is sensor error

// breaking up in sub problmes
// how to ignore error
// find min in array
// find max in array
// sub min from max , return
/*
const mergearrays=function(temper1,temper2)
{
    return temper1.concat(temper2);
}
const t1=[3,6,-4];
const t2=[10,3,6];
let temps=mergearrays(t1,t2);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp!=='number')continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max);
  console.log(min);
  return max-min;
};

const Amplitude=calcTempAmplitude(temps);
console.log(Amplitude);
*/

// take dates and take the indexes which writes to the console

let temp1 = [17, 21, 23];
let temp2 = [12, 5, -5, 0, 4];

const printForecast = function (temps) {
  let str = "";
  for (let i = 1; i <= temps.length; i++) {
    str = str + `... ${temps[i - 1]}°C in ${i} days`;
  }
  return str;
};

const t1 = printForecast(temp1);
const t2 = printForecast(temp2);

console.log(t1);
console.log(t2);
