const Employee = require("./Employee");

//Intern Class constructor extending Employee class with its methods
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern"; 
    }
} 

module.exports = Intern;