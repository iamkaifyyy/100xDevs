 // this is for async.js

 // normal function in Js

 function sum(a, b){
    return a+b;
 }

 let ans = sum(2, 3)
 console.log(ans);

// find sum of 1 to number
// 1 => n



function sum(n){
    let ans = 0;
    for(let i =1; i <= n ; i++){
        ans = ans + i;
    }
    return 
}

const answer = sum(10);
console.log(answer);

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);



// I/0 heavy Operationsss



 const fs = require("fs")

 const contents = fs.readFileSync("a.txt", "utf-8");
 console.log(contents);

 var user = {
    name: "kaifyyy",
    age: 21
 }

 console.log(user.age);




// fs is external library used for operations on File System

const read = require("fs");

const data = read.readFileSync('b.txt','utf-8');
console.log(data);

// require is to use external module by importing it..