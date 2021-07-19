const Employee = require("../lib/Employee");

test("Instantiates new Employee instance", () => {
    const e = new Employee();
    expect(type(e).toBe("object"));
})