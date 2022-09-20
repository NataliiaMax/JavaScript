// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mod зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення, використовуючи Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// function add(obj, key, value) { return obj[key] = value };
// console.log(user, 'mod', 'happy');

// const addArray = (obj, key, value) => obj[key] = value;
// console.log(user, "hobby", "skydiving");

// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// }

// const allSalary = (obj => {
//     let sum = 0;

//     for (const item of Object.values(obj)) {
//         sum += item;
    
//         console.log(item);
//     }    return sum;
// });

// console.log(allSalary(salaries));


// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 6 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 150, quantity: 100 },
// ]

// function calcTotalPrice(stones, stonesName) {
//     let sum = 0;
//     for (const item of stones) {
//         if (item.name === stonesName) {
//                        sum = item.price * item.quantity;
//         }
//     }
//     return sum;
// }
// console.log(calcTotalPrice(stones, "Бриллиант"));

// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

// const calculator = {
//   read(a, b) {return (this.valueA = a), (this.valueB = b)},
//   sum() {return (this.valueA + this.valueB)},
//   mult() {return(this.valueA * this.valueB)},
// };
// calculator.read(3, 5);
// console.log(calculator.sum(), calculator.mult());


// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [10, 12, 11, 13, 1, 2, 3, 6, 7, 8, 9]

// const fr = (arrNumbers) => arrNumbers.map((item, index, arr) => arr[arr.length - index - 1 ]);
// console.log(fr(arrNumber));


// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// const numbers = [0, 1, false, 2, undefined, "", 3, null];

// const filterArr = (numbersArr) => numbersArr.filter((number) =>  number);
// console.log(filterArr(numbers));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getTotalBalanceByGender = (users, gender) => {
//     const allBalance = [...users]
//         .filter(user => user.gender === gender)
//         .reduce((total, user) => total + user.balance, 0)
 
   
//         console.log(allBalance);
// };
  
//    console.log(getTotalBalanceByGender(users, "male"));
                      
//  const getNamesSortedByFriendCount = (users) => {
//    const allNames = [...users]
//      .sort(
//        (firstFriend, lastFriend) =>
//          firstFriend.friends.length - lastFriend.friends.length
//      )
//      .map((user) => user.name);
//    return allNames;
//  };
//   const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//       addPotion(newPotion) {
//           for (let i = 0; i < potions.name; i += 1) {
//               newPotion[i] === potions.name
//           } potions.push(newPotion)
//               return `Error! Potion ${newPotion} is already in your inventory!`;
//           }
//           this.potions.push(newPotion)
//   },
      
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

let a = +prompt("Перше число?", "");
let b = +prompt("Друге число?", "");

alert(a + b);
