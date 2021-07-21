//Import EmployeeView
const EmployeeView = require("./employeeView");

//ManagerView used the parent class Employee View
const ManagerView = class ManagerView extends EmployeeView {
    constructor(employee) {
        super(employee);
    }

    //icon to place in the card
    drawIcon() {
        return `<i class="fas fa-tasks"></i>`
    }

    //last li tag content
    drawLastLi() {
        return `<li class="list-group-item"><b>Office Number:</b> ${this.employee.getOfficeNumber()}</li>`
    }
}

module.exports = ManagerView;  