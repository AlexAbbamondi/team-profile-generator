//import Intern.js for testing
const Intern = require("../lib/Intern");

//Tests for an instance of the Intern object
test("Instantiates new Intern instance", () => {
    const e = new Intern();
    expect(typeof e).toBe("object"); 
});

//Test to return a name
test("returns name of Intern",  () => {
  const e = new Intern('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

//Test to return an id
test('returns Intern Id', () => {
    const e = new Intern('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

//Test to return an email
test('returns Intern email', () => {
    const e = new Intern('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

//Test to return the role
test('returns role of Intern', () => {
    const e = new Intern('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Intern");
}); 