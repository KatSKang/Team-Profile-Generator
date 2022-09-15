const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe('Engineer params', () => {
    it("should create an object for the engineer's name, id, email AND github ", () => {
        const data = new Engineer('Aris', 42, 'atp@email.com','atpsuspect');
  
        expect(data.name).toEqual('Aris');
        expect(data.id).toEqual(42);
        expect(data.email).toEqual('atp@email.com');
        expect(data.github).toEqual('atpsuspect');
    });
});
describe('Engineer methods', () => {
    it("should be able to return values when the method is used" , () => {
        const data = new Engineer ('Suzy', 44, 'suzy@email.com', 'nana');
        
        expect(data.getName()).toEqual('Suzy');
        expect(data.getID()).toEqual(44);
        expect(data.getEmail()).toEqual('suzy@email.com');
        expect(data.getGitHub()).toEqual('nana');

        });
    })
});