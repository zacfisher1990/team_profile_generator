const Engineer = require('../lib/Engineer');
 
test('creates Engineer object', () => {
    const engineer = new Engineer('Zac', 1, 'zcfshr@gmail.com', 'zacfisher1990');
    
    expect(engineer.github).toEqual(expect.any(String));

})

test('checks methods for engineer class', () => {
    const engineer = new Engineer('Zac', 1, 'zcfshr@gmail.com', 'zacfisher1990');

    expect(engineer.getName()).toBe(engineer.name);
    expect(engineer.getId()).toBe(engineer.id);
    expect(engineer.getEmail()).toBe(engineer.email);
    expect(engineer.getGithub()).toBe(engineer.github);
    expect(engineer.getRole()).toBe('Engineer');

})
