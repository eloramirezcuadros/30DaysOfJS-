//Exercise: Level 1
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript';
const challenge = '30 Days Of JavaScript'


//2. Print the string on the browser console using console.log()
console.log(challenge); //30 Days Of JavaScript


//3. Print the length of the string on the browser console using console.log()
const stringLength = '30 Days Of JavaScript';
console.log(stringLength.length); //21


//4. Change all the string characters to capital letters using toUpperCase() method
const stringToUpperCase = '30 Days Of JavaScript';
console.log(stringToUpperCase.toUpperCase()); //30 DAYS OF JAVASCRIPT


//5. Change all the string characters to lowercase letters using toLowerCase() method
const stringToLowerCase = '30 Days Of JavaScript';
console.log(stringToLowerCase.toLowerCase()); //30 days of javascript


//6. Cut (slice) out the first word of the string using substr() or substring() method
const cutFirstWord = '30 Days Of JavaScript';
console.log(cutFirstWord.substr(3, 5)); //Days


//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const cutPhrase = '30 Days Of JavaScript';
console.log(cutPhrase.substr(3, 21)); //Days Of JavaScript


//8. Check if the string contains a word Script using includes() method
const checkThatContainScript = '30 Days Of JavaScript';
console.log(checkThatContainScript.includes('Script')); //true


//9. Split the string into an array using split() method
const splitStringInArray = 'JavaScript';
console.log(splitStringInArray.split('')); //['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']


//10. Split the string 30 Days Of JavaScript at the space using split() method
const splitStringInArray2 = '30 Days Of JavaScript';
console.log(splitStringInArray2.split('')); //['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']


//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const converToArray = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(converToArray.split(',')); //['Facebook',' Google',' Microsoft',' Apple',' IBM',' Oracle',' Amazon']


//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const ReplaceJavaScriptwithPython = '30 Days Of JavaScript';
ReplaceJavaScriptwithPython1 = ReplaceJavaScriptwithPython.replace('JavaScript', 'Python');
console.log(ReplaceJavaScriptwithPython1); //30 Days Of Python

//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const findCharacter = '30 Days Of JavaScript';
console.log(findCharacter.charAt(15)); //S


//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const findCharacterJ = '30 Days Of JavaScript';
console.log(findCharacterJ.charCodeAt('J')); //51


//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const determineFisrtOccurrence = '30 Days Of JavaScript';
console.log(determineFisrtOccurrence.indexOf('a')); //4


//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const determineLastOccurrence = '30 Days Of JavaScript';
console.log(determineLastOccurrence.lastIndexOf('a')); //14


//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const determineFisrtOccurrence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(determineFisrtOccurrence2.indexOf('because')); //31


//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const determineLastOccurrence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(determineLastOccurrence2.lastIndexOf('because')); //47


//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const determineFisrtOccurrence3 = 'You cannot end a sentence with because because because is a conjunction';
console.log(determineFisrtOccurrence3.search('because')); //31


//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const removeBlankSpaces = ' 30 Days Of JavaScript ';
console.log(removeBlankSpaces.trim(' 30 Days Of JavaScript ')); //30 Day Of JavaScript


//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const makeResultTrue = '30 Days Of JavaScript';
console.log(makeResultTrue.startsWith('30')); //true


//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const makeResultTrue2 = '30 Days Of JavaScript';
console.log(makeResultTrue2.endsWith('Script')); //true


//23. Use match() method to find all the a’s in 30 Days Of JavaScript
const findAll_A = '30 Days Of JavaScript';
console.log(findAll_A.match(/a/gi)); //[ 'a', 'a', 'a' ]


//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const unitedJoin = '30 Days Of';
console.log(unitedJoin.concat(' JavaScript')); //30 Days Of JavaScript


//25. Use repeat() method to print 30 Days Of JavaScript 2 times
const repeatStringTwice = '30 Days Of JavaScript';
console.log(repeatStringTwice.repeat(2)); //30 Days Of JavaScript30 Days Of JavaScript




/*
Exercise: Level 2
1. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
const paragraph = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(paragraph);
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.


/*
2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
const paragraph2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(paragraph2);
//Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.


//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const numberTenTypeofString = '10';
const numberTenTypeofString2 = '10';
console.log(numberTenTypeofString  === numberTenTypeofString); //true


//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const numberFloatTypeofString = parseFloat('9.81');
const numberTenTypeofNumber3 = 10;
console.log(numberFloatTypeofString === numberTenTypeofNumber3); //false


//5. Check if 'on' is found in both python and jargon
const found_On = 'python and jargon';
console.log(found_On.match(/on/gi)); //[ 'on', 'on' ]


//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
const checkIfJargonIsInString = 'I hope this course is not full of jargon';
console.log(checkIfJargonIsInString.search('jargon')); //34


//7. Generate a random number between 0 and 100 inclusively.
const generateRandomNumber = Math.floor(Math.random() * 101);
console.log(generateRandomNumber); //54


//8. Generate a random number between 50 and 100 inclusively.
const generateRandomNumber2 = Math.floor(Math.random() * 51) + 50;
console.log(generateRandomNumber2); //79


//9. Generate a random number between 0 and 255 inclusively.
const generateRandomNumber3 = Math.floor(Math.random() * 256);
console.log(generateRandomNumber3); //53


//10. Access the 'JavaScript' string characters using a random number.
const randomString = 'JavaScript';
const random = Math.floor(Math.random() * randomString.length);
console.log(random); //8


/*
11. Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
/*
1       1       1       1       1
2       1       2       4       8
3       1       3       9       27
4       1       4       16      64
5       1       5       25      125
*/


//12. Use substr to slice out the phrase 'You cannot end a sentence with because because because is a conjunction' from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const cutBecause = 'You cannot end a sentence with because because because is a conjunction';
console.log(cutBecause.substr(31, 24)); //because because because




//Exercises: Level 3
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const countWordLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(countWordLove.match(/love/gi)); //[ 'Love', 'love', 'love' ]


//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const countWordBecause = 'You cannot end a sentence with because because because is a conjunction';
console.log(countWordBecause.match(/because/gi)); //[ 'because', 'because', 'because' ]


//3. Clean the following text and find the most frequent word(hint, use replace and regular expressions).
const cleanText = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs./%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(cleanText.replace(/[^a-zA-Z 0-9.]+/gi, ''));
/*I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs.
Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching
*/


//4. Calculate the person's total annual income by extracting the figures from the following text. 
//'He earns 5000 euros of salary per month, 10000 euros of annual bonus, 15000 euros of online courses per month'.
const salary = 'He earns 5000 euros of salary per month, 10000 euros of annual bonus, 15000 euros of online courses per month';
const money = salary.match(/(\d+)/g);
const multiplication1 = Number(money[0]) * 12;
const multiplication2 = Number(money[1]);
const multiplication3 = Number(money[2]) * 12;
console.log(multiplication1 + multiplication2 + multiplication3); //250000
