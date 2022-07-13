// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
    employee.code = 10;
    employee.name = "John"; */

let employee = {
        code: 10,
        name: 'John'
}

// Eu prefiro com interface

interface Employee {
    code: number;
    name: string;
}

let employeeCreator: Employee = {
    code: 2000,
    name: 'Wesley Vlk'
}
