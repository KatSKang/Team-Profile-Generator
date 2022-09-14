const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
    }

    getGitHub() {
        return github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;