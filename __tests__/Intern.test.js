const Intern = require('../lib/Intern');

describe('Intern Object', () => {
    it('Creation of Intern', () => {
        const intern = new Intern('Hector', 1, 'hectorommmo@gmail.com', 'Sacramento State');

        expect(intern.name).toEqual('Hector');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('hectorommmo@gmail.com');
        expect(intern.school).toEqual('Sacramento State');
    });

    it('Get Intern name', () => {
        const intern = new Intern('Hector', 1, 'hectorommmo@gmail.com', 'Sacramento State');

        expect(intern.getName()).toEqual('Hector');
    });

    it('Get Intern id', () => {
        const intern = new Intern('Hector', 1, 'hectorommmo@gmail.com', 'Sacramento State');

        expect(intern.getId()).toEqual(1);
    });

    it('Get Intern email', () => {
        const intern = new Intern('Hector', 1, 'hectorommmo@gmail.com', 'Sacramento State');

        expect(intern.getEmail()).toEqual('hectorommmo@gmail.com');
    });

    it('Get Intern school', () => {
        const intern = new Intern('Hector', 1, 'hectorommmo@gmail.com', 'Sacramento State');

        expect(intern.getSchool()).toEqual('Sacramento State');
    });

    it("Returns role 'Intern'", () => {
        const intern = new Intern('Hector', 1, 'hectorommmo@gmail.com', 'Sacramento State');

        expect(intern.getRole()).toEqual('Intern');
    })
});