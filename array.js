const employees = [
  {
    name: "Amit Patel",
    age: 32,
    gender: "Male",
    dateOfBirth: "1992-09-14",
    salary: 55000,
    manager: "Priya Sharma",
  },
  {
    name: "Priya Sharma",
    age: 40,
    gender: "Female",
    dateOfBirth: "1984-05-22",
    salary: 70000,
    manager: "Rahul Desai",
  },
  {
    name: "Rahul Desai",
    age: 45,
    gender: "Male",
    dateOfBirth: "1979-11-08",
    salary: 85000,
    manager: "Anjali Gupta",
  },
  {
    name: "Anjali Gupta",
    age: 50,
    gender: "Female",
    dateOfBirth: "1974-07-30",
    salary: 100000,
    manager: "Suresh Reddy",
  },
  {
    name: "Suresh Reddy",
    age: 55,
    gender: "Male",
    dateOfBirth: "1969-03-18",
    salary: 120000,
    manager: "Neha Singh",
  },
  {
    name: "Neha Singh",
    age: 60,
    gender: "Female",
    dateOfBirth: "1964-10-12",
    salary: 150000,
    manager: "Vikram Khanna",
  },
  {
    name: "Vikram Khanna",
    age: 65,
    gender: "Male",
    dateOfBirth: "1959-06-24",
    salary: 180000,
    manager: "Shanti Iyer",
  },
  {
    name: "Shanti Iyer",
    age: 70,
    gender: "Female",
    dateOfBirth: "1954-02-08",
    salary: 200000,
    manager: "Rajesh Kumar",
  },
  {
    name: "Rajesh Kumar",
    age: 75,
    gender: "Male",
    dateOfBirth: "1949-08-16",
    salary: 250000,
    manager: "Preeti Joshi",
  },
  {
    name: "Preeti Joshi",
    age: 80,
    gender: "Female",
    dateOfBirth: "1944-04-05",
    salary: 300000,
    manager: null,
  },
];
Array.prototype.mymap = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// use myMap
let employeesName = employees.mymap((i) => i.name);
console.log(employeesName);

Array.prototype.myFilter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};
// use myFilter

let empNames = employees.myFilter((emp) => emp.age < 50);
console.log(empNames);

// function getEmployeesNames(employees) {
//   let employeesNames = [];
//   for (let emp of employees) {
//     employeesNames.push(emp.name);
//   }
//   return employeesNames;
// }
// console.log(getEmployeesNames(employees));

// function getEmployeesAges(employees) {
//   let employeesAges = [];
//   for (let emp of employees) {
//     employeesAges.push(emp.age);
//   }
//   return employeesAges;
// }
// console.log(getEmployeesAges(employees));

// function getemployeesNameAndSalary(employees) {
//   let nameAndAge = [];
//   for (let emp of employees) {
//     nameAndAge.push(`${emp.name} - ${emp.salary}`);
//   }
//   return nameAndAge;
// }
// console.log(getemployeesNameAndSalary(employees));

// /// maping

// let employeesAges = employees.map((emp) => emp.age);
// console.log(employeesAges);

// let employeesNameAndSalary = employees.map(
//   (emp) => `${emp.name} - ${emp.salary}`
// );
// console.log(employeesNameAndSalary);

// function getEmployees(employees) {
//   let employeesNames = [];
//   for (let emp of employees) {
//     if (emp.age < 50) {
//       employeesNames.push(emp.name);
//     }
//   }
//   return employeesNames;
// }

// console.log(getEmployees(employees));

// function getFemailEmployees(employees) {
//   let femaleEmployees = [];
//   for (let emp of employees) {
//     if (emp.gender === "Female") {
//       femaleEmployees.push(emp.name);
//     }
//   }
//   return femaleEmployees;
// }
// console.log(getFemailEmployees(employees));

// /////  filter
// let employeesnames = employees.filter((emp) => emp.age < 50);
// let femalemployees = employees.filter((emp) => emp.gender === "Female");
// console.log(employeesnames);
// console.log(femalemployees);

// const getEmpName = (emp) => emp.name;
// let empNames = employees.map(getEmpName);
// console.log(empNames);
