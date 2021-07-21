//  ------- Функции
// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     console.log('Выполняется функция add');

//     return x + y;
// }

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);



// const fn = function (value) {
//     console.log(1);
//     console.log(2);

//     if (value < 50) {
//         return 'Меньше чем 50';
//     }

//     return 'Больше чем 50';
// }

// console.log('Результат функции: ', fn(10));

// console.log('Результат функции: ', fn(1000));


// Stack trace и поиск ошибок
// const fnA = function () {
//     console.log('Выполняется функция А');

//     fnB();
// }

// const fnB = function () {
//     console.log('Выполняется функция B');

//     fnC();
// }

// const fnC = function () {
//     console.log('Выполняется функция C');

//     console.log(value);
// }

// fnA();



// Напиши функцию calculateTotalPrice(items)
// которая принимает массив цен(чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total: ', total);


// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции: ', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// }

// console.log(calculateTotalPrice([1, 2, 3]));



// Напиши функцию logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly']);



// ------- Напиши функцию findLogin(allLogins, login) для поиска логина
// -Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// -Если нашли логин, вывести сообщение 'Пользователь [логин] не найден.'

// const logins = ['mango4', 'kiwi3', 'polysss', 'ajaxxxxx'];



// 1й вариант (for of)
// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//         }
//     }

//     return `Пользователь ${loginToFind} не найден.`;
// }
// console.log(findLogin(logins, 'polysss'));



// 2й вариант (тернарный оператор)
// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`
   
// }

// console.log(findLogin(logins, 'polysss'));


// ------- Напиши функцию findSmallestNumber(numbers) для поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяються).



// const findSmallestNumber = function (numbers) {

//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
//     }
//     return smallestNumber;
// }
 
// console.log(findSmallestNumber([51, 18, 13, 24, 7, 85, 19]));



// ------- Напиши функцию  changeCase(string), которая заменяет регистр каждого символа
// в строке на противоположный. 
// Например если строка "JavaScript", то на выходе должна быть строка
// "jAVAsCRIPT"



// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';


//     for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//         ? letter.toUpperCase()
//         : letter.toLowerCase()
    
//     }
//     return invertedString;
// }
// console.log(changeCase('JavaScript'));



// ------- Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
// Строка состоит только из букв и пробелов

// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));



// ------- Псевдомассив arguments и Array.from и ...


// 1й способ сделать из псевдомассива массив

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
// }

// fn(1, 2, 3);



// 2й способ сделать из псевдомассива массив
// const fn = function (...args) {
//     console.log(args);
// }

// fn(1, 2, 3);


// Как обьявить какие то параметри отдельно
// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }

// fn('hello', 1, 2, 3);


// Напиши функцию add для сложения произвольного количества аргументов (чисел) 

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
        
//     }
//     return total;
// }

// console.log(add(1, 2, 3));



// Напиши функцию filterNumbers(array [, number1, ...]) которая:
// - первым аргументом принимает массив чисел
// - после первого аргумента может быть произвольное количество
// других аргументов которые буду числами
// - функция должна вернуть новый массив, в котором будут только те аргументы,
// начиная со второго, для которых есть аналог в оригинальном массиве

const filterNumbers = function (array, ...args) {
    console.log('array: ', array);
    console.log('args: ', args);
    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} есть везде!!!`);
        }
        
    }
    return uniqueElements;
}


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 6));