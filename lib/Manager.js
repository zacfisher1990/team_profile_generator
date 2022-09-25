const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    getOfficeNumber() {
        return this.school;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;