
function calcEvenNumber()

{

//reading numbers from input fields

var beginNum = parseInt(document.numbers.firstNum.value);

var endNum = parseInt(document.numbers.secondNum.value);

if(beginNum<2 || beginNum >100)

{

document.getElementById("invalid").innerHTML = "Number 1 is an Invalid Number";

}

if(endNum<2 || endNum>100)

{

document.getElementById("invalid").innerHTML = "Number 2 is an Invalid Number";

}

//array to hold prime numbers

var EvenNumbs = new Array();

var ctr = beginNum;

//loop to store primer numbers in array

while(ctr<=endNum)

{

if(isEven(ctr)==true)

{

EvenNumbs[EvenNumbs.length] = ctr;

}

ctr = ctr+1;

}

//if no length is zero, then no prime numbers

if (EvenNumbs.length == 0)

{

document.getElementById('output_content').innerHTML = "There were no Even numbers within the range.";

}else

{   

//else print prime number count and prime numbers in the range

var count="<h2>Even Numbers Count:</h2>";

var html = "<h2>Even Numbers</h2>";

for(i=0;i<evenNumbs.length;i++)

{

html += evenNumbs[i] + ", ";

}

document.getElementById('even_count').innerHTML = count+"<b>"+evenNumbs.length+"</b>";

document.getElementById('output_content').innerHTML ="<b>"+html+"</b>";

}

}

//function to check the whether the number is even or not

function isEven(num)

{

var flag = true;

//loop to check prime number or not

for(var i=2; i<=Math.ceil(num/2); i++)

{

if((num%i)==0)

{

flag = false;

break;

}

}

return flag; //return true or false

}

function myFunction()

{

//reading numbers from field

var num1=parseInt(document.form.num1.value);

var num2=parseInt(document.form.num2.value);

//condition to check the enterd numbers

if(num1<2 || num1 >100)

{

document.getElementById("idnum1").innerHTML = "Invalid Number";

}

if(num2<2 || num2>100)

{

document.getElementById("idnum2").innerHTML = "Invalid Number";

}

}