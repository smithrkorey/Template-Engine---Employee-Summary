// TODO: Write code to define and export the Employee class
class Employee {
    constructor() {
    }
    constructor(name) {
        this.name = name;
    }
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    constructor(name, id, email) {
        this.email = email;
        this.id = id;
        this.name = name;
        this.role = "Employee";
    }

    getName() {
        return this.name 
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}

      