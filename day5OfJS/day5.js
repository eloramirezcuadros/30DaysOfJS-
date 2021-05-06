/*
Exercise: Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

/*
1. Declare an empty array

const arr = [];
console.log(arr);
*/


/*
2. Declare an array with more than 5 number of elements

const arr = ['Hello', 'My', 'Name', 'Is', 'Luisa', 'Ramírez', '22'];
console.log(arr);
*/


/*
3. Find the length of your array

const arr = ['Hello', 'My', 'Name', 'Is', 'Luisa', 'Ramírez', '22'];
console.log(arr.length);
*/

/*
4. Get the first item, the middle item and the last item of the array

const arr = ['Hello', 'My', 'Name', 'Is', 'Luisa', 'Ramírez', 'Cuadros'];

console.log(arr[0], arr[3], arr[arr.length - 1]);
*/


/*
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Hello', 4, true, 'Colombia', , 'Lasagna', 'Mango'];

console.log(mixedDataTypes.length);
*/


/*
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon'];
*/


/*
7. Print the array using console.log()

const itCompanies = ['Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon'];

console.log(itCompanie);
*/


/*
8. Print the number of companies in the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.length);
*/


/*
9. Print the first company, middle and last company

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]);
*/


/*
10. Print out each company

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

itCompanies.forEach(element => console.log(element));
*/


/*
11. Change each company name to uppercase one by one and print them out. 

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const result = [];

let check = itCompanies.forEach((element) => result.push(element.toUpperCase()));

console.log(result);
*/


/*
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const arr1 = itCompanies[0] + itCompanies[1] + itCompanies[2] + itCompanies[3] + itCompanies[4] + itCompanies[5];
const arr2 = itCompanies[6];
console.log(`${arr1 } and ${arr2} are big IT companies.`);
*/


/*
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let index = itCompanies.indexOf('Facebook');

if (index != -1) {
    console.log('This company does exist in the array')
} else {
    console.log('This company does not exist in the array')
}
*/


/*
14. Filter out companies which have more than one 'o' without the filter method                                  

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.forEach(element => {
    const aCountArray = element.replace(/[^o]/g, "").length;
    if (aCountArray > 1) {
        console.log(element)
    }
});
*/

/*
15. Sort the array using sort() method

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.sort());
*/


/*
16. Reverse the array using reverse() method

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.reverse());
*/


/*
17. Slice out the first 3 companies from the array                                           

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.slice(0, 3));
*/


/*
18. Slice out the last 3 companies from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.slice(4, 7));
*/


/*
19. Slice out the middle IT company or companies from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.splice(2, 3, 4));
*/


/*
20. Remove the first IT company from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.shift()
console.log(itCompanies);
*/


/*
21. Remove the middle IT company or companies from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.splice(2, 3, 4));
console.log(itCompanies);
*/


/*
22. Remove the last IT company from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.pop()
console.log(itCompanies);
*/

/*
23. Remove all IT companies

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies.splice());
*/


/*
Exercise: Level 2
1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. 
Access both file in main.js file.

import { web_techs } from './web_techs.js';

import { countries } from "./countries.js";
*/


/*
2. First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"] 13

const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.split(" ");

console.log(text);
*/


/*
3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.pop('Honey');
shoppingCart.push('Sugar');
shoppingCart[2, 3] = 'Green Tea';

console.log(shoppingCart);
*/


/*
4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
-See countries.js file-
*/


/*
5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
-See web_techs.js file-
*/


/*
6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
---

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd + backEnd;

console.log(fullStack.split(','));
*/


/*
Exercise: Level 3
1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method.
------------

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());
console.log(Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));
console.log(Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));

let longitude = ages.length;
longitude = longitude / 2;
medianAge = Math.floor(longitude);
console.log(ages[medianAge]);

const summ = ages.reduce((previous, current) => current += previous);
const average = summ / ages.length;
console.log(average);

let valueMin = 19;
let valueMax = 26;
let range = valueMax - valueMin
console.log(range);

const comparation = Math.abs(valueMin = average);
const comparation2 = Math.abs(valueMax = average);
console.log(comparation);
console.log(comparation2);
*/


/*
2. Find the middle country(ies) in the countries array
-See countries.js file...
*/


/*
3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
-See countries.js file...

*/