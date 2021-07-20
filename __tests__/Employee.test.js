const Employee = require("../lib/Employee");

test("Instantiates new Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toBe("object"); 
});

test("returns name of employee",  () => {
  const e = new Employee('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

test('returns employee Id', () => {
    const e = new Employee('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

test('returns employee email', () => {
    const e = new Employee('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

test('returns role of employee', () => {
    const e = new Employee('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Employee");
}); 