// function countProps(object) {
//   let propCount = 0;
//   for (const key of object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     let probValues = [];
//     for (let duct of products) {
//         if (duct.hasOwnProperty(propName)) {
//             probValues.push(duct[propName]);
//         }
//     }
//     return probValues
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
//   const values = Object.values(salaries);
//   let sum = 0;
//   for (const value of values) {
//     sum += value;
//   }
// console.log(sum);

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.



// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };



// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню"
// };
// Зверніть увагу, що multiplyNumeric не потрібно нічого повертати. Слід безпосередньо змінювати об’єкт.

//   P.S.Використовуйте typeof для перевірки, що значення властивості числове.

// function multiplyNumeric(obj) {
//   for (const key of obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);

// Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

// Має так працювати:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false

// Напишіть функцію sumTo(n), що обчислює суму чисел 1 + 2 + ... + n.

// Наприклад:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Зробити 3 варіанти рішення:

// Використання циклу.
// Використання рекурсії, у випадку sumTo(n) = n + sumTo(n-1) для n > 1.
// Використання формули арифметичної прогресії.
// Приклад результату:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050

// function sumTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i += 1) {
//     return total += n[i];
//   }
// };
// console.log(sumTo(100));


// function sumTo(n) {
//   if (n > 1) {
//     sumTo(n) = n + sumTo(n - 1)
//   }
// };
// console.log(sumTo(100));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totaltimes = players.reduce((playtime, player) => {
//   playtime.push(player.playtime);
//   return playtime}, []
// );
// console.log(totaltimes);
// const totalPlayTime = totaltimes.reduce(
//   (total, totaltime) => total + totaltime
// );
// console.log(totalPlayTime);

// const totalgames = players.reduce((gamesPlayed, player) => {
//   gamesPlayed.push(player.gamesPlayed);
//   return gamesPlayed;
// }, []);
// console.log(totalgames);
// const totalPlayGame = totalgames.reduce(
//   (total, totalgame) => total + totalgame
// );
// console.log(totalPlayGame);

// const totalAveragePlaytimePerGame = (totalPlayTime / totalPlayGame);
// console.log(totalAveragePlaytimePerGame);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
  .sort((firstAuthor, lastAuthor) => firstAuthor.author - lastAuthor)
  .filter((rating) => rating > MIN_BOOK_RATING);

console.log(names);

