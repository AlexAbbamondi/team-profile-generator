const Engineer = require("../lib/Engineer");

test("Instantiates new Engineer instance", () => {
    const e = new Engineer();
    expect(typeof e).toBe("object"); 
});

test("returns name of Engineer",  () => {
  const e = new Engineer('Alex');
  expect(e.getName()).toEqual(expect.any(String));
});

test('returns Engineer Id', () => {
    const e = new Engineer('Alex', 1, 'alex@alex.com');
    expect(e.getId()).toEqual(expect.any(Number));
});

test('returns Engineer email', () => {
    const e = new Engineer('Alex', 1, 'alex@alex.com');
    expect(e.getEmail()).toEqual(expect.stringContaining(e.email.toString()));
});

test('returns role of Engineer', () => {
    const e = new Engineer('Alex', 1, 'alex@alex.com');
    expect(e.getRole()).toEqual("Engineer");
}); 