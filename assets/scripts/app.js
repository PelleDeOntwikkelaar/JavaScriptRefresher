// import { apiKey as apiContent } from "./util.js";
// import defaultapikey from "./util.js";
// import * as util from "./util.js";

//console.log(apiContent);
//console.log(defaultapikey);

// console.log(util.default);
// console.log(util.apiKey);


const userMessage = "Hello World!";

console.log(userMessage);

console.log(10 + 5);

function greet(username, message = "Hello"){
    console.log(username);
    console.log(message);
}

(username, message) =>  {
    console.log('hello');
    return username + message
}

greet("Pelle", userMessage);

const person = {
    name: 'Max',
    age:34,
    greetUser(){
        console.log('Hello');
        console.log(this.age);
    }
};

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('HI');
    }
}

const user1 = new User("Manuel", 35);
console.log(user1)


const hobbies = ["sports", "Cooking", "Reading"];
hobbies.push("Working");
console.log(hobbies[0]);
const sportsIndex = hobbies.findIndex((item) => item === 'Sports');

console.log(sportsIndex);

const edditedHobies = hobbies.map((item) => ({text: item}));
console.log(edditedHobies);

const userNameData = ["Max", "Reyniers"];

const [firstName, lastName] = ["Max", "Reyniers"];
console.log(firstName);
console.log(lastName);

const extendeHobbies = [...hobbies, ...userNameData]

const user ={
    title: '2',
    ...person
}

// control structure
const password = prompt('Your password');

if(password === "Hello"){
    console.log("hello works");
} else if(password === "hello"){
    console.log("hello works");
}else {
    console.log("Access not granted");
}

for(const hobby of hobbies){
    console.log(hobby);
}

function handleTimeout(){
    console.log("Timed Out");
}

const handleTimeout2 = () =>{
    console.log('Timed out ...again');
};

setTimeout(handleTimeout2);

function greeter(greeterFn){
    greeterFn();
}

greeter(() => console.log("Hi"));







