class Employee {
    constructor(name, id, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    getName() {
        console.log(`Employee name is ${this.name}`)
        return this.name;
    };

    getID() {
        console.log(`Employee name is ${this.id}`)
        return this.id;
    };

    getEmail() {
        console.log(`Employee name is ${this.email}`)
        return this.email;
    };
    
    getRole() {
        return 'Employee';
    }
    
  }
  
  module.exports = Employee;