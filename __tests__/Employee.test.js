//import Employee.js for testing
const Employee = require("../lib/Employee");

//Tests for an instance of the Employee object
test("Instantiates new Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toBe("object"); 
});

//Test to return a name
test("returns name of employee",  () => {
  const e = new Employee('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

//Test to return an id
test('returns employee Id', () => {
    const e = new Employee('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

//Test to return an email
test('returns employee email', () => {
    const e = new Employee('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

//Test to return the role
test('returns role of employee', () => {
    const e = new Employee('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Employee");
}); 