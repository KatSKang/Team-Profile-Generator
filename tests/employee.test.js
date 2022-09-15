const Employee = require('../lib/employee');

describe('Employee', () => {
  describe('Employee params', () => {
    it("should create an object for the employee's name, id, and email ", () => {
      const data = new Employee ('Kathy', 21, 'kat@email.com'); 

      expect(data.name).toEqual('Kathy');
      expect(data.id).toEqual(21);
      expect(data.email).toEqual('kat@email.com');
    });
});
describe('Employee methods', () => {
        it("should be able to return values when the method is used" , () => {
        const data = new Employee ('Alex', 14, 'alex@email.com');
        
        expect(data.getName()).toEqual('Alex');
        expect(data.getID()).toEqual(14);
        expect(data.getEmail()).toEqual('alex@email.com');

        });
    })
});