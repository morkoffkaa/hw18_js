// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).


// function pow(num, degree) {

//     if (degree == 1) {
//         return num;
//     } else {
//         return num * degree(num, degree  - 1);
//     }
// }

// console.log(pow);

function pow(num, degree) {
    return (degree == 1) ? num : (num * pow(num, degree - 1));
  }



console.log(pow(5, 3));