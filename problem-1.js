// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add a method sayHello to greet the person.

class Person { //this is a obj blue print
    constructor(name, age){//intializes name and age constructor is a special method it will initialize when new obj will created
        this.name = name;
        this.age = age;
    }

    greet(){// greeting method
        console.log(`Hello my name is ${this.name} and I am  ${this.age}`);
    }
   
}
let person = new Person("Sujoy", 21) // created a new obj 
person.greet()

