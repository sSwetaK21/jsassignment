
// Assignment questions here

// ------------Qst 1-------------

// Print factorial of a number using recursion

// function y(num,fact){
//   if(num>0){
//     fact *= num;
//     return y(num-1 ,fact);
//   }
//   return fact;
// }

// console.log(y(5,1));


// -----------Qst 2--------------

// Given a number n, print numbers from 1 to n using recursion.


// function range(num, num2){
//     for(i = num ; i <= num2; i++ ){
//         console.log(i);
//         return range(num+1, num2 );
//     }
// }
// console.log( range(1,7) );


// ------------Qst 3-----------

// Given a number n, print numbers from n to 1 using recursion.

// function range(num, num2) {
//   if (num >= num2) {
//     console.log(num);
//     return range(num - 1, num2);
//   }

// }
// console.log(range(5, 1));



// ------------------Qsst 4---------------

// Print ‘n’ numbers of Fibonacci series using recursion.


// function fibo(first, second, counter) {
//     if (counter <=10) {
//         var c = first + second;
//         console.log(first);
//         return fibo(second, c, counter + 1);

//     }
// }
// fibo(1, 1, 1);


// --------------Qst 6------------

// Write a Javascript program to count the number of digits a given number has using recursion.


// function numDig(num1,count ){
//     if(num1>0){
//         num1 = Math.floor(num1/10);
//         count++;
//         return numDig(num1 ,count);
//     }
//     console.log(count);
// }
// console.log(numDig(12456,0));


// -----------qst 8---------

// Convert a given decimal number to binary using recursion.

// function decToBin(num){
//     if(num == 0){
//         num =0;
//     } else {
//         console.log(num .toString(2));
//         return decToBin(num);

//     }
// }

// console.log(decToBin(10));

// ------Qst 9-------

// Given a number n, print all the odd numbers from 1 to n using recursion.

function odd(num, num2) {
  if (num >= num2) {
    if (num % 2 !== 0) {
      console.log(i + " ODD");
      return odd(num+1, num2);
    }
  }
}

console.log(odd(1, 7));