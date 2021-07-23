//  function calculateTotal(number) {
//      let total = 0;
//   for (let i = 1; i <= number; i += 1) {
      
//      total += i;
//      }
//     return total; 
// }

// console.log(calculateTotal(3));




// const findLongestWord = function(str) {
//   let arrStr = str.split(' ');
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }

//   }
// };

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'



function findLongestWord(string) {
  // Change code below this line
 const stringSplit = string.split(' ');
let longestWord = "";

  for (const word of stringSplit) {
    if (word.length > longestWord.length) {
    longestWord = word;
}
}
  return longestWord;
  // Change code above this line
}

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'