//Exercise: Level 1
//1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript';
const challenge = '30 Days Of JavaScript'


//2. Print the string on the browser console using console.log()
console.log(challenge); //30 Days Of JavaScript


//3. Print the length of the string on the browser console using console.log()
const stringLength = '30 Days Of JavaScript';
const positionOfTheString = stringLength.length;
console.log(positionOfTheString); //21


//4. Change all the string characters to capital letters using toUpperCase() method
const stringToUpperCase = '30 Days Of JavaScript';
const stringChangedToUpperCase = stringToUpperCase.toUpperCase();
console.log(stringChangedToUpperCase); //30 DAYS OF JAVASCRIPT


//5. Change all the string characters to lowercase letters using toLowerCase() method
const stringToLowerCase = '30 Days Of JavaScript';
const stringChangedToLowerCase = stringToLowerCase.toLowerCase();
console.log(stringChangedToLowerCase); //30 days of javascript


//6. Cut (slice) out the first word of the string using substr() or substring() method
const firstWordInTheString = '30 Days Of JavaScript';
const firstWordLocatedInTheString = firstWordInTheString.substr(3, 5);
console.log(firstWordLocatedInTheString); //Days


//7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const phraseToCut = '30 Days Of JavaScript';
const phraseWasCut = phraseToCut.substr(3, 21);
console.log(phraseWasCut); //Days Of JavaScript


//8. Check if the string contains a word Script using includes() method
const stringWithAWordSearched = '30 Days Of JavaScript';
const theStringContainTheWordSearched = stringWithAWordSearched.includes('Script');
console.log(theStringContainTheWordSearched); //true


//9. Split the string into an array using split() method
const stringSplitInsideAnArray = 'JavaScript';
const theStringSplitInsideAnArray = stringSplitInsideAnArray.split('');
console.log(theStringSplitInsideAnArray); //['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']


//10. Split the string 30 Days Of JavaScript at the space using split() method
const longestStringDivideWithinAnArray = '30 Days Of JavaScript';
const theStringHasBeenSplitIntoAnArray = longestStringDivideWithinAnArray.split('');
console.log(theStringHasBeenSplitIntoAnArray); //['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']


//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const theStringMustBeConvertedToAnArray = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const stringConvertedToAnArray = theStringMustBeConvertedToAnArray.split(',');
console.log(stringConvertedToAnArray); //['Facebook',' Google',' Microsoft',' Apple',' IBM',' Oracle',' Amazon']


//12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const theJavascriptStringReplaceItWithPython = '30 Days Of JavaScript';
const theStringIsReplaced = theJavascriptStringReplaceItWithPython.replace('JavaScript', 'Python');
console.log(theStringIsReplaced); //30 Days Of Python


//13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const inTheStringSearchForALetterInAnAssignedLocation = '30 Days Of JavaScript';
const inTheStringFoundTheLetter = inTheStringSearchForALetterInAnAssignedLocation.charAt(15);
console.log(inTheStringFoundTheLetter); //S


//14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const inTheStringSearchForALetterJ = '30 Days Of JavaScript';
const inTheStringFoundTheLetterJ = inTheStringSearchForALetterJ.charCodeAt('J');
console.log(inTheStringFoundTheLetterJ); //51


//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const firstOccurrenceOfLetterA = '30 Days Of JavaScript';
const firstOcurrenceFound = firstOccurrenceOfLetterA.indexOf('a');
console.log(firstOcurrenceFound); //4


//16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const lastOccurrenceOfLetterA = '30 Days Of JavaScript';
const lastOccurrenceFound = lastOccurrenceOfLetterA.lastIndexOf('a');
console.log(lastOccurrenceFound); //14


//17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const positionFirstOccurrenceOfWordBecause = 'You cannot end a sentence with because because because is a conjunction';
const positionFirstOccurrenceFound = positionFirstOccurrenceOfWordBecause.indexOf('because');
console.log(positionFirstOccurrenceFound); //31


//18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const positionLastOccurrenceOfWordBecause = 'You cannot end a sentence with because because because is a conjunction';
const positionLastOccurrenceFound = positionLastOccurrenceOfWordBecause.lastIndexOf('because');
console.log(positionLastOccurrenceFound); //47


//19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const firstOccurrenceOfTheWordBecause = 'You cannot end a sentence with because because because is a conjunction';
const firstOccurrenceOfTheWordBecauseFound = firstOccurrenceOfTheWordBecause.search('because');
console.log(firstOccurrenceOfTheWordBecauseFound); //31


//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const fromBeginningToEndRemoveBlanks = ' 30 Days Of JavaScript ';
const blankSpacesRemoved = fromBeginningToEndRemoveBlanks.trim(' 30 Days Of JavaScript ');
console.log(blankSpacesRemoved); //30 Day Of JavaScript


//21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const theResultMustBeTrue = '30 Days Of JavaScript';
const theResultIsTrue = theResultMustBeTrue.startsWith('30');
console.log(theResultIsTrue); //true


//22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const theFinalResultMustBeTrue = '30 Days Of JavaScript';
const theFinalResultIsTrue = theFinalResultMustBeTrue.endsWith('Script');
console.log(theFinalResultIsTrue); //true


//23. Use match() method to find all the a’s in 30 Days Of JavaScript
const inTheStringFindAllLetterA = '30 Days Of JavaScript';
const lettersFound = inTheStringFindAllLetterA.match(/a/gi);
console.log(lettersFound); //[ 'a', 'a', 'a' ]


//24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const theStringMustBeJoinedToAnotherString = '30 Days Of';
const theStringIsJoined = theStringMustBeJoinedToAnotherString.concat(' JavaScript');
console.log(theStringIsJoined); //30 Days Of JavaScript


//25. Use repeat() method to print 30 Days Of JavaScript 2 times
const printedStringTwice = '30 Days Of JavaScript';
const theStringPrinted = printedStringTwice.repeat(2);
console.log(theStringPrinted); //30 Days Of JavaScript30 Days Of JavaScript




/*
Exercise: Level 2
1. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
const printedParagraph = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(printedParagraph);
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.


/*
2. Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
const printedQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(printedQuote);
//Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.


//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const numberTenTypeofString = '10';
const numberTenToCompare = 10;
const typeofEqualToNumber = numberTenTypeofString  === numberTenToCompare;
console.log(typeofEqualToNumber); //true


//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const numberFloatTypeofString = parseFloat('9.81');
const numberToCompare = 10;
const parseFloatEqualToNumber = numberFloatTypeofString === numberToCompare;
console.log(parseFloatEqualToNumber); //false


//5. Check if 'on' is found in both python and jargon
const inTheStringFindWordOn = 'python and jargon';
const theWordOnFound = inTheStringFindWordOn.match(/on/gi);
console.log(theWordOnFound); //[ 'on', 'on' ]


//6. I hope this course is not full of jargon. Check if jargon is in the sentence.
const inTheStringFindJargon = 'I hope this course is not full of jargon';
const wordJargonFound = inTheStringFindJargon.search('jargon');
console.log(wordJargonFound ); //34


//7. Generate a random number between 0 and 100 inclusively.
const generateRandomNumber = Math.floor(Math.random() * 101);
console.log(generateRandomNumber); //54


//8. Generate a random number between 50 and 100 inclusively.
const generateAnotherRandomNumber = Math.floor(Math.random() * 51) + 50;
console.log(generateAnotherRandomNumber); //79


//9. Generate a random number between 0 and 255 inclusively.
const generateAnotherLongRandomNumber = Math.floor(Math.random() * 256);
console.log(generateAnotherLongRandomNumber); //53


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
const charactersToPrint = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125';
console.log(charactersToPrint);
/*
1       1       1       1       1
2       1       2       4       8
3       1       3       9       27
4       1       4       16      64
5       1       5       25      125
*/


//12. Use substr to slice out the phrase 'You cannot end a sentence with because because because is a conjunction' from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const stringCutTheWordBecause = 'You cannot end a sentence with because because because is a conjunction';
const theStringCut = stringCutTheWordBecause.substr(31, 24);
console.log(theStringCut); //because because because



//Exercises: Level 3
//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const theOcurrenceOfWordLoveInTheText = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const ocurrenceOfWordLove = theOcurrenceOfWordLoveInTheText.match(/love/gi);
console.log(ocurrenceOfWordLove ); //[ 'Love', 'love', 'love' ]


//2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const numberOfWordBecause = 'You cannot end a sentence with because because because is a conjunction';
const wordBecause = numberOfWordBecause.match(/because/gi);
console.log(wordBecause); //[ 'because', 'because', 'because' ]


//3. Clean the following text and find the most frequent word(hint, use replace and regular expressions).
const theTextMustBeCleanedUp = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs./%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const textIsClean = theTextMustBeCleanedUp.replace(/[^a-zA-Z 0-9.]+/gi, '');
console.log(textIsClean);
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
const totaltMultiplication = multiplication1 + multiplication2 + multiplication3;
console.log(totaltMultiplication); //250000
