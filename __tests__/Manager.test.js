const Manager = require('../lib/Manager');

describe('Manger Object', () => {
    it('Creation of Manager', () => {
        const manager = new Manager('Hector', 1, 'hectorommmo@gmail.com', 123);

        expect(manager.name).toEqual('Hector');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('hectorommmo@gmail.com');
        expect(manager.officeNum).toEqual(123);
    });

    it('Get Manager name', () => {
        const manager = new Manager('Hector', 1, 'hectorommmo@gmail.com', 123);

        expect(manager.getName()).toEqual('Hector');
    });

    it('Get Manager id', () => {
        const manager = new Manager('Hector', 1, 'hectorommmo@gmail.com', 123);

        expect(manager.getId()).toEqual(1);
    });

    it('Get Manager email', () => {
        const manager = new Manager('Hector', 1, 'hectorommmo@gmail.com', 123);

        expect(manager.getEmail()).toEqual('hectorommmo@gmail.com');
    });

    it("Returns role 'Manager'", () => {
        const manager = new Manager('Hector', 1, 'hectorommmo@gmail.com', 123);

        expect(manager.getRole()).toEqual('Manager');
    })
});