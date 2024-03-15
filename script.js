// main array for working
const a = [50, 107, 'jack', 83, 'killer', 'son', true];
// i just filter the array
const aFilter = a.filter(arrayFilter => typeof arrayFilter === 'string');
//filter the number from the array
const aFilterNumber = a.filter(numberFilter => typeof numberFilter === 'number');
//sort the number from the filtered array
const aSort = aFilterNumber.sort((a, b) => a - b);
// reverse the array aFilter
const aFilterReverse = aFilter.reverse();
// combined the array
const combinedArray = aSort.concat(aFilter);
//let's delete the 3item from the 6th item.
const sliceArray = combinedArray.slice(0, -3);
//let's check those number are less then 100
const lessItemCheck = combinedArray.filter(lessItem => lessItem < 100);
//let's add a new string each of the string array.
const stringData = ' str';
const addString = aFilter.map(addstringTO => addstringTO.slice(0, -3) + stringData);


//all the outputs <start>
console.log(aSort);
console.log(aFilterNumber);
console.log(aFilter);
console.log(aFilterReverse);
console.log(combinedArray);
console.log(sliceArray);
console.log(lessItemCheck);
console.log(addString);
//all the outputs <end>