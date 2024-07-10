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


/*
 * Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional property designation and a method getDetails to display the employee details.
 */


class Employee extends Person{ //emply inherits from person
    constructor(name, age , designation){
        super(name, age);
       this.designation= designation;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    }
}    
const employee1 = new Employee("Rohit", 26, "Project Maneger")
employee1.getDetails()
employee1.greet()