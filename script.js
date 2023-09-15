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

const grades = ["A", "F", "D", "A", "B", "E", "B", "E", "B", "C"];
const passGrades = grades.filter(function (grade) {
  let passGrade = ["A", "B", "C"];
  if (passGrade.includes(grade)) {
    return grade;
  }
});
console.log(passGrades);
