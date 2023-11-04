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

const user = {
    name: 'Max',
    age:34,
    greetUser(){
        console.log('Hello');
        console.log(this.age);
    }
};



console.log(user);
console.log(user.name);
console.log(user.age);

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
console.log(hobbies[0])
hobbies.findIndex((item) => {
    return item === 'Sports';
} )

