// //for loop
// for (let i = 0; i < 5; i++) {
//     console.log("Hello World!");
// }

// //sequence of numbers
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// for (let i = 2; i<=11; i=i+3) {
//     console.log(i);
// }

// for(let i=5; i<=25; i=i+5){
//     console.log(i);
// }

// for(let i=5; i>=1; i--){
//     console.log(i);
// }

// for(let i=100; ""; i=i-10){
//     console.log(i);
// }

// let sum=0;
// for(let i=1; i<=3; i++){
//     sum=sum+10;
//     console.log(sum);
// }

// let sum=0;
// for(let i=1; i<=3; i++){
//     sum=sum+i;
//     console.log(sum);
// }

//factorial of 5 with loop
// let fact=1;
// for(let i=1; i<=5; i++){
//     fact=fact*i;
//     console.log(fact);
// }

// //factorial of 5 without loop
// let fact1=1;
// for(let i=1; i<=5; i++){
//     fact1=fact1*i;
// }
// console.log(fact1);

//print the number in the range of 10 to 15 which are divisible by 5 with loop and without loop
//with loop
// if (10 % 5 === 0) {
//     console.log(10);
// }   

// //without loop
// for (let i = 10; i <= 15; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// add sum of even numbers in the range of 1 to 5 with loop and without loop
//with loop
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

// //without loop
// let sum1 = 0;
// if (2 % 2 === 0) {
//     sum1 = sum1 + 2;
// }   
// if (4 % 2 === 0) {
//     sum1 = sum1 + 4;
// }   
// console.log(sum1);

//display the sum of the numbers which are divisible by 4 in the range of 10to 20 with loop and without loop

//with loop
// let sum2 = 0;
// for (let i = 10; i <= 20; i++) {
//     if (i % 4 === 0) {
//         sum2 = sum2 + i;
//     }
// }
// console.log(sum2);


// //without loop
// let sum3 = 0;
// if (12 % 4 === 0) {
//     sum3 = sum3 + 12;
// }
// if (16 % 4 === 0) {
//     sum3 = sum3 + 16;
// }
// if (20 % 4 === 0) {
//     sum3 = sum3 + 20;
// }   
// console.log(sum3);


//count the odd numbers in the range of 1 to 5

// let count = 0;

// for (let i = 1; i <= 5; i++) {
//     if (i % 2 != 0) {
//         count++;
//     }
// }

// console.log("Count of odd numbers:", count);

//
// for(let i=1; i<=6; i++){
//     if(6%i==0){
//         console.log(i);
//     }
// }

// let n=6
// let count=0;
// for(let i=1; i<=6; i++){
//     if(n%i==0){
//         count++;
//     }
// }
// console.log(count);/

//write the program to find the sum of factors of given number

// let n = 6;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         sum = sum + i;
//     }
// }

// console.log("Sum of factors:", sum);

// //print the factors of n
// let n=7;
// let sum=0;
// for (let i=1; i<n; i++){
//     if(n%i==0){
//         sum=sum+i;
//     }
// }
// console.log(sum);
// //condition for perfect number
// if(sum==n){
//     console.log(n,"is a perfect")
// }
// else{
//     console.log()
// }

//while loop is used when we dont know number of itterations in advance

// let i=120;
// while(i>=60){
//     console.log(i);
//     i=i-20
    
// }

//dispaly the digits in given number in reverse order

// let n=342;

// while(n!=0){
//     let ld=n%10;
//     console.log("ld=",ld)
//     n= parseInt(n/10);
//     console.log("n=",n)
// }


//count

// let n=342;
// let count=0
// while(n!=0){
//     let ld=n%10
//     count=count+1
//     n= parseInt(n/10)

// }
// console.log(count)

//find the sum of digits in given number

// let n=123
// let sum=0;
// while(n!=0){
//    let ld=n%10
//    console.log(ld)
//    sum=sum+ld;
//    n=parseInt(n/10);
// }
// console.log(sum)

//reverse

// let n=258
// let rev=0;
// while(n!=0){
//     let ld=n%10
//     rev=rev*10+ld
//     n=parseInt(n/10)
// }
// console.log(rev)

//check palindrome
// let n = 2002;

// let newNum = n;
// let rev = 0;

// while (n != 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
// }

// if (newNum == rev) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

//display even digits from given numbers

// let n=256
// while(n!=0){
//     let ld=n%10
//     if(ld%2==0){
//         console.log(ld)
//     }
//     n=parseInt(n/10)
// }

// //count of odd digits 
// let n = 123;

// let count = 0;

// while (n != 0) {
//     let ld = n % 10;

//     if (ld % 2 != 0) {
//         count = count + 1;
//     }

//     n = parseInt(n / 10);
// }

// console.log(count);


//display the largest digit from given number
let n=231
let large=0
while(n!=0){
    let ld=n%10;
    if(ld>large){
        large=ld;
    }
    n=parseInt(n/10);
}
console.log(large)