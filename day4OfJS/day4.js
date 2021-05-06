/*
Exercises: Level 1
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.

const age = Number(prompt("Enter your age:"));
if (age >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`you are ${age}, you will be allowed to drive after ${18 - age} years`);
}
*/


/*
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.

const age = Number(prompt('Enter age:'));
const yourAge = Number(prompt("Enter your age:"));
if (age >= yourAge) {
    console.log(`i'm older than you with ${age - yourAge} years old.`);
} else {
    console.log(`you are ${yourAge - age} years older than me.`);
}
*/


/*
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3

let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}.`);
} else {
    console.log(`${a} is less than ${b}.`);
}
*/


/*
4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number.

Enter a number: 9
9 is is an odd number.

const divisible = prompt(`Enter a number:`);

if (divisible % 2 === 0) {
    console.log(`${divisible} is an even number.`);
} else {
    console.log(`${divisible} is is an odd number.`);
}
*/


/*
Exercises: Level 2
1. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

const score = prompt(`Enter the score: `);

if (score >= 80) {
    console.log('Group A');
} else if (score >= 70) {
    console.log('Group B');
} else if (score >= 60) {
    console.log('Group C');
} else if (score >= 50) {
    console.log('Group D');
} else {
    console.log('Group E');
}
*/


/*
2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

const month = prompt('enter month to check seasons');
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('the season is Autumn');
        break;
    case 'december':
    case 'january':
    case 'febuary':
        console.log('the season is Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('the season is Spring');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('the season is Summer');
        break;
    default:
        console.log('invalid Month');
}
*/


/*
3. Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

const weekDay = prompt('What is the day today?').toLowerCase();
if (weekDay === 'saturday' || weekDay === 'sunday') {
    console.log(`${weekDay} is a weekend day`)
} else if (weekDay === 'monday' || weekDay === 'tuesday' || weekDay === 'wednesday' || weekDay === 'thursday' || weekDay === 'friday') {
    console.log(`${weekDay} is a work day`)
} else {
    console.log('invalid weekDay')
}
*/


/*   
Exercises: Level 3
1. Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.

const month = prompt('Enter a month:').toLowerCase();
if (month === 'january' || month === 'march' || month === 'may' || month === 'july' || month === 'august' || month === 'october' || month === 'december') {
    console.log(`${month} has 31 days`);
} else if (month === 'april' || month === 'june' || month === 'september' || month === 'november') {
    console.log(`${month} has 30 days`);
} else if (month === 'february') {
    console.log(`${month} has 28 days`);
} else {
    console.log('invalid word');
}
*/

/*
2.  Write a program which tells the number of days in a month, now consider leap year.

const daysIsMonth = prompt('Enter the month').toLowerCase();
const year = Number(prompt('Enter the year'));
const isLeapYear = (year % 4 === 0) && (year % 400 === 0 || year % 100 !== 0);
switch (true) {
    case daysIsMonth === 'november':
    case daysIsMonth === 'april':
    case daysIsMonth === 'june':
    case daysIsMonth === 'september':
        alert(`${daysIsMonth} has 30 days`);
        break;
    case daysIsMonth === 'february':
        if (isLeapYear) {
            alert(`${daysIsMonth} has 29 days`);
        } else {
            alert(`${daysIsMonth} has 28 days`);
        }
        break;
    default:
        alert(`${daysIsMonth} has 31 days`);
}

*/