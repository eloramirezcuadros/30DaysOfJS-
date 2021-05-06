/*
Exercise: Level 1
1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript';
const challenge = '30 Days Of JavaScript'
console.log(challenge);
*/

/*
2. Print the string on the browser console using console.log()
console.log('Greetings, my name is Luisa');
*/

/*
3. Print the length of the string on the browser console using console.log()
const name = 'JavaScript'
console.log(name.length);
*/

/*
4. Change all the string characters to capital letters using toUpperCase() method
const mayus = 'JavaScript';
console.log(mayus.toUpperCase());
*/

/*
5. Change all the string characters to lowercase letters using toLowerCase() method
const minus = 'JavaScript';
console.log(minus.toLowerCase());
*/

/*
6. Cut (slice) out the first word of the string using substr() or substring() method
const cut = 'JavaScript';
console.log(cut.substr(0, 4));
*/

/*
7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const phrase = '30 Days Of JavaScript';
console.log(phrase.substr(3, 21));
*/

/*
8. Check if the string contains a word Script using includes() method
const check = 'JavaScript';
console.log(check.includes('Script'));
*/

/*
9. Split the string into an array using split() method
const arr = 'JavaScript';
console.log(arr.split(' '))
*/

/*
10. Split the string 30 Days Of JavaScript at the space using split() method
const arr = '30 Days Of JavaScript';
console.log(arr.split(' '));
*/

/*
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(arr.split(','));
*/

/*
12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const change = '30 Days Of JavaScript';
change = change.replace('JavaScript', 'Python');
console.log(change);
*/

/*
13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const character = '30 Days Of JavaScript';
console.log(character.charAt(15));
*/

/*
14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const character = '30 Days Of JavaScript';
console.log(character.charCodeAt('J'));
*/

/*
15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const ocurr = '30 Days Of JavaScript';
console.log(ocurr.indexOf('a'));
*/

/*
16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const ocurr = '30 Days Of JavaScript';
console.log(ocurr.lastIndexOf('a'));
*/

/*
17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const ocurr = 'You cannot end a sentence with because because because is a conjunction';
console.log(ocurr.indexOf('because'));
*/

/*
18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const ocurre = 'You cannot end a sentence with because because because is a conjunction';
console.log(ocurre.lastIndexOf('because'));
*/

/*
19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const ocurren = 'You cannot end a sentence with because because because is a conjunction';
console.log(ocurren.search('because'));
*/

/*
20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const remov = ' 30 Days Of JavaScript ';
console.log(remov.trim(' 30 Days Of JavaScript '));
*/

/*
21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const string = '30 Days Of JavaScript';
console.log(string.startsWith('30'));
*/

/*
22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const string = '30 Days Of JavaScript';
console.log(string.endsWith('Script'));
*/

/*
23. Use match() method to find all the a’s in 30 Days Of JavaScript
const string = '30 Days Of JavaScript';
console.log(string.match('Of'));
*/

/*
24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const merge = '30 Days Of';
console.log(merge.concat(' JavaScript'));
*/

/*
25. Use repeat() method to print 30 Days Of JavaScript 2 times
const phrase = '30 Days Of JavaScript';
console.log(phrase.repeat(2));
*/


/*
Exercise: Level 2
1. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
*/

/*
2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
*/

/*
3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('10' == '10');
*/

/*
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numFl = parseFloat('9.81');
console.log(numFl === 10);
*/

/*
5. Check if 'on' is found in both python and jargon
let found = 'python and jargon';
console.log(found.match('on'));
*/

/*
6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let phrase = 'I hope this course is not full of jargon';
console.log(phrase.match('jargon'));
*/

/*
7. Generate a random number between 0 and 100 inclusively.
const num = Math.floor(Math.random() * 101);
console.log(num);
*/

/*
8. Generate a random number between 50 and 100 inclusively.
const num = Math.floor(Math.random() * 51) + 50;
console.log(num);
*/

/*
9. Generate a random number between 0 and 255 inclusively.
const num = Math.floor(Math.random() * 256);
console.log(num);
*/

/*
10. Access the 'JavaScript' string characters using a random number.
let randomString = 'JavaScript';
let random = Math.floor(Math.random() * randomString.length);
console.log(random);
*/

/*
11. Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
*/

/*
12. Use substr to slice out the phrase 'You cannot end a sentence with because because because is a conjunction' from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase.substr(31, 24));
*/


/*
Exercises: Level 3
1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(love.match(/love/gi));
*/


/*
2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.match(/because/gi));
*/


/*
3. Clean the following text and find the most frequent word(hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs./%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[^a-zA-Z 0-9.]+/gi, ''));
*/


/* 
4. Calculate the person's total annual income by extracting the figures from the following text. 
'He earns 5000 euros of salary per month, 10000 euros of annual bonus, 15000 euros of online courses per month'.
let sum = 'He earns 5000 euros of salary per month, 10000 euros of annual bonus, 15000 euros of online courses per month';
let matches = sum.match(/(\d+)/g)
let mult1 = Number(matches[0]) * 12
let mult2 = Number(matches[1])
let mult3 = Number(matches[2]) * 12
console.log(mult1 + mult2 + mult3);
*/