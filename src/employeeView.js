const EmployeeView = class EmployeeView {
    constructor(employee) {
        this.employee = employee;
    }

    draw() {
        return `
        <div class="col my-auto d-flex justify-content-around">
            <div class="card custom-card mb-4" style="width: 18rem;">
                <div class="card-header bg-primary text-white p-3 h4">
                ${this.drawIcon()} ${this.employee.name}
                <div class="mt-2">
                    ${this.employee.getRole()}
                </div>
                </div>
                <div class="px-4 py-5 custom-card-body">
                    <ul class="list-group list-group-flush custom-list">
                        <li class="list-group-item"><b>ID:</b> ${this.employee.id}</li>
                        <li class="list-group-item"><b>Email:</b> <a href="mailto:${this.employee.email}">${this.employee.email}</a></li>
                        ${this.drawLastLi()} 
                    </ul>
                </div>
            </div>
        </div>
      `;
    }

    drawIcon() {
        return ``;
    }

    drawLastLi() {
        return ``;
    }
}

module.exports = EmployeeView;