// const products = [
//     {
//       id: 1,
//       name: "black bag",
//       price: 500,
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//       id: 2,
//       name: "shoe",
//       price: 400,
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//       id: 3,
//       name: "laptop",
//       price: 400000,
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//       id: 4,
//       name: "Hp laptop",
//       price: 500000,
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//     {
//       id: 5,
//       name: "bag",
//       price: 500,
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minim.",
//     },
//   ];
//   function renderProduct(item) {
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].name.startsWith(item)) {
//         console.log(products[i].name);
//       } else {
//         console.log("no product!");
//       }
//     }
//   }
  
//   renderProduct("b");



// let x = "Mr Washington has just arrived Washington Washingtons";
// console.log(x.lastIndexOf("Washington"));


// let text = "Apple, Banana, Kiwi";
// let part = text.slice(0);
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(-1);
// console.log(part);


// let myName = 'I love coding';
// let myName2 = 'I love coding ';

// if(myName === myName2.trim()){
//     console.log('Yes');
// }else {
//     console.log('No');
// }


// let myName = 'I love coding';
// let myName2 = 'I love coding ';

// console.log(myName2.trim().length);


// let company = 'Alabian Solutions Ltd';
// console.log(company.includes('Comapny'))


// let x = 2.5095;
// console.log(x.toFixed(3));


// let x = 2.6939;
// let y = x.toString()
// console.log(typeof(y));


// console.log(parseInt("-10"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));

// let x = parseInt("10.33");
// console.log(typeof x);



// let result = [1,'Nonso', 2, 3, 4, 5, 6, 7, false]
// result.pop()
// result.push('Icon')
// result.shift()
// result.unshift('Habeeb')

// result[2] = 'Kuma'
// console.log(result);


// let result = ['w', 'h', 'j', 'k', 'l'];

// // let randomIndex = Math.floor(Math.random() * result.length); // Generate a random index
// // let randomElement = result[randomIndex]; // Access the element at the random index

// // console.log(randomElement);

// // const myGirls = ["Cecilie", "Lone"];
// // const myBoys = ["Emil", "Tobias", "Linus"];

// // let students = myBoys.concat(myGirls)
// // console.log(students);

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // // const myFruits = fruits.splice(1, 3, "Lemon", "Kiwi");
// // const myFruits = fruits.slice(2,4)
// // console.log(myFruits);


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let myFruits = fruits.sort()
// // console.log(myFruits);


// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // const myFruits = fruits.join("|");
// // console.log(myFruits);


// const cars = [
//     {
//         name:'Icon',
//         age:20
//     },
//     {
//         name:'Icon',
//         age:20
//     },
//     {
//         name:'Icon',
//         age:20
//     }
// ];
// cars.forEach(function (item) {
// // //   console.log("I love " + item.name);
// //     let names = ''
// //     let age = ''
// //     names += `<p>${item.name}</p>`
// //     age += `<p>${item.age}</p>`
// //     console.log(names,age);
// });


// const cars = ["Toyota", "Benz", "Ferrari","Ferrari", "Volvo"];

// const filteredCar = cars.filter(function (car) {
//   return car === "Ferrari";
// });

// console.log(filteredCar);

// const grades = ["A", "F", "D", "A", "B", "E", "B", "E", "B", "C"];
// const passGrades = grades.filter(function (grade) {
//   let passGrade = ["A", "B", "C"];
//   if (passGrade.includes(grade)) {
//     return grade;
//   }
// });
// console.log(passGrades);









// class Person {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//   greet(){
//     console.log(`Hello ${this.name}`);
//   }
// }

// const person1 = new Person('John',30)
// person1.greet();



// class Person {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   greet(){
//     console.log(`Hello ${this.age}`);
//   }
// }

// const person1 = new Person('John', 40);
// person1.greet()

// class Person {
//   constructor(name){
//     this.name = name;
//   }
//   get personName(){
//     return this.name;
//   }

//   set personName(name){
//     this.name = name;
//   }
// }

// let person1 = new Person('Jack');
// console.log(person1.name);

// person1.personName = 'Smallie';
// console.log(person1.personName);



// class Person {
//   constructor(name){
//     this.name = name;
//   }
//   greet(){
//     console.log(`Hello World`);
//   }
// }

// let person1 = new Person('Jack');
// console.log(person1.name);


// class Student extends Person {}
// let student1 = new Student('Doe');
// student1.greet()


// class Person {
//   constructor(name){
//     this.name = name;
//   }
//   greet(){
//     console.log(`Hello World`);
//   }
// }

// let person1 = new Person('Jack');
// console.log(person1.name);


// class Student extends Person {
//   constructor(name,age,){
//     super(name)
//     this.age = age;
//   }
// }
// let student1 = new Student('Doe',43);
// student1.greet()
// console.log(student1.name);


// const today = new Date();
// console.log(today.getFullYear());
// console.log(today.getMonth());


// let num1 = 32;
// let num2 = -13;
// let num3 = -345;
// let num4 = 4.76;
// let num5 = 0;
// console.log(Math.abs(num1));
// console.log(Math.abs(num2));
// console.log(Math.abs(num3));
// console.log(Math.abs(num4));
// console.log(Math.abs(num5));



// let num1 = 4.59;
// console.log(Math.round(num1));
// console.log(Math.ceil(num1));
// console.log(Math.floor(num1));

// let x = 8;
// let y = 2;
// console.log(Math.pow(x, y));

// let x = 64;
// console.log(Math.sqrt(x));

// console.log(Math.max(3, 9, 1, 5, 6));

// console.log(Math.random() * 10);
// let ourRand = Math.floor(Math.random() * 27)
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z']
// console.log(letters[ourRand]);


// alert('Hello World')
// const v = prompt('Are you ther')
// console.log(v);

// confirm('Are you sure you want to')


// function msg() {
//   const v = confirm("Are u sure?");
//   if (v == true) {
//     alert("ok");
//   } else {
//     alert("cancel");
//   }
// }
// msg()


// setTimeout(function(){
//   alert("your session has expired");
// },1000)

// let timeoutId = setTimeout(displayMessage, 3000);

// function displayMessage() {
//   console.log("Timeout expired. Message displayed.");
// }

// // Cancel the timeout after 2 seconds
// setTimeout(cancelTimeout, 2000);

// // Function to cancel the timeout
// function cancelTimeout() {
//   clearTimeout(timeoutId);
//   console.log("Timeout canceled.");
// }


// setInterval(function() {
//   document.write('Hello World')
// },3000)

// let count = 0;
// let intervalId;

// function startCounter() {
//   intervalId = setInterval(() => {
//     count++;
//     console.log("Count:", count);
//     window.open('icon.html')
//   }, 1000);
// }

// function stopCounter() {
//   clearInterval(intervalId);
//   console.log("Counter stopped");
// }
// // Start the counter
// startCounter();

// // Stop the counter after 5 seconds
// setTimeout(() => {
//   stopCounter();
// }, 5000);


setTimeout(function(){
  window.location.href = 'endExam.html'
},5000)




