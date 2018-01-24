"use strict";

// https://javascript.info/variables
// Working with Variables
/* Working with Variables Task
let name;
let admin;

name = "John";
admin = name;
alert(admin);
*/

/* https://javascript.info/variables#giving-the-right-name

const ourPlanet;
let planetVisitor;

*/

/* https://javascript.info/types#string-quotes
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

 */

 /* https://javascript.info/type-conversions#type-conversions 

 "" + 1 + 0 // 1
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // NaN
"$" + 4 + 5 // 9
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // 0
"  -9\n" + 5 // NaN
"  -9\n" - 5 //NaN
null + 1 // 1
undefined + 1 // 1
*/

/* https://javascript.info/operators#the-postfix-and-prefix-forms 

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
alert(c);
alert(d);

*/
/* Comparisons https://javascript.info/comparison#comparisons

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false
 */

 /* A simple Page https://javascript.info/alert-prompt-confirm#a-simple-page

 let name = prompt("What is your name?", "Dave");
 alert(name);

  */

  /* The Name of JavaScript - https://javascript.info/ifelse#the-name-of-javascript

let question = prompt("What's the real name of JavaScript");
if (question == "ECMAScript") {
    alert("Right!");
} else {
    alert("Didn't know? ECMAScript!");
}

 */
/* Show the sign https://javascript.info/ifelse#show-the-sign 

let num = prompt("Enter a number",0);
if (num > 0) {
    alert("1");
} else if (num < 0){
    alert("-1");
} else {
    alert("0");
}
*/

/* Check the login https://javascript.info/ifelse#check-the-login 

let login = prompt("Who's there?");
if (login == null) {
    alert("Cancelled");
} else if (login != "Admin") {
    alert("I don't know you");
} else {
    let pwd = prompt("Password?")
    if (pwd == null) {
        alert("Cancelled!");
    } else if (pwd != "TheMaster") {
        alert("Wrong Password");
    } else {
        alert ("Welcome");
    }
}

*/

/* Output Even Numbers https://javascript.info/while-for#output-even-numbers-in-the-loop 

for (let i = 0; i <= 10; i++) {
    if (i%2 == 0){
        alert(i);
    }
}
*/
/* Replace for with while loop https://javascript.info/while-for#replace-for-with-while */

//for (let i = 0; i < 3; i++) {
//    alert( `number ${i}!` );
//}

//let i = 0;
//while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
//}

/* Repeat until correct input https://javascript.info/while-for#repeat-until-the-input-is-correct 

let i = 0;
while ( i <= 100) {
    i = prompt("enter a number");
    alert(i);
}

*/

/* Output Prime Numbers https://javascript.info/while-for#output-prime-numbers */

// For each i in the interval {
//     check if i has a divisor from 1..i
//     if yes => the value is not a prime
//     if no => the value is a prime, show it
//   }

let str = prompt("Enter a numbe to list Prime Numbers up until");
let num = Number.parseFloat(str);
nextPrime:
for (let i = 2; i <= num; i++ ) {
    for (let test = 2; test < num; test++) {
        if (i % test == 0) {
            continue nextPrime;
        }
        console.log(i);
    }
}