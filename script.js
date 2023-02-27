// alert('N');

// DataTypes there are seven datadtaypes in Js
// There are three ways to declare variables in js
//'Let' , 'var' , and 'const'

// let firstName = " Khizer"; //STRING
// let age = 25;             //Number
// let student = "true";    //BOOLEANS
// console.log(firstName + age + student + "ye b ay ga");


//DOM
// document.getElementById("p1").innerHTML = " Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " Year old";
// document.getElementById("p3").innerHTML = "Enrolled " + student;

//operator precedence
// 1.parenthesis()
// 2.exponents
// 3.multiplication and divison
// addition and subtraction
// it will always start from left to right

// how to get user input
// let username;
// let lastName;
// document.getElementById("mybutton").onclick = function () {
//   username = document.getElementById("fname").value;
//   lastName = document.getElementById("Lname").value;
//   console.log(username);
//   console.log(lastName);

// };

/*type conversion*/
// let x = "234";
// console.log(typeof x);
// x = Number(x);
// console.log(typeof x);

//Find hypothenous of rightangle triangle underroot xSquare + ySquare formula

// document.getElementById("myButton").onclick = function () {
//   let a, b, c;
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);
//   b = document.getElementById("bTextBox").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   document.getElementById("cTextBox").value = c;

// }

// <!-- Counter program for javaScript -->
// let count = 0;
// document.getElementById("myButton1").onclick = function () {
//   count = count - 1;
//   document.getElementById("label1").innerHTML = count;


// };
// document.getElementById("myButton2").onclick = function () {
//   count = 0;
//   document.getElementById("label1").innerHTML = count;

// };
// document.getElementById("myButton3").onclick = function () {

//   count = count + 1;
//   document.getElementById("label1").innerHTML = count;
// }


// Random Number
// let x = Math.floor(Math.random() * 6 + 1);
// let y = Math.floor(Math.random() * 6 + 1);
// let z = Math.floor(Math.random() * 6 + 1);
// document.getElementById("myButton").onclick = function () {
//   document.getElementById("xLabel").innerHTML = x;
//   document.getElementById("yLabel").innerHTML = y;
//   document.getElementById("zLabel").innerHTML = z;
// }

// UseFull String properties & Method

// let userName = "Bro Code";
// let phoneNo = "0311-54041-47";
// let fullName = "Hafiz Khizer Rehman";

// console.log(userName.length);
// console.log(userName.charAt(3));
// console.log(userName.indexOf("o"));
// console.log(userName.lastIndexOf("o"));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// let firstName = fullName.slice(0, fullName.indexOf(" "));

// console.log(firstName);
// console.log(lastName);
// phoneNo = phoneNo.replaceAll("-", "/");
// console.log(phoneNo);
//Method Chaining  calling one method after another in one continous line of code

// let letter = userName.charAt(0).toUpperCase().trim();
// console.log(letter);


// radio and checkbox button
// document.getElementById("myButton").onclick = function () {
//   if (document.getElementById("checkbox").checked) {
//     alert("you are Subscribe");

//   }
//   else if (document.getElementById("myRadio1").checked) {
//     alert("you select Visa card");
//   }
//   else if (document.getElementById("myRadio2").checked) {
//     alert("you select Master card");
//   }
//   else if (document.getElementById("myRadio3").checked) {
//     alert("you select Paypal card");
//   }
//   else {
//     alert("you did not select any payment method");
//   }
// }
// }

// switch statement
// let marks = prompt("Enter your marks");
// switch (true) {
//   case marks >= 90:
//     alert("You Got A");
//     break;
//   case marks >= 85:
//     alert("You Got b");
//     break;
//   default:
//     alert("You Fail");

// }

// Nested Loop
// for (let a = 1; a <= 5; a++) {
//   for (let b = 1; b <= a; b++) {
//     document.write(b + " ");
//   }
//   document.write("<br> ");
// }

// return function example
// let area, width, height;
// width = prompt("Enter the Width");
//   height = prompt("Enter the height");
// function rectangle(width,height) {

//   area = width * height;
//   return area;

// }
// document.write(rectangle(width,height));

// tenary operator is short form of if else statement
//Syntax: condition?exprifTrue:exprIfFalse

// toLocaleString()= return a string with a language sensitive representation of this

// let myNum = 100;
// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: 'celsius' });
// alert(myNum);

// number guessing game
// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;
// document.getElementById("myButton1").onclick = function () {
//   let guess = document.getElementById("textBox").value;
//   guesses += 1;
//   if (guess == answer) {
//     alert(`${answer} is the #. it took you ${guesses}guesses`);

//   }
//   else if (guess < answer) {
//     alert("Too small");

//   }
//   else {
//     alert("too large");
//   }

// };
// Temperature Conversion
// document.getElementById("myButton1").onclick = function () {
//   let temp;
//   if (document.getElementById("radio1").checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);
//     temp = toCelceius(temp);
//     document.getElementById("label3").innerHTML = temp + "C";
//   }
//   else if (document.getElementById("radio2").checked) {
//     temp = document.getElementById("textBox").value;
//     temp = Number(temp);

//     temp = toFahrenheit(temp);
//     document.getElementById("label3").innerHTML = temp + "F";
//   }

//   else {
//     document.getElementById("label3").innerHTML = "Select a unit";
//   }
// };

// function toCelceius(temp) {
//   return (temp - 32) * (5 / 9);
// }
// function toFahrenheit(temp) {
//   return temp * 9 / 5 + 32;
// }
// Arrays
// let fruits = ["Apple", "Orange", "Banana"];
// fruits[0]="grapes";
// console.log(fruits);
// fruits.push('mango');
// fruits.pop();
// fruits.unshift("grapes");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// let prices = [25, 43, 2, 3];
// for (let i = prices.length - 1; i >= 0; i -= 1) {
//   document.write(" " + prices[i]);
// }

// sort an array in alphabatical order
// let fruits = ["Apple", "Orange", "Banana"];
// fruits = fruits.sort();
// fruits = fruits.sort().reverse();
// for (let i of fruits) {
//   console.log(fruits);
// }


// 2D Arrays
// let fruits = ["Apple", "Orange", "Banana"];
// let vegetables = ["carrot", "Onions", "Potatoes"];
// let meats = ["Egss", "Chicken", "Fish"];
// let list = [fruits, vegetables, meats];
// list[0][0] = 'Mangoes';
// for (let i of list) {
//   for (let food of i) {
//     console.log(i);
//   }
// }

//spread Operator(...)=allows an iterable such as an array or string to be expanded.(Unpack the elements)
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let maximum = Math.max(...numbers);
// console.log(maximum);

///2nd Example
// let class1 = ['Zain', 'Ali', 'Talha'];
// let class2 = ['Khizer', 'Khurram', 'Kashif'];
// class1.push(...class2);
// console.log(...class1);

//callback = A function passed as an argument to another function
// Read the Documentation

//arrayforEach
// Read the Documentation

// //  JQuery

// // jS
// document.getElementById("hello").innerHTML = "Khizer ";
// $("#hello").text('hi');
// $("button").html("<em>Hell</em>");

// $("a").attr("href", "www.yahoo.com");

// // Evert Listener

// $("button").onclick() = function () {
//   $(".myButton1").css("background-color", "red");
// };


//Array forEach
// The forEach() method executes a provided function once for each array element.

let myArray1 = ['khizer', 'rehman', 'zain'];
myArray.forEach(function (value, index, myArray1) {
  console.log(index + " " + value + " " + myArray1);

}

);

// Map Filter and Reduce

let myArray = [1, 2, 3, 4, 5];

let reduceArry = myArray.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);
console.log('Reduce Method', reduceArry);

let mapArray = myArray.map((num) => {
  return num * 2;
});
console.log('Map Method', mapArray);

let filterArray = myArray.filter((num) => {
  return num > 3;
}); console.log('Filter Method', filterArray);







