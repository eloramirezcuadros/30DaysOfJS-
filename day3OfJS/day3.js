/* 
Day 3: Exercises
Exercises: Level 1
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
*/
const firstName = 'Luisa';
const lastName = 'Ramírez';
const country = 'Colombia';
const city = 'Medellín';
const age = 22;
const isMarried = false;
const year = 2021;

console.log(typeof 'Luisa'); //string
console.log(typeof 'Ramírez'); //string
console.log(typeof 'Colombia'); //string
console.log(typeof 'Medellín'); //string
console.log(typeof 22); //number
console.log(typeof false); //boolean
console.log(typeof 2021); //number

//2. Check if type of '10' is equal to 10

const number1 = '10';
const number2 = 10;
console.log(number1 === number2); //false

//3. Check if parseInt('9.8') is equal to 10

const numFloat = parseFloat('9.81');
const numberTen = 10
console.log(numFloat === numberTen); //false

/*
4. Boolean value is either true or false.
i. Write three JavaScript statement which provide truthy value.
*/
const up = true;
const tenIsHigherThanNine = 10 > 9;
const equall = 1 === 1;

console.log(up); //true
console.log(tenIsHigherThanNine); //true
console.log(equall); //true

//ii. Write three JavaScript statement which provide falsy value.

const down = false;
const tenIsHigherThanEleven = 10 > 11;
const equall2 = 1 == 2;

console.log(down); //false
console.log(tenIsHigherThanEleven); //false
console.log(equall2); //false

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
*/
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== '4'); //true
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false

//xii. Find the length of python and jargon and make a falsy comparison statement.

console.log('python'.length > 'jargon'.length); //false

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
*/ 
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

//xi. There is no 'on' in both dragon and python

const foundd = 'dragon and python';
console.log(foundd.includes('on')); //true


/*
7. Use the Date object to do the following activities
i. What is the year today?
*/
const yearToday = new Date();
console.log(yearToday.getFullYear()); //2021

//ii. What is the month today as a number?

const monthToday = new Date();
console.log(monthToday.getMonth() + 1); //6

//iii. What is the date today?

const today = new Date();
console.log(today); //2021-06-16T22:20:58.228Z

//iv. What is the day today as a number?

const day = new Date();
console.log(day.getDate()); //16

//v. What is the hours now?

const hoursNow = new Date();
console.log(hoursNow.getHours()); //17

//vi. What is the minutes now?

const minutesNow = new Date();
console.log(minutesNow.getMinutes()); //20

//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now

const numberSeconds = new Date();
console.log(numberSeconds.getTime()); //1623882058236



/*
Exercises: Level 2
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 50
*/
const base = Number(prompt('enter base of the triangle'));  //20
const height = Number(prompt('enter height of the triangle'));  //10
const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);  //The area of the triangle is 100


/*
2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
const a = Number(prompt('enter fist value of the triangle'));
const b = Number(prompt('enter second value of the triangle'));
const c = Number(prompt('enter third value of the triangle'));
const perimeter = a + b + c;
console.log(`The perimeter of the triangle is ${perimeter}`); //The perimeter of the triangle is 12


//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const aLeng = Number(prompt('enter fist value of area rectangle'));   //first value 20
const aWid = Number(prompt('enter second value of area rectangle'));  //second value 15
const leng = Number(prompt('enter first value of the rectangle'));    //first value 30
const wid = Number(prompt('enter second value of the rectangle'));    //second value 20
const area2 = aLeng * aWid;
const perimeter2 = 2 * (leng + wid);
console.log(`The area of a rectangle is ${area2} and the perimeter of the rectangle is ${perimeter2}`); //The area of a rectangle is 300 and the perimeter of the rectangle is 100


//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const r1 = Number(prompt('enter fist value of area circle'));   //first value 20
const r2 = Number(prompt('enter second value of area circle')); //second value 10
const r3 = Number(prompt('enter first value of the circle'));   //first value 25
const pi = 3.14;
const area3 = pi * r1 * r2;
const circunference = 2 * pi * r3;
console.log(`The area of a circle is ${area3} and the circunference of the circle is ${circunference}`); //The area of a circle is 628 and the circunference of the circle is 157


//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

function slopeCalculate() {
    const x = prompt("insert the intercept here", );
    const y = prompt((2 * x) - 2);
    alert(`the slope is ${y}/${x}`);
}
console.log(slopeCalculate());


//6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

function slopeCalculate() {
    const x1 = 2;
    const x2 = 6;
    const y1 = 2;
    const y2 = 10;
    const total = (y2 - y1) / (x2 - x1);
    alert(`the slope is m=${total}`);

}
console.log(slopeCalculate());


//7. Compare the slope of above two questions.

console.log((2 / 2) == 2); //false


//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

function calculateY() {
    const range = [-8, -7, -6, -5, -4, -3, -2, -1, 0];
    return range.map(x => Math.pow(x, 2) + 6 * x + 9);
}
console.log(calculateY()); //[25, 16, 9, 4, 1, 0,  1, 4, 9]


/*
9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
const hou_r = prompt('Insert hours here');
const rateHour = prompt('Insert rate per hour');
const total = hou_r * rateHour;
alert(`Your weekly earning is ${total}`);


//10. If the length of your name is greater than 7 say, your name is long else say your name is short.

const nam_e = 'luisa';
const nam_e2 = nam_e.length;
if (nam_e2 >= 7) {
    console.log(`${nam_e2} letters, your name is greater`);  
} else {
    console.log(`${nam_e2} letters, your name is short`);
}
//5 letters, your name is short.


//11. Compare your first name length and your family name length and you should get this output.

const firstName2 = 'luisa';
const familyName = 'ramirez';
firstName2.length > familyName.length ? console.log(`your first name is greater than your family name`) : console.log(`your last name is greater than your name`);
//your last name is greater than your name.


/*
12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
const myAge = 250
const yourAge = 25
I am 225 years older than you.
*/
const myAge = 250;
const yourAge = 25;
const total2 = myAge - yourAge;
alert(`I am ${total2} years older than you.`);


/*
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
const yea_r = Number(prompt("Enter birth year:"));
if (yea_r <= 2002) {
    console.log(`You are ${yea_r = 25}. You are old enough to drive`);
} else {
    console.log(`you are ${yea_r = 15}, you will be allowed to drive after years`)
}


/*
14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of yours you live: 100
You lived 3153600000 seconds.
*/
const secondsInseconds = 60;
const secondsInHour = secondsInseconds * 60;
const secondsInDay = secondsInHour * 24;
const secondsInYear = secondsInDay * 365;
const yearsLive = Number(prompt("how many years have you live?"));
const secondsOld = yearsLive * secondsInYear;

console.log(`you are ${secondsOld} seconds olds`);


/*
15. Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const date = new Date();
let YYYMMDD = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
let DDMMYYYY = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
let hHmM = `  ${date.getHours()}:${date.getMinutes()}`;

console.log(YYYMMDD + hHmM); //2021/5/17  18:15
console.log(DDMMYYYY + hHmM); //17/5/2021  18:15
console.log(DdMmYYy + hHmM); //17/5/2021  18:15



/*
Exercises: Level 3
1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const date2 = new Date();
const YYYMMDD2 = `${date2.getFullYear()}/${date2.getMonth()}/${date2.getDate()}`;

console.log(YYYMMDD2);
console.log(date2.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' }));
//2021/5/17
//06:18 PM
