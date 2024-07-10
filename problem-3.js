/**
 * Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this within these methods such that method chaining of add, subtract, multiply and divide is possible.\
 */

class Calculator {
    constructor(num1,num2){
this.num1 = num1;
this.num2 = num2;
    }
    add(){
console.log("add is ", this.num1+this.num2);
return this;
    }
    substract(){
console.log("substract is ",this.num1-this.num2);
return this;
    }
    multiply(){
        console.log("multiply is ",this.num1*this.num2);
        return this;
    }
    devide(){
        console.log("devide is ",this.num1/this.num2);
        return this;
    }
}
const result = new Calculator(6,3)
result.add().substract().multiply().devide();