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
const numberTenTypeofString = '10';
const numberTenTypeofNumber = 10;
console.log(numberTenTypeofString === numberTenTypeofNumber); //false


//3. Check if parseInt('9.8') is equal to 10
const numberFloatString = parseFloat('9.81');
const theNumberTenTypeofNumber = 10
console.log(numberFloatString === theNumberTenTypeofNumber); //false


//4. Boolean value is either true or false.
//i. Write three JavaScript statement which provide truthy value.
const theStringTrue = true;
const tenIsHigherThanNine = 10 > 9;
const equalNumber = 1 === 1;

console.log(theStringTrue); //true
console.log(tenIsHigherThanNine); //true
console.log(equalNumber); //true

//ii. Write three JavaScript statement which provide falsy value.
const emptyString = '';
const tenIsHigherThanEleven = 10 > 11;
const theEqualNumber = 1 === 2;

console.log(emptyString); //false
console.log(tenIsHigherThanEleven); //false
console.log(theEqualNumber); //false


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
const greaterThanSign = 4 > 3;
const greaterThanOrEqualTo = 4 >= 3;
const lessThanSign = 4 < 3;
const lessThanSignOrEqualTo = 4 <= 3;
const comparisonSign = 4 == 4;
const strictEqualitySign = 4 === 4;
const notEqualToSign = 4 != 4;
const strictInequalitySign = 4 !== '4';
const notEqualToAndString = 4 != '4';
const comparisonSignAndString = 4 == '4';
const strictEqualityAndString = 4 === '4';

console.log(greaterThanSign); //true
console.log(greaterThanOrEqualTo); //true
console.log(lessThanSign); //false
console.log(lessThanSignOrEqualTo); //false
console.log(comparisonSign); //true
console.log(strictEqualitySign); //true
console.log(notEqualToSign); //false
console.log(strictInequalitySign); //true
console.log(notEqualToAndString); //false
console.log(comparisonSignAndString); //true
console.log(strictEqualityAndString); //false

//xii. Find the length of python and jargon and make a falsy comparison statement.
const theComparisonBetweenPythonAndJargon = 'python'.length != 'jargon'.length;
console.log(theComparisonBetweenPythonAndJargon); //false

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
const greaterThanSignMoreAndOperatorMoreLessSign = 4 > 3 && 10 < 12;
const greaterThanSignMoreAndOperatorMoreGreaterSign = 4 > 3 && 10 > 12;
const greaterThanSignMoreOrOperatorMoreLessSign = 4 > 3 || 10 < 12;
const greaterThanSignMoreOrOperatorMoreGreaterSign = 4 > 3 || 10 > 12;
const withExclamationSignMoreGreaterThan = !(4 > 3);
const withExclamationLessThan = !(4 < 3);
const theFalseComparison = !(false);
const withExclamationSignMoreGreaterThanSignMoreAndOperatorMoreLessSign = !(4 > 3 && 10 < 12);
const withExclamationSignMoreGreaterThanSignMoreAndOperatorMoreGreaterSign = !(4 > 3 && 10 > 12);
const withExclamationSignMoreStrictEqualityAndString = !(4 === '4');

console.log(greaterThanSignMoreAndOperatorMoreLessSign); //true
console.log(greaterThanSignMoreAndOperatorMoreGreaterSign); //false
console.log(greaterThanSignMoreOrOperatorMoreLessSign); //true
console.log(greaterThanSignMoreOrOperatorMoreGreaterSign); //true
console.log(withExclamationSignMoreGreaterThan); //false
console.log(withExclamationLessThan); //true
console.log(theFalseComparison); //true
console.log(withExclamationSignMoreGreaterThanSignMoreAndOperatorMoreLessSign); //false
console.log(withExclamationSignMoreGreaterThanSignMoreAndOperatorMoreGreaterSign); //true
console.log(withExclamationSignMoreStrictEqualityAndString); //true

//xi. There is no 'on' in both dragon and python
const theWordOn = 'dragon and python';
const theWordOnFoundInString = theWordOn.includes('on')
console.log(theWordOnFoundInString); //true



//7. Use the Date object to do the following activities
//i. What is the year today?
const yearToday = new Date();
console.log(yearToday.getFullYear()); //2021

//ii. What is the month today as a number?
const monthToday = new Date();
console.log(monthToday.getMonth() + 1); //7

//iii. What is the date today?
const dateToday = new Date();
console.log(dateToday); //2021-06-16T22:20:58.228Z

//iv. What is the day today as a number?
const dayToday = new Date();
console.log(dayToday.getDate()); //3

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
const base = Number(prompt('enter base of the triangle')); //20
const height = Number(prompt('enter height of the triangle')); //10
const area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`); //The area of the triangle is 100


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
const length = Number(prompt('enter length')); //first value 20
const width = Number(prompt('enter width ')); //second value 15
const areaRectangle = length * width;
const perimeterRectangle = 2 * (length + width);
console.log(`The area of a rectangle is ${areaRectangle} and the perimeter of the rectangle is ${perimeterRectangle}`); //The area of a rectangle is 300 and the perimeter of the rectangle is 100


//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const radius = Number(prompt('enter of value radius')); //first value 20
const areaCircunference = (Math.PI * radius * radius);
const circunference = ((2) * Math.PI * radius);
console.log(`The area of a circle is ${areaCircunference} and the circunference of the circle is ${circunference}`); //The area of a circle is 628 and the circunference of the circle is 157


//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
function interceptCalculate() {
    const x = prompt("insert the intercept here");
    const y = ((2 * x) - 2);
    alert(`the slope is ${y}/${x}`);
}
console.log(interceptCalculate());


//6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
function slopeCalculate(points) {
    const { x1, x2, y1, y2 } = points;
    return (y2 - y1) / (x2 - x1);
}
console.log(slopeCalculate({ x1: 2, y1: 2, x2: 6, y2: 10 }));


//7. Compare the slope of above two questions.
const theSlopeOfAboveTwoQuestions = interceptCalculate >= slopeCalculate;
console.log(theSlopeOfAboveTwoQuestions); //false


//8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function calculateY() {
    const range = [-3];
    return range.map(x => Math.pow(x, 2) + 6 * x + 9)
}
console.log(calculateY()); //[0]


/*
9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
const theHour = prompt('Insert hours here');
const ratePerHour = prompt('Insert rate per hour');
const totalHours = theHour * ratePerHour;
alert(`Your weekly earning is ${totalHours}`);


//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
const name = 'luisa';
const theNameLength = name.length;
if (theNameLength >= 7) {
    console.log(`${theNameLength} letters, your name is long`);
} else {
    console.log(`${theNameLength} letters, your name is short`);
}
//5 letters, your name is short.


//11. Compare your first name length and your family name length and you should get this output.
const theFirstName = 'luisa';
const familyName = 'ramirez';
theFirstName.length > familyName.length ? console.log(`your first name is greater than your family name`) : console.log(`your last name is greater than your name`);
//your last name is greater than your name.


/*
12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
const myAge = 250
const yourAge = 25
I am 225 years older than you.
*/
const myAge = 250;
const yourAge = 25;
const totalAge = myAge - yourAge;
alert(`I am ${totalAge} years older than you.`);


/*
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
const birthYear = Number(prompt("Enter birth year:"));
if (birthYear <= 2002) {
    console.log(`You are ${2021 - birthYear}. You are old enough to drive`);
} else {
    console.log(`you are ${2021 - birthYear}, you will be allowed to drive after years`)
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
const theReadableTimeFormat = new Date();
const YYYMMDD = `${theReadableTimeFormat.getFullYear()}/${theReadableTimeFormat.getMonth()}/${theReadableTimeFormat.getDate()}`;
const DDMMYYYY = `${theReadableTimeFormat.getDate()}/${theReadableTimeFormat.getMonth()}/${theReadableTimeFormat.getFullYear()}`;
const DdMmYYy = `${theReadableTimeFormat.getDate()}/${theReadableTimeFormat.getMonth()}/${theReadableTimeFormat.getFullYear()}`;
const hHmM = `  ${theReadableTimeFormat.getHours()}:${theReadableTimeFormat.getMinutes()}`;

console.log(YYYMMDD + hHmM); //2021/5/17  18:15
console.log(DDMMYYYY + hHmM); //17/5/2021  18:15
console.log(DdMmYYy + hHmM); //17/5/2021  18:15



/*
Exercises: Level 3
1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const aReadableTimeFormat = new Date();
const YYYMMDD2 = `${aReadableTimeFormat.getFullYear()}/${aReadableTimeFormat.getMonth()}/${aReadableTimeFormat.getDate()}`;

console.log(YYYMMDD2);
console.log(aReadableTimeFormat.toLocaleTimeString(['en-US'], { hour: '2-digit', minute: '2-digit' }));
//2021/5/17
//06:18 PM
