//------------Qst1-----------------

// Print all the numbers in the given range


// function rangeOfNum(num1, num2){
//     for(i = num1 ; i <= num2; i++ ){
//         console.log(i);
//         return rangeOfNum(num1+1, num2 );
//     }
// }
// console.log( rangeOfNum(1,10) );

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
//     if(num1 < num2){
//          sum = num1 +num2;
//         return sumOfNum(num1 , num2, sum);
//     }
//     console.log(sum);
    
// }

// console.log(sumOfNum(2, 8));

//-------------------QSt 7------------
