//Fill an array with 100 of the same object using the array fill method
/*
obj = {
    a:"something",
    b:0
};

const array1 = [];
array1.length = 100;
array1.fill(obj);
console.log(array1);
*/


//Create an array with numbers ranging from 1-100 using the Array.from method
/*
const array1 = [];
array1.length = 100;
const newArr = Array.from({length: 100}, (v, k) => k+1);
console.log(newArr);
*/

//Convert only values of an object into one array.
/*
obj = {
    a:"hi",
    b:3,
    c:"maKora",
    d:24,
    e:null
};
const arr1 = [];

Object.values(obj).forEach(val => {
    if(val != undefined) arr1.push(val);
  });

console.log(arr1);
*/

//Convert an array into one object.
/*
obj = {

}

const arr2 = ["hi" , 14 , "what is your name>?" , 22];

for(let i=0 ; i<arr2.length ; i++)
    obj[i] = arr2[i];

console.log(obj);
*/

/*
const Array2 = (val) => Array.isArray(val) ? true : false;
something = 3;
arr3 = [];
console.log(Array2(something));
*/

//1 )Create a copy of an array that won’t affect the original array if modified. 
//2) Create a copy of an array that will affect the original array if modified.
const arr = [2 , 4];
let clone = JSON.parse(JSON.stringify(arr));

const clone1 = arr;
clone1[0] = 3;

console.log(arr);
console.log(clone);