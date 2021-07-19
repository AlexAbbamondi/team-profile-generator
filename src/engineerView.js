const EmployeeView = require("./employeeView");

const EngineerView = class EngineerView extends EmployeeView {
    constructor(employee) {
        super(employee);
    }

    drawIcon() {
        return `<i class="fas fa-flask"></i>`
    }

    drawLastLi() {
        return `<li class="list-group-item"><b>Github:</b> <a href="https://github.com/${this.employee.github}">${this.employee.github}</a></li>`
    }
}

module.exports = EngineerView; 