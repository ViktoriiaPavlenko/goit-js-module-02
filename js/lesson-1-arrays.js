// const array = [1, 2, 'Hello'];
// console.log(array.length);

// console.log(array[2]);

// array[3] = 'World'
// console.log(array[3]);
// console.log(array);

// for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
// }

// multidimensional arrays

// const multiArray = [
//   [1, 10, 100, 1000],
//   [2, 20, 200, 2000],
//   [3, 30, 300, 3000],
// ]
// console.log(multiArray.length) // 3

// // console.log(multiArray[0]) // [1, 1]
// let it = 1
// for (let array of multiArray) {
  
//     it += 1
//       console.log(`iteration - ${it}`, array)
//   for (let xxx of array) {
//     console.log(xxx)
    
//   }
// }



// Примитивы присваиваются новой перемнной позначению - т.е. ксерокопия
// Сложные типы передают только ссылку,
// т.е. еще одна переменная имеет доступ к тем же данным
// let age = 30
// console.log('age', age)

// let myAge = age
// console.log('myAge', myAge)
// console.log(age === myAge) // true

// age = 31
// console.log('age', age)
// console.log('myAge', myAge)

// console.log(age === myAge) // false




const numbers = [12, 23, 34, 45]
// console.log('numbers', numbers)

const myNumbers = numbers
// console.log('myNumbers', myNumbers)

// а теперь изменю значение первого элемента в исходном массиве
numbers[0] = 100500
// console.log('numbers', numbers)
// console.log('myNumbers', myNumbers)

// Array Methods
// console.log('numbers', numbers)

// slice()
const mySliceNumbers = numbers.slice()
console.log('mySliceNumbers', mySliceNumbers)

console.log(numbers === mySliceNumbers) // false

numbers[0] = 12
console.log('numbers', numbers)
console.log('mySliceNumbers', mySliceNumbers)

console.log(numbers === mySliceNumbers) // false

//                              (с __ до __), не включая
const firstTwoElems = numbers.slice(0, 1)
console.log('firstTwoElems', firstTwoElems)


// split()
let myString = 'my String'
// console.log(typeof myString, myString)
// console.log(myString[0])
// console.log(myString[1])
// console.log(myString[2])
// console.log(myString[3])
// console.log(myString[4])
// console.log(myString[5])
// console.log(myString[6])
// console.log(myString[7])
// console.log(myString[8])
// console.log(myString.length)

const arrayFromString1 = myString.split('')
console.log(arrayFromString1)

const arrayFromString2 = myString.split(' ')
console.log(arrayFromString2)

const arrayFromString3 = myString.split('s')
console.log(arrayFromString3)

const arrayFromString4 = myString.split('S')
console.log(arrayFromString4)


// join()
const myArray = ['Hello', 'World']
console.log(myArray.length)

let arrayToString1 = myArray.join(' ')
console.log(arrayToString1)

let arrayToString2 = myArray.join('---')
console.log(arrayToString2)




const exampleArray = [1, 1, 2, 3, 4, 4]
console.log(exampleArray)
const unshiftElem = exampleArray.unshift(0, 0)
console.log(unshiftElem) // новый exampleArray.length
console.log(exampleArray) 

const pushElem = exampleArray.push(5, 5)
console.log(pushElem) // новый exampleArray.length
console.log(exampleArray)

const shiftElem = exampleArray.shift()
console.log(shiftElem) // удаленный элемент
console.log(exampleArray) 

const popElem = exampleArray.pop()
console.log(popElem) // удаленный элемент
console.log(exampleArray) 


// splice(idx, num) - delete elements
let deleteSplice = exampleArray.splice(1, 1)
console.log(deleteSplice) // удаленный элемент
console.log(exampleArray)


// перед idx удаляем 0 элементов и вставляем el1, ..., el
// splice(idx, 0, el1, ..., el) - add new elems
let addSplice = exampleArray.splice(1, 0, 'Hello', 'World')
console.log(exampleArray)


// splice(idx, num, el1, ..., el) - replace elems
let replaceSplice = exampleArray.splice(2, 1, 'people')
console.log(exampleArray)


// ------- concat()
const firstPiece = [1, 2]
console.log(firstPiece)

const secondPiece = [3, 4]
console.log(secondPiece)

const thirdPiece = [5, 6]
console.log(thirdPiece)

const fullArray = firstPiece.concat(secondPiece, thirdPiece)

console.log(fullArray)
