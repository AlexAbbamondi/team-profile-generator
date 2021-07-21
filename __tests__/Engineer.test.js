//import Engineer.js for testing
const Engineer = require("../lib/Engineer");

//Tests for an instance of the Engineer object
test("Instantiates new Engineer instance", () => {
    const e = new Engineer();
    expect(typeof e).toBe("object"); 
});

//Test to return a name
test("returns name of Engineer",  () => {
  const e = new Engineer('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

//Test to return an id
test('returns Engineer Id', () => {
    const e = new Engineer('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

//Test to return an email
test('returns Engineer email', () => {
    const e = new Engineer('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

//Test to return the role
test('returns role of Engineer', () => {
    const e = new Engineer('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Engineer");
}); 