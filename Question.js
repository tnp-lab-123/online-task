/*Questions-->
1.  Write a program to remove duplicate items form an array
2.  Write a program to filter even and odd values from an array 
3.  Write a program to find the factorial of given number
4.  Write a program to find a number is prime or not 
5.  Write a program to reverse the string. 

Today’s task

6. What is callback function 
7. ⁠What is setTimeout, setInterval, setImmediate 
8. ⁠Writer a program to remove duplicate elements from an array list
9. ⁠Write a program to reverse a string 
10. ⁠Write a program to reverse a words in a string 
11. ⁠Explain all array methods with an example

*/



//////////////////////////////////////////////////////////////////////////////////////

// / Question1=>  Write a program to remove duplicate items form an array

// function removeDuplicate(array){
//     const result =[];

//     for(let i=0; i<=array.length; i++ ){
//         let isDuplicate = false;
    

//     for(let j=0; j<=result.length; j++){
//         if(array[i]=== result[j]){
//             isDuplicate =true;
//             break;
//         }
//     }
//     if(!isDuplicate){
//         result.push(array[i]);
//     }
// }
// return result;
// }
// const number =[1,1,3,2,2,4,4,8,8,10];
// const callFunction = removeDuplicate(number);
// console.log(callFunction);



///////////////////////////////////////////////////////////////
// Question2=>  Write a program to filter even and odd values from an array 

// let number =[1,4,3,6,8,9,10];
// let evenNumber =[];
// let oddNumber =[];

// for(let i=0; i<=number.length; i++){

//     if(number[i] %2==0){
//         evenNumber.push(number[i]);
//     }else{
//         oddNumber.push(number[i]);
//     }

// }
// console.log("Even Number" + evenNumber);
// console.log("odd  Number" + oddNumber);
////////////////////////////////////////////////////////////////
// Question7-> . ⁠What is setTimeout, setInterval, setImmediate 
//  setTimeout()  ===== (function,miliseconds) ==1000ms = 1second 
// setInterval() ===  (function,miliseconds) ////ye continue utne second baad bhi run hoga

// setTimeout(function(){
//     console.log("5")
// }, 5000)
// setTimeout(function(){
//     console.log("4")
// }, 4000)
// setTimeout(function(){
//     console.log("3")
// }, 3000)
// setTimeout(function(){
//     console.log("2")
// }, 2000)
// setTimeout(function(){
//     console.log("1")
// }, 1000)

///////////////////////////////////////////////////////////
//setInterval

// setInterval(function(){
//     console.log("Akki")
// }, 2000)

////////////////////////////////////////////////////////////////////////////////

// Question11-> ⁠Explain all array methods with an example

/*

//////////////Arrays and Array methods//////////////

Array -> diffrent types of data ko store karane ke liye
position -> index

Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()

See Also:
Search Methods
Sort Methods
Iteration Methods	



*/

 
// let marks = [97, 82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); //property 

// let heroes =["ironman", "thor","hulk","shatkiman","antman"]




/////////////////// Add Element to an Array////////////////////////////////////
// let arr = ["eat", "sleep"];

// // add an element at the end
// arr.push("sport");

// console.log(arr);

// // Output: [ 'eat', 'sleep', 'exercise' ]


////////////////////////2. Using the unshift() Method////////////////////////
//add an element at the beginning of the array

// let dailyActivities = ["eat", "sleep"];

// // add an element at the beginning
// dailyActivities.unshift("work"); 

// console.log(dailyActivities);

// // Output: [ 'work', 'eat', 'sleep' ]


//////Change the Elements of an Array/////////////////////
////index array pe value change karta h
// let dailyActivities = [ "eat", "work", "sleep"];

// // change the second element
// // use array index 1
// dailyActivities[1] = "exercise";

// console.log(dailyActivities);

// // Output: [ 'eat', 'exercise', 'sleep' ]

///////////////////////// Question1//////////////////////////////////////////////////////--> 



// let marks =[85,97,44,37,76,60];
// let sum = 0;

// for (let val of marks) {
//    // sum = sum + val;
//      sum += val;
//    // console.log(val);
// }

// //console.log(sum);
//  let avg = sum / marks.length;
//  console.log(`avg marks of the class  = ${avg}`);  ////template litrals


//////////////3)pop() method////////////////
//delete from end and return delet value for show
// let fooditems =["potato","apple","mango","tomato"];

// console.log(fooditems);
// let deletedItem = fooditems.pop();
// console.log(fooditems);
// console.log("deletedItem",deletedItem);


////////////4)slice method//////////
//delete in between to values
// let marvelHeroes = ["thor","spiderman","ironman","antman","DR.Stranger"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1,4))

///////////5)splie method///////////
//add,delete,replace
// let  arr = [101,102,103,104,105];

// // arr.splice(3,2,101,102);
// arr.splice(2,0,1);
// console.log(arr);

// //add element
// arr.splice(2,0,101);
// console.log(arr);

// //Delete Element
// arr.splice(3,1);
// console.log(arr);

// //Replace Element
// arr.splice(3,1,101);
// console.log(arr);

//
// arr.splice(2);
// console.log(arr);

// arr.splice(2);
// console.log(arr);

/////////shift method///////

// let abc = ["apple","mango","banana","grapes"];
// abc.push("exercise");
// console.log(abc);


///////////////////////////////////////////////////////////////////////////////////////////
// Question6-> What is callback function?

//callback with example

// function hello(){
//     console.log("hello")
// };

// function add(num1, num2, callback){
//     console.log(num1+ num2)
//     callback();  
// }
// let a = 10;
// let b = 20;
// add(a, b, hello);

// function register(callback){
//     setTimeout(() => {
//         console.log("Register")
//         callback();
//     }, 1000)
    
// }
// function sendEmail(callback){
//     setTimeout(() => {
//         console.log('Email send')
//         callback();
//     }, 5000)  
// }
// function login(callback){
//     setTimeout(() => {
//         console.log("login")
//         callback();
//     }, 2000) 
// }

// function getUserData(callback){
//     setTimeout(()=>{
//         console.log("Got user data")
//         callback();
//     }, 7000)  
// }
// function displayUserData(){
//     setTimeout(() => {
//         console.log("user data display")
//     }, 5000)
    
// }
// register(function(){
//     sendEmail(function(){
//         login(function(){
//             getUserData(function(){
//                 displayUserData();
//             }
//             );            
//             });
//         });
// });


