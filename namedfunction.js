//Named function without input and output
//declration
// function sayHello() {
//     console.log("Hello");
// }
// //calling
// sayHello();

//adding three numbers using named function without input and output
// function addThreeNumbers(){
//     let a=5;
//     let b=10;
//     let c=15;
//     let sum=a+b+c;
//     console.log("Sum of three numbers is: "+sum);

// }
// addThreeNumbers();/

//display the name by storing it in a variable using named function without input and output
// function displayName(){
//     let name="Nani";
//     console.log("Name is: ",name);
// }
// displayName();

//Named function with input and without return
// function displayName(name){
//     console.log("Name is: ",name);
// }
// displayName("Nani");


//check the given number is even or odd using named function with input and without return
// function checkEvenOdd(num){
//     if(num%2==0){
//         console.log("even");
//     } else {
//         console.log("odd");
//     }
// }
// checkEvenOdd(5);

//take three numbers as arguments and dipslay averege using named function with input and without return
//  function avg(a, b, c) {
//      let sum = a + b + c;
//     let avg = sum / 3;
//     console.log(avg);
//  }
//  avg(10, 20, 30);

//Named function without input and with return
// function getName() {
//     let name = "Nani";
//     return name;
// }
// let myname = getName();
// console.log("Name is: ", myname);

//write the code of factorial of 5 using named function without input and with return
// function fact(){
//     let num=5;
//     let factorial=1;
//     for(let i=1; i<=num; i++){
//         factorial*=i;
//     }
//     return factorial;
// }
// let result=fact();
// console.log( result);

//named function with input and with return
// function displayName(fname){
//     return fname;
// }
// let name=displayName("Nani");
// console.log(name);

//check the given number is even or odd using named function with input and with return
function evenodd(num){
    if(num%2==0){
        return "even";
    }
    else{
        return "odd";
    }
}
let result=evenodd(5);
console.log(result);