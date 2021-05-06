/* 
Day 3: Exercises
Exercises: Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Luisa';
const lastName = 'Ramírez';
const country = 'Colombia';
const city = 'Medellín';
const age = 21;
const isMarried = false;
const year = 2021;

console.log(typeof 'Luisa');
console.log(typeof 'Ramírez');
console.log(typeof 'Colombia');
console.log(typeof 'Medellín');
console.log(typeof 21);
console.log(typeof false);
console.log(typeof 2021);
*/


/*
2. Check if type of '10' is equal to 10

const num1 = '10';
const num2 = 10;

console.log(num1 == num2);
*/


/*
3. Check if parseInt('9.8') is equal to 10

const numFloat = parseFloat('9.81');
console.log(numFloat == 10);
*/


/*
4. Boolean value is either true or false.

i. Write three JavaScript statement which provide truthy value.

const up = true;
const tenIsHigherThanNine = 10 > 9;
const equall = 1 == 1;

console.log(up);
console.log(tenIsHigherThanNine);
console.log(equall);

ii. Write three JavaScript statement which provide falsy value.

const down = false;
const tenIsHigherThanEleven = 10 > 11;
const equall = 1 == 2;

console.log(down);
console.log(tenIsHigherThanEleven);
console.log(equall);
*/


/*
5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
i. 4 > 3      //true
ii. 4 >= 3    //true
iii. 4 < 3    //false
iv. 4 <= 3    //true
v. 4 == 4     //true
vi. 4 === 4   //true
vii. 4 != 4   //false
viii. 4 !== 4 //false
ix. 4 != '4'  //true
x. 4 == '4'   //true
xi. 4 === '4' //false

console.log(4 > 3);         //true
console.log(4 >= 3);        //true
console.log(4 < 3);         //false
console.log(4 <= 3);        //false
console.log(4 == 4);        //true
console.log(4 === 4);       //true
console.log(4 != 4);        //false
console.log(4 !== '4');     //true
console.log(4 != '4');      //false
console.log(4 == '4');      //true
console.log(4 === '4');     //false

xii. Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length > 'jargon'.length); //false
*/

/*
6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log().

i. 4 > 3 && 10 < 12                //true
ii. 4 > 3 && 10 > 12               //false
iii. 4 > 3 || 10 < 12              //true
iv. 4 > 3 || 10 > 12               //true
v. !(4 > 3)                        //false
vi. !(4 < 3)                       //true
vii. !(false)                      //true
viii. !(4 > 3 && 10 < 12)          //false
ix. !(4 > 3 && 10 > 12)            //true
x. !(4 === '4')                    //false

console.log(4 > 3 && 10 < 12);     //true
console.log(4 > 3 && 10 > 12);     //false
console.log(4 > 3 || 10 < 12);     //true
console.log(4 > 3 || 10 > 12);     //true
console.log(!(4 > 3));             //false
console.log(!(4 < 3));             //true
console.log(!(false));             //true
console.log(!(4 > 3 && 10 < 12));  //false
console.log(!(4 > 3 && 10 > 12));  //true
console.log(!(4 === '4'));         //true

xi. There is no 'on' in both dragon and python

const foundd = 'dragon and python';
console.log(foundd.match('on'));
*/

/*
7. Use the Date object to do the following activities
i. What is the year today?

const today = new Date();
console.log(today.getFullYear());

ii. What is the month today as a number?

const mounth = new Date();
console.log(mounth.getMonth());

iii. What is the date today?

const now = new Date();
console.log(now);

iv. What is the day today as a number?

const day = new Date();
console.log(day.getDate());

v. What is the hours now?

const hour = new Date();
console.log(hour.getHours());

vi. What is the minutes now?

const minute = new Date();
console.log(minute.getMinutes());

vii. Find out the numbers of seconds elapsed from January 1, 1970 to now

const now = new Date();
console.log(now.getTime());
*/

/*
Exercises: Level 2
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 50

const base = Number(prompt('enter base of the triangle'));
const height = Number(prompt('enter height of the triangle'));
const area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}`);
*/

/*
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

const a = Number(prompt('enter fist value of the triangle'));
const b = Number(prompt('enter second value of the triangle'));
cont c = Number(prompt('enter third value of the triangle'));
cont peremeter = a + b + c;
console.log(`the peremeter of the triangle is ${peremeter}`);
*/


/*
3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const aLeng = Number(prompt('enter fist value of area rectangle'));
const aWid = Number(prompt('enter second value of area rectangle'));
const leng = Number(prompt('enter first value of the rectangle'));
const wid = Number(prompt('enter second value of the rectangle'));
const area = aLeng * aWid;
const perimeter = 2 * (leng + wid);
console.log(`the area of a rectangle is ${area} and the perimeter of the rectangle is ${perimeter}`);
*/

/*
4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const r1 = Number(prompt('enter fist value of area circle'));
const r2 = Number(prompt('enter second value of area circle'));
const r3 = Number(prompt('enter first value of the circle'));
const pi = 3.14;
const area = pi * r1 * r2;
const circunference = 2 * pi * r3;
console.log(`the area of a circle is ${area} and the circunference of the circle is ${circunference}`);
*/

/*
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

function slopeCalculate() {
    const x = prompt("insert the intercept here", );
    const y = prompt((2 * x) - 2);
    alert(`the slope is ${y}/${x}`);
}
console.log(slopeCalculate());
*/

/*
6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

function slopeCalculate() {
    const x1 = 2;
    const x2 = 6;
    const y1 = 2;
    const y2 = 10;
    const total = (y2 - y1) / (x2 - x1);
    alert(`the slope is m=${total}`);

}
console.log(slopeCalculate());
*/

/*
7. Compare the slope of above two questions.

console.log((2 / 2) == 2);
*/

/*
8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function calculateY() {
    const range = [-8, -7, -6, -5, -4, -3, -2, -1, 0];
    return range.map(x => Math.pow(x, 2) + 6 * x + 9);
}
console.log(calculateY());
*/

/*
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120

const hou = prompt('Insert hours here');
const rateHou = prompt('Insert rate per hour');
const total = hou * rateHou;
alert(`Your weekly earning is ${total}`);
*/

/*
10. If the length of your name is greater than 7 say, your name is long else say your name is short.

const nami = 'luisa';
nami = nami.length;
if (nami >= 7) {
    console.log(`${nami} letters, your name is greater`);
} else {
    console.log(`${nami} letters, your name is short`);
}
*/

/*
11. Compare your first name length and your family name length and you should get this output.

const firstName = 'luisa';
const familyName = 'ramirez';
firstName.length > familyName.length ? console.log(`your first name is greater than your family name`) : console.log(`your last name is greater than your name`);
*/

/*
12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

const myAge = 250
const yourAge = 25
I am 225 years older than you.

const myAge = 250;
const yourAge = 25;
const total = myAge - yourAge;
alert(`I am ${total} years older than you.`);
*/

/*
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.

const year = Number(prompt("Enter birth year:"));
if (year <= 2002) {
    console.log(`You are ${year = 25}. You are old enough to drive`);
} else {
    console.log(`you are ${year = 15}, you will be allowed to drive after years`)
}
*/

/*
14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of yours you live: 100
You lived 3153600000 seconds.

const secondsInseconds = 60;
const secondsInHour = secondsInseconds * 60;
const secondsInDay = secondsInHour * 24;
const secondsInYear = secondsInDay * 365;
const yearsLive = Number(prompt("how many years have you live?"));
const secondsOld = yearsLive * secondsInYear;
console.log(`you are ${secondsOld} seconds olds`)
*/

/*
15. Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm

const date = new Date();
let YYYMMDD = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
let DDMMYYYY = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

let hHmM = `  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

console.log(YYYMMDD + hHmM);
console.log(DDMMYYYY + hHmM);
console.log(DdMmYYy + hHmM);
*/

/*
Exercises: Level 3
1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const date = new Date();
const YYYMMDD = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
console.log(YYYMMDD);
console.log(date.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' }));

*/