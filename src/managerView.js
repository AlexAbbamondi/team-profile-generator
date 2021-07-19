const EmployeeView = require("./employeeView");

const ManagerView = class ManagerView extends EmployeeView {
    constructor(employee) {
        super(employee);
    }

    drawIcon() {
        return `<i class="fas fa-tasks"></i>`
    }

    drawLastLi() {
        return `<li class="list-group-item"><b>Office Number:</b> ${this.employee.officeNumber}</li>`
    }
}

module.exports = ManagerView;  