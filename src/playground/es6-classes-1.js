class Person {
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `I am ${this.name} . I am ${this.age} years old.`;
    }
}

class Student extends Person {
    
    constructor(major,name,age){
        super(name,age)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    getDescription (){
        //get the description from the super class and add alter the properties in this new one.
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` My major is ${this.major} .`;
        }

        return description;
    }
}

const newPerson  =  new Student('Computer Science','Joseph Nkoro',90)
console.log(newPerson.getDescription())

const newChild = new Person('Milton Phlem', 61)
console.log(newChild.getDescription())
