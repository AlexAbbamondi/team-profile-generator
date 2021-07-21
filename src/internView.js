//Import EmployeeView
const EmployeeView = require("./employeeView");

//InternView used the parent class Employee View
const InternView = class InternView extends EmployeeView {
    constructor(employee) {
        super(employee);
    }

    //icon to place in the card
    drawIcon() {
        return `<i class="fab fa-sketch"></i>`
    }

    //last li tag content
    drawLastLi() {
        return `<li class="list-group-item"><b>School:</b> ${this.employee.school}</li>`
    }
}

module.exports = InternView; 