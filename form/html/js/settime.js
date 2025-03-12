function print(){
    console.log("Hello")

setTimeout(print,2000)
    // setInterval(print,2000)
}

// objects in js

let car = {
   brand: "toyoto" ,
   model: "coroll",
    year: 2020
   };
   console.log(car.brand); 
   console.log(car.model);
   console.log(car.year);

let person = {}
   person.firstname = "Dhana"; 
   person.lastname = "Lakshmi"; 
    person.age = "20";          


delete person.age;             
console.log(person);



