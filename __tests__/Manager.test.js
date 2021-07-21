//import Manager.js for testing
const Manager = require("../lib/Manager");

//Tests for an instance of the Manager object
test("Instantiates new Manager instance", () => {
    const e = new Manager();
    expect(typeof e).toBe("object"); 
});

//Test to return a name
test("returns name of Manager",  () => {
  const e = new Manager('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

//Test to return an id
test('returns Manager Id', () => {
    const e = new Manager('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

//Test to return an email
test('returns Manager email', () => {
    const e = new Manager('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

//Test to return the role
test('returns role of Manager', () => {
    const e = new Manager('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Manager");
}); 