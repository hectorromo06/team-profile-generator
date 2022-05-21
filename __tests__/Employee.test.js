const Employee = require('../lib/Employee');

describe('Employee Object', () => {
    it('Creation of Employee', () => {
        const employee = new Employee('Hector', 1, 'hectorommmo@gmail.com');

        expect(employee.name).toEqual('Hector');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('hectorommmo@gmail.com');
    });

    it('Get Employee name', () => {
        const employee = new Employee('Hector', 1, 'hectorommmo@gmail.com');

        expect(employee.getName()).toEqual('Hector');
    });

    it('Get Employee id', () => {
        const employee = new Employee('Hector', 1, 'hectorommmo@gmail.com');

        expect(employee.getId()).toEqual(1);
    });

    it('Get Employee email', () => {
        const employee = new Employee('Hector', 1, 'hectorommmo@gmail.com');

        expect(employee.getEmail()).toEqual('hectorommmo@gmail.com');
    });

    it("Returns role 'Employee'", () => {
        const employee = new Employee('Hector', 1, 'hectorommmo@gmail.com');

        expect(employee.getRole()).toEqual('Employee');
    })
});