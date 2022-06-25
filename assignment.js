//------------Qst1-----------------

// Print all the numbers in the given range


// function rangeOfNum(num1, num2){
//     for(i = num1 ; i <= num2; i++ ){
//         console.log(i);
//         return rangeOfNum(num1+1, num2 );
//     }
// }
//  rangeOfNum(1,10) ;

//-----------------Qst 2-----------

// Print all the numbers in descending order in the given range

// function descending(num1, num2) {
//     if(num1<=num2){
//         console.log(num2);
//         return descending(num1, num2-1);
//     }
// }

// console.log(descending(3,8));

//----------------Qst 3----------------------

// Print all the even numbers in the given range

// function evenNumbers(num1, num2) {
//     if (num1 < num2) {
//         if (num1 % 2 == 0) {
//             console.log(num1);
//         }
//         return evenNumbers(num1 + 1, num2);
//     }
// }

// console.log(evenNumbers(2, 9));


//-----------------QSt 4------------

// Find the factorial of a given number n

// function factorial(num1 , fact){
//     if(num1>0){
//         fact *= num1;
//         return factorial(num1 - 1, fact);
//     }
//     return fact;
// }

// console.log(factorial(5,1));

//-----------------Qst 5------------------
// Find the nth digit of the fibonacci series

// function fibonacci(first , second ,counter){
//     if(counter<=10){
//         let third = first + second;
//         console.log(first);
//         return fibonacci( second, third, counter +1);
//     }
// }

// console.log(fibonacci(1,1,1));


//-----------Qst 6 -------------------------
// Print sum of all the numbers in the given range

// let sum = 0;
// function sumOfNum(num1, num2) {
//     if(num1 <= num2){

//         sum += num1;
//         return sumOfNum(num1 +1 , num2);
//     }
//     console.log(sum);
// }

// sumOfNum(2, 8);

//-------------------QSt 7------------
// Print the product of all the numbers in given range

//  let product = 1;
//  function productOfNum(num, range) {
//     if(num <=range){
//         product *= num;
//         return productOfNum(num + 1, range);

//     }
//     console.log(product);
// }

// productOfNum(2,7)


//----------------QSt 8---------------
// Write the recursive function to check whether a given number is prime or not.

// let isprime = 0;
// function isprimeNumber(number) {
//     if (number <=2) {
//         if (number % 2 == 0) {
//             isprime=1;
//         }
//     }

//     return isprimeNumber(number + 1);

// }

// isprimeNumber(12);

//------------Qsst 9------------------
// Print sum of all the first 10 even numbers

// let sum = 0;
// function evenSum(num) {
//     if(num <= 10){
//         if(num % 2 == 0){
//             sum += num;

//         }
//         return evenSum(num +1);
//     }
//     console.log(sum);

// }

// evenSum(1);

//---------------Qst 10------------
// Write a recursive program to find the power of given number and exponent. (without using Math.pow and exponent operator(**))

let pow = 1;

function powerOfNum(num1, exponent) {

    if (exponent === 0) {
        return 1;
    } else {
        return num1 * powerOfNum(num1, exponent - 1);
    }

}
console.log(powerOfNum(2, 5));