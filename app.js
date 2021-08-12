// 1 Переменные
// camelCase - (стайлгайд) - способ применения имени переменной через большую букву следующего слова в имени
// const firstName = 'Arsen'
// const age = 25  //number - тип данных
// const isProgrammer = true  // boolean - тип данных

// name = 'Anton'
// console.log(isProgrammer)

// синтаксис объявления переменных
// const if = 'qwer' - err
// const 5firstName = 'Arsen' - err
// const _ = '5'
// console.log(5)

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2021
// const birthYear = 1995
// const age = currentYear - birthYear

// const a = 20
// const b = 5
// let c = 32

// c += a // c = c + a (текущее состояние переменной "с" равно с плюс "а")
// c -= a // c = c - a
// c /= a // c = c / a
// c *= a // c = c * a

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const firstName = 'Arsen'
// const age = 26
// let x
// null

// Примитивные типы данных
// console.log(typeof isProgrammer)
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// Приоритет операторов
// const fullAge = 25
// const birthYear = 1995
// const currentYear = 2021

// const isFullAge = currentYear - birthYear >= fullAge
// const num = 3;
// alert(num);

// const a = 10;

// const b = 2;
// console.log(a * b);
// console.log(a / b);
// console.log(a + b);
// console.log(a - b);

// const a = 10;
// const b = 2;

// const c = 5;

// const result = a + b + c;
// console.log(result);
// const a = 17;
// const b = 10;
// const c = a - b;
// const d = 7;
// const result = c + d;
// console.log(result);

// const str = 'Привет, Мир!';
// console.log(str);

// const str1 = 'Привет, ';
// const str2 = 'Мир!';

// const name = 'Arsen';
// console.log('Привет, ' + name);
// const age = 25;
// console.log(`Мне ${age} лет!`);

// const name = prompt('Ваше имя');
// alert(`Ваше имя ${name}`);

// const num = prompt('Введите число');

// alert(Math.pow(num, 2));

// const str = abcde;
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);
// function getShippingCost(country) {
//   let message;
// Change code below this line
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

// Change code above this line
//   console.log(message);
// }
// function formatMessage(message, maxLength) {
//   let result;
// Change code below this line
//   if (message.length < maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }

/// Change code above this line
//   return result;
// }

// Задача модуля №1 под номером 36
// function checkForSpam(message) {
//   let result;
// Change code below this line
//   message = message.toLowerCase();

//   if (message.includes('sale') || message.includes('spam')) {
//     result = true;
//   } else {
//     result = false;
//   }
// Change code above this line
//   return result;
// }
// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }
// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }
// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// const stack = [];

// Добавляем элементы в конец массива
// stack.push(125);
// console.log(stack); // [1]
// stack.push(5);
// console.log(stack);
// stack.push(13);
// console.log(stack);

// stack.pop();
// console.log(stack);

// !!--Masive
// const toSplice = [1, 5, 18, 45];
// console.log(toSplice);
// toSplice.splice(1, 3, 19); где 1 - место примененния "по индексу 1 (число 5)"; "начиная с него"
//   3 - количество удаляемых элементов "от первого индекса"
//   19 - добавленый элемент в массив
// console.log(toSplice);
// function f() {
//   return Array.from(arguments);
// }

// f(1, 2, 3);
// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//   } else {
//     console.log('Операция снятия средств проведена.');
//   }
// };
// withdraw(0, 300);
// Change code below this line
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   }
// }
// checkStorage(100, 50);
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   } else if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }
// // checkStorage(100, 50);
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElementIndex);
// console.log(lastElement);
// const array = [4, 18, 22, 16, 47, 48];
// let splice = array.shift(0);
// let splice2 = array.shift(array.length - 1);
// // console.log([splice, splice2]);
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElements = array[0];
//   const lastElements = array[array.length - 1];
//   const objOutput = { [firstElements]: [lastElements] };
//   return objOutput;

//   // Change code above this line
// }
// getExtremeElements[(12, 21, 18.4888, 13)];
// console.log(getExtremeElements);

// function firstAndLast(array) {
//   var firstItem = array[0];
//   var lastItem = array[array.length - 1];

//   var objOutput = [firstItem, lastItem];

//   return objOutput;
// }

// firstAndLast(['dkflk', 'sdjjfjo', 'koodsko']);
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElements = array[0];
//   const lastElements = array[array.length - 1];
//   const myArray = [firstElements, lastElements];
//   return myArray;

//   // Change code above this line
// }

// ! Нахождение цены за слово в массиве

// const message = 'koo fjeio llsppe kycyd';
// const splitMessage = message.split(' ');
// console.log(splitMessage);
// const quantityWords = splitMessage.length;
// console.log(quantityWords);
// const pricePerWord = 50;

// const totalPrice = pricePerWord * quantityWords;
// console.log(totalPrice);

// function slugify(title) {
//   // Change code below this line

//   const toLowerTitle = title.toLowerCase();
//   const toSplitTitle = toLowerTitle.split(' ');
//   const slug = toSplitTitle.join('-');
//   return slug;

//   // Change code above this line
// }
// const title = 'Arrays for begginers';
// let slug;
// let toLowerTitle;
// let toSplitTitle;

// toLowerTitle = title.toLowerCase();
// console.log(toLowerTitle);
// toSplitTitle = toLowerTitle.split(' ');
// console.log(toSplitTitle);

// slug = toSplitTitle.join('-');
// console.log(slug);cin
// const firstArray = ['Mango'];
// const secondArray = ['Ajax', 'Chelsea', 'Poly', 'Houston'];
// const maxLength = 3;
// let newArray = firstArray.concat(secondArray);
// console.log(newArray);
// newArray = newArray.slice(0, maxLength);
// console.log(newArray);
// const order = [15, 20, 15];
// let total = 0;
// for (let i = total; i < order.length; i += 1) {
//   total += i;
// }
// console.log(total);

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// const str = 'May the force be with you';
// const toArray = str.split(' ');
// console.log(toArray);
// for (let i = 0; i < toArray.length; i += 1) {
//   let wordLength;
//   let longestWord;

//   wordLength = arrStr[1].length;

//   if (arrStr[i].length > wordLength) {
//     longestWord = arrStr[i];

//     console.log(longestWord);
//   }
// }

// !Функция для нахождения самого длинного слова в строке (с проверкой посторонних символов)
// const findLongestWord = function (str) {
//   if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
//     return 'содержит посторонние символы!';
//   }
//   let arrStr = str.split(' ');
//   let longestWord = arrStr[0];
//   for (let i = 1; i < arrStr.length; i++) {
//     if (arrStr[i].length > longestWord.length) {
//       longestWord = arrStr[i];
//     }
//   }
//   return longestWord;
// };

// !Функция создания массива от min до max, где указывается два числа (начало массива мин и конец массива мац)
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     let arrayOfNumbers = numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// function filterArray(numbers, value) {
//    // Change code below this line
//  let newArray = [];
//   for (let i = 0; i < numbers.length; i+=1) {
//     if (numbers[i] > value) {
//       newArray = numbers.push[i];

//     }
//       return newArray;

//   }

//   // Change code above this line
// }
// const numbers = [25, 13, 58, 44, 46];
// const value = 12;
// let newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);
// let newArray = [];

//   // Change code above this line
// };

// const fil1 = filterArray([35, 12, 10], 10);
// console.log(fil1);
// console.log(newArray);
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const fruit = 'apple';
// c
// !Функция нахождения общих значений переменных из 2 массиво и запись их в третий массив
// const array1 = [1, 2, 3];
// const array2 = [2, 1, 17, 19];
// const newArray = array1.concat(array2);
// // console.log(newArray);
// let array3 = [];
// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//     array3.push(array1[i]);
//   }
// }

// console.log(array3);

// const includes = function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return;
//     }
//     return;
//     // Change code above this line
//   }
// };
// const add = function (x, y) {
//   return x + y;
// };
// const rezult = add(10, 15);
// console.log(rezult);

// const filterArray = function (numbers, value) {
//   let newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// };

// const rezult = filterArray([12, 34, 24], 10);
// console.log(rezult);

// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   }
//   return message;
// }
// const rezult = checkStorage(18);
// console.log(rezult);
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line
// console.log(lastTag);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: 'Jamaica', city: 'Kingston' };
// console.log(apartment);

// Модуль 3 задача №10 - "Получение массива ключей и получение масива значений ключей через цикл for...in"
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
// }
// console.log(keys);

// for (const value in apartment) {
//   values.push(apartment[value]);
// }
// console.log(values);

// !Функция находжения самого длинного слова в строке
// const string = 'jijijdi jki kow0opdoo0od0 js o';
// const findLongestWord = function (string) {

//   let stringSplit = string.split(' ');
//   let longestWord = stringSplit[0];

//   for (let i = 0; i < stringSplit.length; i += 1) {
//     if (stringSplit[i].length > longestWord.length) {
//       longestWord = stringSplit[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord(string));

// // !Модуль №3 Задача №12 - нахождения суммы количества свойст объекта
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       propCount += Object.keys(object).length;

//       // Change code above this line
//       return propCount;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({}));

// Модуль 3 задача №13(вроде) - позволяет создать массив из свойст ключей объекта
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// 3.18(модуль 3 задача 18) - наполнение нового массива значениями свойст объекта
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// !3.18 Поиск объекта по значению свойства
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const name of products) {
//     if (productName === name.name) {
//       return name.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Grip'));

// !3.19 Функция для нахождения значений свойств по ключу
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrayValues = [];
//   for (const product of products) {
//     const keys = Object.keys(product);

//     if (keys.includes(propName)) {
//       arrayValues.push(product[propName]);
//     }
//   }
//   return arrayValues;
// }

// console.log(getAllPropValues('quantity'));

// ! 3.20 Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     const value = Object.values(product);

//     if (value.includes(productName)) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//     return totalPrice;
//   }
// }

// console.log(calculateTotalPrice('Radar'));

// !3.31 Функция возврата нового обьекта из параметра
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   const object = { completed, category, priority, ...data };
//   // Change code below this line
//   return object;
//   // Change code above this line
// }

// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   })
// );,

// !3.31 Функция нахождения суммы элементов любого количества параметров
// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total;

// Change code above this line
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 1, 10));

// Change code below this line
// function addOverNum(value, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }

//   return total;
// Change code above this line
// }
// console.log(addOverNum(5, 2, 34, 17));

// Change code below this line
// function findMatches(values, ...args) {
//   const matches = []; // Don't change this line
//   for (let i = 0; i < args.length; i += 1) {
//     if (values.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// !Модуль 3 задача 35 - замена элемента свойства пр  помощи метода массива
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const oldBookIndex = this.books.indexOf(oldName);
//     this.books.splice(oldBookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// !Модуль 3 задача 41 - полный капец
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName.name) {
//         return `Potion ${potionName.name} is already equipped!`;
//       }
//     }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         console.log(`Нашли ${potionName}, удаляю`);
//         potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');

// console.table(atTheOldToad.potions);

// ! Мщдуль 4 задача 3 КОЛБЭК-ФУНКЦИИ
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Роял гранд', makePizza));

// !Модуль 4 задача 6
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = this;
//     for (const pizza of pizzas) {
//       if (pizza === pizzaName) {
//         return makePizza(pizzaName);
//       }
//     }
//     return onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// pizzaPalace.order('Венская', makePizza, onOrderError);

// Модуль 4 задача №7
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   const msg = composeMessage.call(orders[i], i + 1);
//   console.log(composeMessage.call(orders[i], i + 1));
//   messages.push(msg);
// }

// console.log(messages);

// !Модуль 4 задача 9
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Poly');
// console.log(pizzaPalaceMessage);

// !Модуль 4 задача 10
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction(
//   'kiwi@mail.uk',
//   service.subscribe.bind(service)
// );
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction(
//   'poly@hotmail.de',
//   service.unsubscribe.bind(service)
// );
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }
// makeMessage(customer.getFullName.bind(customer))

// !Принцип наследования
// const App = function ({ name, price } = {}) {
//   this.name = name;
//   this.price = price;
// };
// App.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };
// App.prototype.changeName = function (newName) {
//   this.name = newName;
// };

// const app1 = new App({ name: 'java', price: 100 });
// app1.changePrice(500);
// app1.changeName('reno');
// console.log(app1);

// class Car1 {
//   constructor() {}
// }
// console.dir(Car1);

// const carInstance = new Car1();
// console.log(carInstance);
// const a = [1, 2, 3, 4];
// const b = { ...a };
// console.log(b);

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);
// console.log(child);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname'));

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car1);
// console.log(car1.getPrice());

// ! Модуль 4 задача 6 - С помощью Function Declaration напиши функцию-конструктор Storage
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   for (let i = 0; i < this.items.length; i += 1) {
//     console.log(this.items[i]);
//     if (this.items[i] === item) {
//       this.items.splice(i, 1);
//     }
//   }
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// ! Модуль 4 Задача 7 - Конструктор строк
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = this.value + str;
//   this.value = str + this.value;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// console.log(builder);
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// // !Модуль 4 задача 10 - Методы класса
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// console.log(car1);
// console.log(car1.getPrice());

// !Модуль 4 задача 10 - Приватные свойства
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const car1 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// console.log(car1);

// console.log(car1.getBrand());
// car1.changeBrand('audi');
// console.log(car1);

// !Модуль 4 Задача 12 -Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.
// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // ! Модуль 4 Задача 13 - Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. Сделай так, чтобы свойство value было приватным.
// class StringBuilder {
//   #value;
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// const car1 = { brand: 'BMW', model: 'X5', price: 58900 };
// console.log(car1);
// car1.model = 'Q3';
// console.log(car1);

// !Модуль 4 Задача 15 Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// !Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }

//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// console.log(audi);

// ! Модуль 4 задача 16 Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.
// class Car {
//   static #MAX_PRICE = 50000;
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.';
//   }
//   // Пиши код ниже этой строки

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// !Модуль 4 задача 17 - Наследование классов
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }
// console.log(Admin.AccessLevel.BASIC);

// !Модуль 4 задача 18 Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// !Модуль 4 задача 19 - Методы дочернего класса
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   blacklistedEmails = [];

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// !---------МОДУЛЬ 6
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach((element) => {
//     console.log(element);
//     totalPrice += element;
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([1, 12, 6]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach((element) => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }

// console.log(filterArray([12, 6, 8], 7));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([12, 4, 8, 7], [5, 12, 11, 88]));

// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(12, 4));

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newNumbers = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newNumbers.push(element + value);
//     } else {
//       newNumbers.push(element);
//     }

//     // Пиши код выше этой строки
//   });
//   return newNumbers;
// }

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// [144, 13, 81, 192, 136, 154]

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);
// console.log(titles);

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);
// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUserEmails = (users) => {
//   const array = [];
//   users.map((user) => {
//     array.push(user.email);
//   });
//   return array;
// };
// console.log(getUserEmails(a));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );
// console.log(uniqueGenres);

// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] }
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// console.log(uniqueCourses);

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// const getUsersWithEyeColor = (users, color) => {
//   const eyeFilter = [];
//   users.filter((user) => {
//     if (user.eyeColor === color) {
//       eyeFilter.push(user);
//     }
//   });
//   return eyeFilter;
// };
// console.log(getUsersWithEyeColor(a, 'green'));

// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const ageFilter = [];
//   users.filter((user) => {
//     if (user.age >= minAge && user.age <= maxAge) {
//       ageFilter.push(user);
//     }
//   });
//   return ageFilter;
// };

// console.log(getUsersWithAge(a, 20, 30));

// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//   const arrayFilter = [];
//   users.filter((user) => {
//     if (user.friends.includes(friendName)) {
//       arrayFilter.push(user);
//     }
//   });
//   return arrayFilter;
// };

// console.log(getUsersWithFriend(a, 'Briana Decker'));

// ! МОДУЛЬ 6 ЗАДАЧА 24 - ИНТЕРЕСНАЯ -Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getFriends = (users) => {
//   const friendsFilter = [];
//   const uniqueFriends = [];
//   users.flatMap((user) => {
//     friendsFilter.push(...user.friends);
//   });
//   console.log(friendsFilter);
//   friendsFilter.filter((friend, index, array) => {
//     if (array.indexOf(friend) === index) {
//       uniqueFriends.push(friend);
//     }
//   });
//   return uniqueFriends;
// };
// console.log(getFriends(a));
