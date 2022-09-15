const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('Intern params', () => {
    it("should create an object for the intern's name, id, email AND school ", () => {
        const data = new Intern('Anya', 6, 'anya@email.com','gatech');

        expect(data.name).toEqual('Anya');
        expect(data.id).toEqual(6);
        expect(data.email).toEqual('anya@email.com');
        expect(data.school).toEqual('gatech');
    });
});
describe('Intern methods', () => {
    it("should be able to return values when the method is used" , () => {
        const data = new Intern ('Damian', 7, 'damian@email.com', 'gsu');
        
        expect(data.getName()).toEqual('Damian');
        expect(data.getID()).toEqual(7);
        expect(data.getEmail()).toEqual('damian@email.com');
        expect(data.getSchool()).toEqual('gsu');

        });
    })
});