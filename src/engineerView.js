//Import EmployeeView
const EmployeeView = require("./employeeView");

//EngineerView used the parent class Employee View
const EngineerView = class EngineerView extends EmployeeView {
    constructor(employee) {
        super(employee);
    }

    //icon to place in the card
    drawIcon() {
        return `<i class="fas fa-flask"></i>`
    }

    //last li tag content
    drawLastLi() {
        return `<li class="list-group-item"><b>Github:</b> <a href="https://github.com/${this.employee.github}">${this.employee.github}</a></li>`
    }
}

module.exports = EngineerView; 