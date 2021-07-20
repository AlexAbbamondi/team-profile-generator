const Manager = require("../lib/Manager");

test("Instantiates new Manager instance", () => {
    const e = new Manager();
    expect(typeof e).toBe("object"); 
});

test("returns name of Manager",  () => {
  const e = new Manager('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

test('returns Manager Id', () => {
    const e = new Manager('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

test('returns Manager email', () => {
    const e = new Manager('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

test('returns role of Manager', () => {
    const e = new Manager('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Manager");
}); 