/*const profile ={
    username : "vishal",
    isFollow :true,
    following : 200,
    message :"hello guays follow me",
};
console.log(profile);






/*
/let num = prompt("Enter a number");

if(num % 3 ===0){
    console.log(num, "is a mutiple of 3");
}
else{
    console.log(num, "is a Not mutiple of 3");
}
*/





//write a code which can give grades to students according to their scores

/*let score = prompt("Enter a number (0-100):");
let grade;

if (score >=90 && score <=100){
    grade = "A";
}
else if (score >=70 && score <=89){
    grade = "B";
}
else if (score >=60 && score <=69){
    grade = "C";
}
else if (score >=50 && score <=59){
    grade = "D";
}
else{
    grade ="Fail"
}
console.log (grade);*/







//print all even number 0 to 100

/*for(let num = 0; num<=100; num++){
    if(num%3 === 0)
        {
            console.log("num =",num);
        }
}
*/






//create a game where you start with any randam number.ask the user

/*let gameNum = 7
let userNum =prompt ("Guess the correct number");

while (userNum != gameNum){
    userNum =prompt("You entered wrong number.plese guess correct number.");
}

console.log ("Congratulations , you guess the the correct number");
*/






//String template literals in js
/*let obj = {
    itemName:"Pen",
    price:10,
    color:"black",
};
let output = `the cost of ${obj.itemName} is ${obj.price} in color ${obj.color} `;
console.log(output);
*/







//user name = "boss",username should be @boss4;
/*
let fullName = prompt("Enter full name without spacing");
let userName = "@" + fullName + fullName.length;
    console.log(userName);
*/




//Array
/*let cities = ["vishal","avinash","tanbir","prasad","abhijeet","pratik"];

for (let city of cities){
    console.log(city);
}
*/





//find the average marks of the entire class.

/*let marks = [85,97,44,37,76,60];
let sum =0;
for(let val of marks){
    sum = sum + val;
}
let avg= sum /marks.length;
console.log(`Total avg of marks :${avg}`);
*/






//calculate 10% offer of given value

/*let items = [250,645,300,900,50];

for (let i=0; i<items.length; i++){

    let offer = items [i]/10;
    items[i]-=offer;

}
console.log(items);
*/






//create function using function keywords,return s the number of vowels in the String.
/*function countVowels(str){
    let count =0;
    for(const char of str){
       if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u"){
        count++;

       }
    
    }
console.log(count);
}
*/









// for given a array of number,print the squre of th each valuee using the forEach loop

/*let nums= [1,2,3,4,5,6,7,8];

nums.forEach((num) => {
    console.log(num*num);
    
});
*/






//Map

/*let nums = [12,85,78];

let newArr= nums.map((val) => {
    return val;
});

console.log(newArr);
*/





//filter
/*let arr = [1,2,45,78,65,21];

let evenArr = arr.filter((val)=>{
     return val%2 ===0 ;

});
console.log (evenArr);
*/




/*
let arr = [87,53,64,99,86];

let scoreArr= arr.filter((val)=>{
    return val >90;
});
console.log(scoreArr);
*/


//give the user input and 1 to n, using reduce function create value sum of 1to n and factorial of 1 to 1


/*let n = prompt("enter a number");

let arr=[];

for(let i=1; i<=n; i++){
    arr [i-1]=i;

}
console.log(arr);


let sum =arr.reduce((result , curent) =>{
      return result + curent;
});
console.log("sum is",sum);


let Factorial =arr.reduce((result , curent) =>{
    return result * curent;
});
console.log("Factorial is",Factorial);
*/






/*
let h2 = document .querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText + " Apna college";
*/




/*
let div = document.querySelectorAll(".box");
for (divs of div){
    console.log(divs);
}
    */






/*create a new button element . give it a text "click me",background color of red and text color of white
insert the button as the first elements inside the body tag.*/

let newbtn = document.createElement("button");
newbtn.innerText = "click me!";
newbtn.style.color="white";
newbtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newbtn);




















