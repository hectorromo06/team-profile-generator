const Engineer = require('../lib/Engineer');

describe('Engineer Object', () => {
    it('Creation of Engineer', () => {
        const engineer = new Engineer('Hector', 1, 'hectorommmo@gmail.com', 'hectorromo06');

        expect(engineer.name).toEqual('Hector');
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('hectorommmo@gmail.com');
        expect(engineer.github).toEqual('hectorromo06');
    });

    it('Get Engineer name', () => {
        const engineer = new Engineer('Hector', 1, 'hectorommmo@gmail.com', 'hectorromo06');

        expect(engineer.getName()).toEqual('Hector');
    });

    it('Get Engineer id', () => {
        const engineer = new Engineer('Hector', 1, 'hectorommmo@gmail.com', 'hectorromo06');

        expect(engineer.getId()).toEqual(1);
    });

    it('Get Engineer email', () => {
        const engineer = new Engineer('Hector', 1, 'hectorommmo@gmail.com', 'hectorromo06');

        expect(engineer.getEmail()).toEqual('hectorommmo@gmail.com');
    });

    it('Get Engineer github', () => {
        const engineer = new Engineer('Hector', 1, 'hectorommmo@gmail.com', 'hectorromo06');

        expect(engineer.getGithub()).toEqual('hectorromo06');
    });

    it("Returns role 'Engineer'", () => {
        const engineer = new Engineer('Hector', 1, 'hectorommmo@gmail.com', 'hectorromo06');

        expect(engineer.getRole()).toEqual('Engineer');
    })
});