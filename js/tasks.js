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

/* Output Prime Numbers https://javascript.info/while-for#output-prime-numbers 

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
*/

/* Rewrite the switch into an if - https://javascript.info/switch#rewrite-the-switch-into-an-if */

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
//   
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
//   
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
/*
let browser = prompt ("Which Browser are you using");
if (browser === "Edge") {
    alert ("You've got the Edge!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert("We support those browsers too");
} else {
    alert ("We hope the page looks OK!");
}
*/

/* Rewrite if to be switch - https://javascript.info/switch#rewrite-if-into-switch */

// let a = +prompt('a?', '');
// 
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// 
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');
// switch (a) {
//     case 0 : {
//         alert("0");
//         break;
//     }
//     case 1 : {
//         alert("1")
//         break;
//     }
//     case 2:
//     case 3: {
//         alert("2 or 3");
//         break;
//     }
// }
/* Function min(a, b) - https://javascript.info/function-basics#function-min-a-b */

// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else if (a > b) {
//         return b;
//     } else {
//         return ("The numbers are equal");
//     }
// }

/* Function pow(x,n) - https://javascript.info/function-basics#function-pow-x-n */

// function pow(x,n) {
//     let powerTo = x ** n;
//     return powerTo;
// }
// let num = prompt("chose a number");
// let power = prompt("choose a power to");
// let x = Number.parseFloat(num);
// let n = Number.parseFloat(power);
// alert(pow(x,n));


/* Hello, object https://javascript.info/object#hello-object 

let user = {};

user.name = "john";
alert (user.name);
user.surname = "smith";
alert (user.surname);

user.name = "pete";
alert (user.name);
delete user.name;
alert (user.name);
*/

/* check for emptiness 

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  
  let schedule = {};

  alert( isEmpty(schedule) ); // true

  schedule["8:30"] = "get up";

  alert( isEmpty(schedule) ); // false
   */

/* Sum object properties https://javascript.info/object#sum-object-properties 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let total = 0;
for (let key in salaries) {
    total = total + salaries[key];
}
alert (total);
*/

/* Multiply numeric properties by 2 https://javascript.info/object#multiply-numeric-properties-by-2

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
   */

  /* Create Calculator https://javascript.info/object-methods#create-a-calculator 
  let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  */

  /* Chaining
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  }; 
   */

/* Sum numbers from visitor 
let a = +prompt("1st number?");
let b = +prompt("2nd number?");
alert(a + b);
*/
/* Repeat until the input is a number https://javascript.info/number#repeat-until-the-input-is-a-number */
function readNumber(){
    let num;
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
  };
  alert (`Read ${readNumber()}`);