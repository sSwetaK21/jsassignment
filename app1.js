
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

// let count =1;

// function decToBin(num){
  
//    if(count==1){
//        console.log(num .toString(2));
//        count+=1;
//        return decToBin(num);
//     }
    
// }

// decToBin(10);

// ------Qst 9-------

// Given a number n, print all the odd numbers from 1 to n using recursion.

// function odd(num, num2) {
//   if (num >= num2) {
//     if (num % 2 !== 0) {
//       console.log(i + " ODD");
//       return odd(num+1, num2);
//     }
//   }
// }

// console.log(odd(1, 7));


// -----------Qst 10------------

// Given a number n, print all the even numbers from n to 1 using recursion.

// function evenNumbers( num1, num2) {
//     if (num2 >= num1 ) {
//         if ( num2 % 2 == 0 ) {
//             console.log( num2 );
//         }
//         return evenNumbers( num1  , num2 - 1);
//     }
// }

// console.log(evenNumbers(1,9));

//-----------Qst 11------------
// Write a javascript program to check whether the given string is palindrome or not using recursion



function reverseNumber(num) {
    let rev =0;
    let temp = num;
    if(temp>0){
        let digit = Math.floor(temp % 10);
        rev = rev*10 + digit;
        temp = Math.floor(temp / 10);
        return reverseNumber(temp);
    }
    if(num == rev){
        console.log("It is Palindrome number");
    } else{
        console.log("It is not a Palindrome Number");
    }
}

reverseNumber(1221);


//-----------Qst 12--------------
// Given a number n, find 2^n using recursion

// let pow = 1;

// function powerOfNum(num1, exponent) {

//     if (exponent === 0) {
//         return 1;
//     } else {
//         return num1 * powerOfNum(num1, exponent - 1);
//     }

// }
// console.log(powerOfNum(2, 5));