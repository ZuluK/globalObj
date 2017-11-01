/* global objects gives user access to window properties like undefinded, NaN, function parseInt(), function hasOwnProperty()
number,string and boolean */


/* arrays and sparce arrays */
var myarray = [];
myarray[0] = 'zero';
myarray[1] = true;
myarray[2] = 4;
//sparce arrays
myarray[10] = 'ten';

/* when 'myarray' is called : ['zero', true, 4, undefined x7 'ten'] */

/* iterating over an array */

var arr = [1,2,3,4,5,6,7];
for(var i = 0; i < arr.length;i++){
  console.log(arr[i]);
};


//for in loop, not recommended
for(var i in arr){
  console.log(i);
}


//Deleting elements of an array

delete arr[1];
//in console would return true;
//deleted properties in a object are set to undefined
//use splice method instead


/* useful method in javascript */
//concat
var a = [1,3,5,7];
var b = [2,4,6,8];
a.concat(b);
