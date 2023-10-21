

// let num = 4+true;
// console.log(num);

// let username = "raju's phone"+4;
// console.log(username);

// let userName ="raju";
// let email = "raju@gmail.com";
// let password = "presingi@";

// console.log("userName is: ",userName);
// console.log("userEmail is: ",email);
// console.log("password is: ",password);

// console.log(`
// userName is :${userName}
// userEmail is :${email}
// userPassword is :${password}
// `
//     );

// console.log(`
// userName is :${userName}
// phoneNumber :${email}
// userEmail is :${password}
// `);



    //   how to find DiscountPrice of cards

//if we want to find the discount prices on cards then 
// let listingPrice = 799;
// let sellingPrice = 100;

// //formula to find discountprice is
// let displayDiscountPrice = ((listingPrice - sellingPrice)/listingPrice)*100;
// let withOutDesimalNumbersDiscountIs = Math.round(displayDiscountPrice);

// console.log(withOutDesimalNumbersDiscountIs+"% off");



// let num1 = 2;

// let increase = ++num1;
// console.log(increase);


     //conditionals : if....else...
// let perscentage;
// alert(perscentage);

// if( perscentage >=80){
//     alert("grade A");
// }else if( perscentage >=70){
//     alert("grade B");
// }else if( perscentage >=50){
//     alert("grade c");
// }else if( perscentage >=35){
//     alert("grade Average");
// }else{
//     alert("fail");
// }


      // login in user either by using email || phoneNumber || facebook

// let email =false;
// let phoneName =true;
// let facebook = false;

// if(email || phoneName || facebook){
//     console.log("user login");
// }else{
//     console.log("not able to login");
// }

//        Button
// let situation = false;
// situation ? console.log("signOut"):console.log("logIn");


    //  flasy values

// undifined
// null
// ''
// NaN

// let admin ='';

// if(admin){
//     console.log("your are right");
// }


// strictly equal too

// let num ="2";

// if(2 === num){
//     console.log("yes we are same");
// }


//   basic's of functions

// let functionResult =function sayHello(name){
//     return `hello ,${name}`;
// } 
// function sayHelloToSir(nameMe){
//     return `hello ,${nameMe}`;
// } 
// let nameMe = "rani";
// console.log(functionResult("raju"));
// console.log(sayHelloToSir(nameMe));



               //define a function that can answer the roll of a user

// (1) admin - with all access .
//(2) subadmin - with access to create/delete courses .
//(3) testprep - with access to create/delete tests . 
//(4) user - consume all content .
//(5) other - trial user .

//input : getInputRole(name,role)

// function getInputRole(name,role){
//     switch(role){
//         case "admin":
//             return `${name}, is admin with access to all`;
//             break;
//         case "subAdmin":
//             return `${name}, is subAdmin with access to create/delete courses`;
//             break;
//         case "testprep":
//             return `${name}, is testprep with access to create/delete tests`;
//             break;
//         case "user":
//             return `${name}, is a user to consume content`;
//             break;
//         default :
//             return `${name}, is a trial user`;
//             break;
//     }
// }

// //we can take value directly
// console.log(getInputRole("raju","user"));

// //storing in a variable
// let userRoleStore = getInputRole("rani","admin");

// console.log(userRoleStore);



// var names ="raju";

// console.log("line number 7", names);

// function sayName(){
//     var names ="MSy h";
//     console.log("Line number 7",names);

//     function sayNameTwo(){
//         console.log("Line number 11",names);
//     }
// }

// sayName();



//                                        Re-use function

// let userFunction=function user(name){
//     console.log(`hello ,${name}`);
// }

// userFunction("ayyo");
// userFunction(true);
// userFunction(10);

// console.log(typeof userFunction);


// //another type ex :
// let userFunction=function user(a,b,c){
//     console.log(a+b+c);
// }

// userFunction(true ,[1,3,5]," raju");


//                                         how flexible javascript is 

// let userFunction=function user(a,b){
//     console.log(typeof a,typeof b);
// }

// let f= function(){
//     console.log("hjgsjch");
// }

// userFunction(1,f);


//                                         forEach()

// // ex : 1
// arr=[1,2,3,4,5];

// let f = function(){
//     console.log("i love you");
// }

// arr.forEach(f);

//ex : 2

// let f =function(x){
//     x();
// }

// let s=function user(a,b){
//     console.log(1+3);
// }

// f(s);

// arr=[1,2,4,5,7];
//  let sum =0;
// let f =function calculatinSum(element,index){
//     if(index % 2 == 0){
//       sum = sum + element;
//     }
// }

// arr.forEach(f);

// console.log(sum);

//                                         Arrow function 

// let arrowFunction = () => "hi man's";


// let outPut = arrowFunction();
// console.log(outPut);

// with parameters

// let arrowFunction = (a,b,c) => a,b,c;


// let outPut = arrowFunction(1,2,3);
// console.log(outPut);


//                                         map method (return will work in map method)

// let arr = [1,2,3,4,5];

// let arrrowFunction = () =>{
//     return "ayyo rama" ;
// }

// let returnValue =arr.map(arrrowFunction);

// console.log(returnValue);


//                                         forEach method (return will not work in forEach method)

// let arr = [1,2,3,4,5];

// let arrrowFunction = () =>{
//     return "ayyo rama" ;
// }

// let returnValue =arr.forEach(arrrowFunction);

// console.log(returnValue);element,index,list


//                                         filter method (return will  work in filter method)


// let arr=[1,2,3,4,5,6];
// let aFunction = (element,index)=>{
//    return element%2 == 0;
// }

// let returnResult =arr.filter(aFunction);
// console.log(returnResult);


//                                         reduce method (return will  work in filter method)
// let arr = [1,2,3,4];
//  let aFunction = (prev,element)=>{
//     return prev+element;
//  }

// let returnValue = arr.reduce(aFunction,2);

// console.log(returnValue);

//(Q)what if we dont take prev
//(Ans)it will take first arr element as previous element of reduce method.And ittaratin starts fron 2nd element.

// let arr = [1,2,3,4];
//  let aFunction = (prev,element)=>{
//     return prev+element;
//  }

// let returnValue = arr.reduce(aFunction);

// console.log(returnValue);


//                               if we want to find aceii value of particular word then(.charCodeAt()).
// let s="raju";

// console.log(s.charCodeAt(1));


// let char1 ="raju";
// let char2 ="raju";

// console.log(char1 == char2);


// //split 
// let string = "i am in my home";

// let updatedString =string.split(" ");

// console.log(updatedString);

// //join
// let string = ['i','am','in','my','home'];

// let updatedString =string.join("-");

// console.log(updatedString);


// //replace
// let string = "i am in my home";

// let updatedString =string.replace("am","kiran");

// console.log(updatedString);

// alert("hello");

// var num1 =10;
// console.log(num1);
// document.write(num1);

// let string = [1,"sdf",true,null];

// console.log(typeof (string));

// let student = [23,"string",true,null];
// console.log(student);

// let object={
//     'name':"raju",
//     'age':27,
//     'married':true,
//     'acers':null,
// }
// console.log(object);
//  let studentDetials =[
//     {'name':"raju",
//     'age':27,
//     'married':true,
//     'acers':null,},
//     {'name':"jawla",
//     'age':26,
//     'married':false,
//     'acers':null,},
//     {'name':"balu",
//     'age':22,
//     'married':true,
//     'acers':null,}
// ];
// console.log(studentDetials);
// console.log(studentDetials[0]);

// let a ="java";
// let b ="script";

// document.write(a+b);
// console.log(a+b);

// var a =3;
// var b = 3;
//  document.write(a + "==" + b + ":");
//  console.log(a+"=="+b+":");
//  document.write("<br>")
//  document.write(a==b);

// terinary operator

// let big;
// let a =8;
// let b =9;
// big =a>b?a:b;
// document.write(big);

// if( null){
//   console.log("hi man");
// }

//normal loop

// let sum =0;
// let i=2;
// sum=sum+i;
// i=i+2;
// sum=sum+i;
// i=i+2;
// sum=sum+i;
// console.log(sum);

// let sum =0;
// let n =3;
// for(let i=2;i<=(2*n);i=i+2){
//    sum+=i;
// }
// console.log(sum);

// type converstions are two types 
// (1)implicit type converstions=>(the converstion is automatically done by javascript engine).
// (2)explicit type converstion=>(the converstion done by mannually).

// document.write(2+"write");
// document.write("<br>");
// document.write(2-"write");
// document.write("<br>");
// document.write(2*"write");

// let x="2";
// let y=String ("542.345kbg");
// console.log(typeof y);

// let y = Boolean(-6);

// document.write(y);

// let a = prompt("Enter your name");
// document.write(a);

// let a = prompt("Enter a number");
// if(a < 0){
//     alert("Enter a positive number");
// }else{
//     alert("your enter number is :${a}");
// }
// alert("Hello");




//              amount transfering



// let balence = 10000;
// let amount =prompt(`Enter amount to Transfer`);
// if(amount < balence){
//     alert(`Your total amount before deduction is :${balence}`);
//     balence = balence - amount;
//     alert(`Your payment successful`)
//     alert(`Your remaining balence amount is :${balence}`);
// }else{
//     alert(`Please Enter the amount Below the ${balence}`);
// }
// alert(`please take your card`);


// var arr = [`a`,`b`,`c`];
// document.write(arr+"<br>");

// // console.log(arr.push(`k`));
// arr[50]=`s`;
// console.log(arr);

// let IIFE=(function add(a,b){
//     var result = a+b;
//     return(result);
// })(3,4);
// // console.log(IIFE);

// let arow =(a,b,c)=>{
//     return (a+b+c);
// }

// // document.write(arow(1,2,3));
// let object = [
//     {
//         'name':"Arjun",
//         'age':19,
//         'gender':"male",
//     },
//     {
//         'name':"Chanti",
//         'age':22,
//         'gender':"female",
//     },
//     {
//         'name':"Eswar",
//         'age':28,
//         'gender':"male",
//     },
//     {
//         'name':"zani",
//         'age':30,
//         'gender':"male",
//     }
// ];


// let names =["raju","kiran","ajay","yadhav"];
// names.sort((a,b) => {
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
// });
// console.log(names);

// let arr = ["A","D","B","E"];
// arr.sort();
// console.log(arr);
// arr.sort((a,b)=>{
//       return b-a;
// })

// console.log(arr);


// let string = "1,2,3,4";
// console.log(string);
// let num = string.split(",").map((a) => Number(a));

// console.log(num);

// // let gan ="raju";

// let ascii ="Araju".charCodeAt(0);
// console.log(ascii);
// console.log(String.fromCharCode(65));
// console.log("yavine".toUpperCase());

// let strings = "Hello man HeLLO";
// let regex =/llo/gi;
// let smallOne =strings.replace(regex,'k');
// console.log(smallOne);


// let object = [
//     {
//         'name':"Arjun",
//         'age':19,
//         'gender':"male",
//     },
//     {
//         'name':"Chanti",
//         'age':22,
//         'gender':"female",
//     },
//     {
//         'name':"Eswar",
//         'age':28,
//         'gender':"male",
//     },
//     {
//         'name':"zani",
//         'age':30,
//         'gender':"male",
//     }
// ];

// // let filteredObjects =[];
// // filteredObjects.push((object.age) => return a-b;);

// // console.log(filteredObjects);
// // object.name.sort(()=>{
    
// // })
// let arr = [1,"12","67",7,true,false];
// let dataOutPut = arr.sort((a,b)=>{
//     if(a > b) {
//         return 1;
//     }else if(a < b){
//        return -1;
//     }else{
//         return 0;
//     }
// });
// console.log(dataOutPut);
// let num =[1,2,3,4];
// let result=num.sort((a,b)=>{
//     if(a > b) return -1;
//     if(a < b) return 1;
//     return 0;
// });
// console.log(num);Traverse media and javascript mastery
// let string ="1,2,3,4,5";
// let ram =string.split(`,`);
// let intoArray = ram.map((a)=>{https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
//      return Number(a);
// });
// console.log(intoArray);

// let trimMe ="  ayyo  ";
// let heh =trimMe.trim();
// console.log(heh);/
// adding.sort((a,b)=>{
//     if(a > b) return 1;
//     if(a < b) return -1;
//     return 0;
// });

// let articlesDeleting = ["the Virupaksha Temple","victoria Memorial","Tajmahal"];
// let reg =/\b(the|an|a)\b/gi;
// let adding=[];
// let object={};
// for(let i=0;i<articlesDeleting.length;i++){
//     let str=(articlesDeleting[i].replace(reg," ")).trim();
//     // console.log(result.trim());
//     // adding.push(result);
//     object[str] = articlesDeleting[i];
//     adding.push(str);
//     adding.sort();
// }
// for(let i=0;i<adding.length;i++){
//     console.log(object[adding[i]]);
// }


// let a =prompt();
// console.log(a);



// let a =20;
// let b =100;
//  let f=function(a,b){
//     console.log(a+b);
//     let f1 = ()=>{
//         let b =30;
//         console.log(a+b);
//     }
//     return [a-b,f1];
//  }
//  let result= f(a+2,a+4);
//  console.log(result);

// console.log(a);
// if(flase){
//     var a =200;
// }
// console.log(a);

// function callme(){
//     console.log(a);
//     if(true){
//         var a= 200;
//         let b =100;
//         console.log(a+b);

//     }
//     a++;
// }
// let a =30;
// callme();
// console.log(a);

// let a =2;
// var b =40;
// if(true){
//     let a=30;
//     var b=200;
// }
// console.log(a);
// // console.log(b);

// let obj ={
//     name:"raju",
//     phone:9154890999,
//     gender :"Male"
// }
// let spreadOPerator ={...obj};
// console.log(obj,spreadOPerator,obj === spreadOPerator);

// let newOne={};
// Object.assign(newOne,obj);
// console.log(obj,newOne, newOne === obj);

//        destructuring

// let arr = [5,6,[8,6,8],7,5];

// let [x,y,[,,u],n] = arr;
// console.log(x,y,u,n);
// let obj={
//     name:"raju",
//     age:26,
//     address:{
//         house:54-5-8,
//         phone:9154890999
//     }
// }
// let {name:userName,age:personAge} = obj;
// console.log(userName,personAge);
// let {address:{phone}} = obj;
// console.log(phone);


// var scope = "js scope";
// function checkScope(){
//     var scope = "javaScript scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }


// let sen =["The Virupaksha Temple","Victoria Memorial","Tajmahal"];
// let regix=/\bthe\b|\ban\b|\ba\b/gi;
// let jan=[];
// let map={};
// for(let i=0;i<sen.length;i++){
//     let articellessArray = sen[i].replace(regix," ").trim();
// 	articellessArray =articellessArray.replace(/ */g," ");
//      jan.push(articellessArray);
//      map[articellessArray] = sen[i];
//      jan.sort();
// }
// let ans=[];

// for(let i=0;i<jan.length;i++){
//     console.log(map[jan[i]]);
// }

// let sen =["The Virupaksha Temple","Victoria Memorial","Tajmahal"];
// let regix=/\bthe\b|\ban\b|\ba\b/gi;
// let jan=[];
// let map={};
// for(let i=0;i<sen.length;i++){
//     let articellessArray = sen[i].replace(regix," ").trim();
// 	articellessArray =articellessArray.replace(/  /g," ");
//      jan.push(articellessArray);
// 	  jan.sort();
//      map[articellessArray] = sen[i];
// }
// jan.sort();

// for(let i=0;i<jan.length;i++){
//     console.log(map[jan[i]]);
// }

// let arr =[-1,2,1,-4];
// console.log(arr.sort((a,b)=> a-b));

// let arr =[1,2,3,4];
// let sum=arr.map((element,index,list)=>{
//       console.log(element,index,list);
// });
// console.log(sum);

// console.log(this === window);
// this.prompt("hi");

// let user ={
//     name :"raju",
//     phone:9154890999,
//     object:{
//         city:'kakinada',
//         second:"yeluru",
//         vammu:function(){
//              return `${this.city} ${this.second}`;
//         }
//     } 
// }
// console.log(user.object.vammu());

// let func =()=>{
//     console.log(this);
// }
// func();
// console.log(this);

// let object={
//     name:"kiran",
//     number:9154890999,
//     age:26,
//     objects:{
//         userName:"presingi",
//         address:function(){
//             this.userName="ramaRaju";
//         }
//     }
// }
// object.objects.address();
// console.log(object);

// let test = {
//     prop: 42,
//     func: function () {
//       return this.prop;
//     },
//   };
  
//   console.log(test.func());

// let object ={
//     name:"raju",
//     age:26,
//     address:function(){
//         this.name="kiran";
//     }
// }
// object.address();
// console.log(object);

// let user={
//     firstName:"presingi",
//     secondName:"govind",
//     prop:function(){
//        console.log(this);
//     },
//     props:()=>{
//       this.firstName;
//     }
// }
// user.prop();
// user.props();

// function names(a=1,b=1,...arr){
//     // let result = a+b;
//     // for(num of arr){
//     //     result = result+num ;
//     // }
//     // return result;
//     console.log(arguments[1]);
// }

// console.log(names(2,4,6,8,9));

// let arr=[50000,45000,55000,60000];
// console.log(arr);
// arr.forEach(function(element,index){
//     let increament =element/10;
//     arr[index]=increament+element;
//     console.log(element+increament);
// });
// console.log(arr);

// let s1 =new Set();
// s1.add(10);
// s1.add(20);
// s1.add(10)
//   .add(50)
// console.log(s1);

// a='hydarabadd';
// console.log(a);
// let s1=new Set(a);
// console.log(s1);
// s1.delete("h");
// console.log(s1);

// for(ele of s1){
//     console.log(ele);
// }
// console.log("");
// s1.forEach(function(ele,index,s){
//    console.log(ele);
//    console.log(index);
//    console.log(s);
// });

// let a ="hyderabad";

// let s1 =new Set(a);

// console.log(s1);

// s1.forEach((ele)=>{
//     console.log(ele);
// // });
// console.log(s1.entries());
// let a =[1,2,3,4];
// let[x,y,z,t]=a;
// console.log(t);

function takeAction(){
    // const para = document.createElement("p");
    // para.innerText="India Won";
    // const paki = document.createElement("p");
    // paki.innerText="Pakistan lost";
    // const bold = document.querySelector(".boldOne");
    // bold.insertBefore(para,b);

    // let para = document.createElement("p");
    // para.innerText="India Won";

    // let parent = document.querySelector(".boldOne");
    // let italic = document.querySelector(".beforeSpan");

    // parent.insertBefore(para,null);

    // let para = document.createElement("p");
    // para.innerText="India Won";

    // let parentOne = document.getElementsByTagName("body")[0];
    // let childOne = document.querySelector(".container");

    // parentOne.insertBefore(para,childOne);


    // let para = document.createElement("p");
    // para.innerText = "India Won";

    // let parent = document.querySelector(".boldOne");
    // let child = document.querySelector(".italicOne");

    // parent.insertBefore(para,child);


    // let para = document.createElement("p");
    // para.innerText = "India Won";

    // let parent = document.body;
    // let child = document.querySelector(".container");

    // parent.insertBefore(para,child);
    // let makingNewDiv = document.createElement("div");
    // let makinNewStrong = document.createElement("strong");
    // makinNewStrong.innerText="chilipi";
    // let makingNewHTag =document.createElement("h5");
    // makingNewHTag.innerText="H Tag is great";

    // let parent = document.body;
    // let child = document.querySelector(".container");

    // parent.insertBefore(makingNewDiv,child);
    //  makingNewDiv.append(makinNewStrong,makingNewHTag);
     
    // let addingInNewDiv = document.getElementsByTagName("div")[0];
    // addingInNewDiv.append(makinNewStrong,makingNewHTag);

    // document.body.insertBefore(makingNewDiv,child);
    let printingChildrens = document.querySelector(".parent");
    console.log(printingChildrens.children);
    let printThisElementBefore =printingChildrens.children[1];
    let newElement = document.createElement("b");
    newElement.innerText="kakinada";
    
    printingChildrens.insertBefore(newElement,printThisElementBefore);
}

