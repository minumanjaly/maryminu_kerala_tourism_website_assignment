// operators
let a = 8
let b = 4

// addition operator
let add = a + b;
console.log(add);

// substraction
let sub = a - b;
console.log(sub);

// multiplication
let mul = a * b;
console.log(mul);

// division
let div = a / b;
console.log(div);

// reminder
let mod = a % b;
console.log(mod);

// incrementation
a++;
console.log(a);

// decrementation
b--;
console.log(b);

// postfix
let p=2;
let q=p++;
console.log(q);
// 1st step:assign value
// 2nd step: increment the value

// prefix
r=++p;
console.log(r);
// 1st step:increment the value
// 2nd step :assign value

// comparison
console.log(a==b);
console.log(a!=b);
console.log(a<b);
console.log(a>b);
console.log(a<=b);

// Assignment operator
let x = 5;
console.log(x+=3);  //x=x+3
console.log(x-=3); 
console.log(x*=3); 

// logical operator
// let A=true;
// let B=false;

// AND operator
// console.log(A&&B);

// OR
// console.log(A||B);

// NOT
// console.log(!A);

// Bitwise operator
// let A=1001;
// let B=1010;
// console.log(A&B);

// precedence
let A=1;
let B=2;
let C=3;
console.log(A+B*C);   //BODMAS

// IF ELSE condition
if(5<10){
    console.log("5 is lesser");
}
else{
    console.log("5 is greater");

}

// // Looping
// // FOR loop
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// i=1;
// i<=5;
// console.log(i);
// i++;
// i=2;
// i<=5;
// console.log(i);
// i++;
// i=3;
// i<=5;
// console.log(i);
// i++;
// i=4;
// i<=5;
// console.log(i);
// i++;
// i=5;
// i<=5;
// console.log(i);
// i++;
// i=6;

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// Do-while loop
let i=1;
do{
    console.log(i);
    i++
}while(i<=5);
