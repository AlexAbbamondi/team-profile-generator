const Intern = require("../lib/Intern");

test("Instantiates new Intern instance", () => {
    const e = new Intern();
    expect(typeof e).toBe("object"); 
});

test("returns name of Intern",  () => {
  const e = new Intern('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

test('returns Intern Id', () => {
    const e = new Intern('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

test('returns Intern email', () => {
    const e = new Intern('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

test('returns role of Intern', () => {
    const e = new Intern('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Intern");
}); 