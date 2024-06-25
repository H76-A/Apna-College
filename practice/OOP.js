

// class Person{
//     constructor(name,age){
//         this.name=name,
//         this.age= age
//     }
    
//     talk(){
//         console.log("He talk ",this.name)
//     }
// }

// let p1 = new Person("anee",25)
// Use of Class  to construct Object and re use them any time any where 



//*********************************************************** */

// Use Of Inheritance 


// crate of a person class 
class Person{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    talk(){
        console.log(`${this.name} Talks here with me` )
    }
}
class Student extends Person{
    constructor(name,age,marks){
        console.log("Students Class Constructor ")
        super(name,age) // parent class constructor is being called here 
        this.marks= marks
    }

    greet(){
        console.log('Hello man ')
    }
}
class Teacher extends Person{
    constructor(name,age,subject){
        console.log("Teacher Class Constructor")
        super(name,age)
        this.subject= subject
    }

    greet(){
        console.log('Hello man ')
    }
}