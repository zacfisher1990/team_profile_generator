const Intern = require('../lib/Intern');
 
test('creates Intern object', () => {
    const intern = new Intern('Zac', 1, 'zcfshr@gmail.com', 'UVU');
    
    expect(intern.school).toEqual(expect.any(String));

})

test('checks methods for intern class', () => {
    const intern = new Intern('Zac', 1, 'zcfshr@gmail.com', 'UVU');

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
    expect(intern.getSchool()).toBe(intern.school);
    expect(intern.getRole()).toBe('Intern');

})
