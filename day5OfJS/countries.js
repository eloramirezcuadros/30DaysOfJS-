//file connected to file named day 6...
exports = countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
console.log(countries.includes('Ethiopia'));
countries.push('Ethiopia');
console.log(countries);

//searched for the country closest to the middle of the array...
let longitude = countries.length;
longitude = longitude / 2;
medianCountry = longitude;
console.log(countries[medianCountry]);

//the main array is split and two arrays are created, each with an even amount of...
const array1 = countries.slice(0, 3);
arr1.push('Korea');
const array2 = countries.slice(4, 6);
arr2.push('Colombia', 'Mexico');
console.log(array1, array2);
