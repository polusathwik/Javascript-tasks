// write a program to get the sum of two numbers 
  function addingNumber(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let res=num1+num2;
    document.getElementById("res").value=res;
    return false;
}

//write a program to display average of 3 nums

function averageThree(){
      let num1=parseInt(document.getElementById("num1").value);
      let num2=parseInt(document.getElementById("num2").value);
      let num3=parseInt(document.getElementById("num3").value);
      let sum = num1+num2+num3;
      let avg=sum/3;
      document.getElementById("res1").value=avg;
}

//write a program to display sum and avg of n natural numbers
function averageNatural(){
 let n=parseInt(document.getElementById("num").value);
let sum =n*(n+1)/2
let avg=sum/n;
 document.getElementById("res2").value=avg;
}

// write a program to display the missing angle in the triangle 
function angleTriangle(){
  let a1=parseInt(document.getElementById("a1").value);
  let a2=parseInt(document.getElementById("a2").value);
  let sum=a1+a2
  let missing =sum-180
  document.getElementById("res3").value=missing;
}

// find profit percentage based on the selling price and cost price
function profitPercentage(){
  let cp=parseInt(document.getElementById("cp").value);
   let sp=parseInt(document.getElementById("sp").value);
   let profit=sp-cp
   let profitPercentage=(profit/cp)*100;
   document.getElementById("res4").value=profitPercentage;

}

// simple interest
function simpleInterest(){
  let principle=parseInt(document.getElementById("p").value);
   let rateOfInterest=parseInt(document.getElementById("r").value);
   let time=parseInt(document.getElementById("t").value);
    let simpleInterest = (principle * rateOfInterest * time) / 100;
   document.getElementById("res5").value=simpleInterest;

}