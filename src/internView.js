const EmployeeView = require("./employeeView");

const InternView = class InternView extends EmployeeView {
    constructor(employee) {
        super(employee);
    }

    drawIcon() {
        return `<i class="fab fa-sketch"></i>`
    }

    drawLastLi() {
        return `<li class="list-group-item"><b>School:</b> ${this.employee.school}</li>`
    }
}

module.exports = InternView; 