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

 /* https://javascript.info/type-conversions#type-conversions */

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
