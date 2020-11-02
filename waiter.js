const prompt = require('prompt-sync')({sigint: true});

console.log('                Welcome');
console.log('                  to');
console.log('               Milliways!');
console.log('(The Restaurant at The End of The Universe)');
console.log('');
console.log(' Parties of up to eight can dine together.');
console.log('       Please use this app to order.');
console.log('');
const tableNum = Number(prompt('What is your table number? '));

const dinerCount = Number(prompt('How many in your party? '));

let starter1, starter2, starter3, starter4, starter5, starter6, starter7, starter8;
let main1, main2, main3, main4, main5, main6, main7, main8;
let drink1, drink2, drink3, drink4, drink5, drink6, drink7, drink8;


starter1 = prompt('#1, what would you like to start? ');
main1 = prompt('...and for your main course? ');
drink1 = prompt('...and what would you like to drink? ');

if (dinerCount > 1) {
  starter2 = prompt('#2, what would you like to start? ');
  main2 = prompt('...and for your main course? ');
  drink2 = prompt('...and what would you like to drink? ');
}

if (dinerCount > 2) {
  starter3 = prompt('#3, what would you like to start? ');
  main3 = prompt('...and for your main course? ');
  drink3 = prompt('...and what would you like to drink? ');
}

if (dinerCount > 3) {
  starter4 = prompt('#4, what would you like to start? ');
  main4 = prompt('...and for your main course? ');
  drink4 = prompt('...and what would you like to drink? ');
}

if (dinerCount > 4) {
  starter5 = prompt('#5, what would you like to start? ');
  main5 = prompt('...and for your main course? ');
  drink5 = prompt('...and what would you like to drink? ');
}

if (dinerCount > 5) {
  starter6 = prompt('#6, what would you like to start? ');
  main6 = prompt('...and for your main course? ');
  drink6 = prompt('...and what would you like to drink? ');
}

if (dinerCount > 8) {
  starter7 = prompt('#7, what would you like to start? ');
  main7 = prompt('...and for your main course? ');
  drink7 = prompt('...and what would you like to drink? ');
}

if (dinerCount > 7) {
  starter8 = prompt('#8, what would you like to start? ');
  main8 = prompt('...and for your main course? ');
  drink8 = prompt('...and what would you like to drink? ');
}

const order = {
  table: tableNum,
  diners: dinerCount,
  food: [],
  drinks: []
}

if (drink1) order.drinks.push(drink1);
if (drink2) order.drinks.push(drink2);
if (drink3) order.drinks.push(drink3);
if (drink4) order.drinks.push(drink4);
if (drink5) order.drinks.push(drink5);
if (drink6) order.drinks.push(drink6);
if (drink7) order.drinks.push(drink7);
if (drink8) order.drinks.push(drink8);

const order1 = {}
const order2 = {}
const order3 = {}
const order4 = {}
const order5 = {}
const order6 = {}
const order7 = {}
const order8 = {}

if (starter1 != "") order1.starter = starter1;
if (starter2 != "") order2.starter = starter2;
if (starter3 != "") order3.starter = starter3;
if (starter4 != "") order4.starter = starter4;
if (starter5 != "") order5.starter = starter5;
if (starter6 != "") order6.starter = starter6;
if (starter7 != "") order7.starter = starter7;
if (starter8 != "") order8.starter = starter8;

if (main1 != "") order1.main = main1;
if (main2 != "") order2.main = main2;
if (main3 != "") order3.main = main3;
if (main4 != "") order4.main = main4;
if (main5 != "") order5.main = main5;
if (main6 != "") order6.main = main6;
if (main7 != "") order7.main = main7;
if (main8 != "") order8.main = main8;

if (order1.main || order1.starter) order.food.push(order1);
if (order2.main || order2.starter) order.food.push(order2);
if (order3.main || order3.starter) order.food.push(order3);
if (order4.main || order4.starter) order.food.push(order4);
if (order5.main || order5.starter) order.food.push(order5);
if (order6.main || order6.starter) order.food.push(order6);
if (order7.main || order7.starter) order.food.push(order7);
if (order8.main || order8.starter) order.food.push(order8);

console.log("The order is:", order);