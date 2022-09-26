const Manager = require('../lib/Manager');
 
test('creates Manager object', () => {
    const manager = new Manager('Zac', 1, 'zcfshr@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));

})

test('checks methods for manager class', () => {
    const manager = new Manager('Zac', 1, 'zcfshr@gmail.com', 1);

    expect(manager.getName()).toBe(manager.name);
    expect(manager.getId()).toBe(manager.id);
    expect(manager.getEmail()).toBe(manager.email);
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    expect(manager.getRole()).toBe('Manager');

})
