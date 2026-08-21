const person={
    name:"vj",
}
person.greeting=function(){
    console.log("hello "+this.name);
}

person.greeting();