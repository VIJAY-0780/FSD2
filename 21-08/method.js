// const person={
//     name:"vj",
// }
// person.greeting=function(){
//     console.log("hello "+this.name);
// }

// person.greeting();

// const person = {
//     name: "vj",
//     // Method shorthand
//     greeting() {
//         console.log("hello " + this.name);
//     }
// };

// // Call the method
// person.greeting(); // hello vj


const person = {
    name: "vj",
    greeting: function() {
        console.log("hello " + this.name);
    }
};
person.greeting(); 