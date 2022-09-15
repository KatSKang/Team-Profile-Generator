const Manager = require('../lib/manager');

describe('Manager', () => {
  describe('Manager params', () => {
    it("should create an object for the manager's name, id, email AND office number ", () => {
      const data = new Manager('Yor', 9, 'yor@email.com','3');

      expect(data.name).toEqual('Yor');
      expect(data.id).toEqual(9);
      expect(data.email).toEqual('yor@email.com');
      expect(data.officeNumber).toEqual('3');
    });
});
describe('Manager methods', () => {
    it("should be able to return values when the method is used" , () => {
        const data = new Manager('Loid', 34, 'loid@email.com', 'secret');
        
        expect(data.getName()).toEqual('Loid');
        expect(data.getID()).toEqual(34);
        expect(data.getEmail()).toEqual('loid@email.com');
        expect(data.getOfficeNumber()).toEqual('secret');

        });
    })
});