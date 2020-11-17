// Instance Properties: What they have
// Name, Age, Height

// Instance Methods: What they do
// Talk, Run, Jump


// class Rectangle {
//     // Setup the actual object
//     // Three parameters passed in through the constructor function
//     constructor(_width, _height, _color) {
//         console.log("The Rectangle is being created");

//         // "This" refers to current object
//         // The object which is being created by that class
//         // Three instance properties defined inside constructor
//         this.width = _width;
//         this.height = _height;
//         this.color = _color;

//     }
// }

// let myRectangle1 = new Rectangle(5, 3, "blue");
// let myRectangle2 = new Rectangle(10, 5, "red");

class Person {

    //set up actual object
    // passing in three parameters
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;

    }

    exercise(activity) {
        return ` ${activity}  is fun! - said no one ever.`

    }

    fetchJob() {
        return `${this.name} is a ${this.job}`
    }

}

// new is creating a new instance of person
const person1 = new Person("Rudy", "Developer", "20")

console.log(person1.exercise("Swimming"));

console.log(person1.fetchJob());


class Programmer extends Person {
    constructor (languages) {
        super(languages);
        this.busy = true;

        this.languages = languages;
    }

    completeTask() {
        this.busy = false;

    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if(this.busy) {
            return `${this.name} can't accept any new tasks right now`
        }
        return `${this.name} would love to take on a new responsibility.`
    }

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage)


    }

    listLanguages() {
        for (let i = 0; i < this.languages.length; i++) {
            console.log(this.languages[i])
        }

    }
    
}

const rudy = new Programmer(["English", "French", "Mandarin"])
rudy.name = "Rudy";
console.log(rudy.offerNewTask());

rudy.learnLanguage("Dutch");

rudy.listLanguages();