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
function getemployeesNames(employees) {
  let employeesnames = [];
  for (let emp of employees) {
    employeesnames.push(emp.name);
  }
  return employeesnames;
}
console.log(getemployeesNames(employees));

function getemployeesAges(employees) {
  let employeesAges = [];
  for (let emp of employees) {
    employeesAges.push(emp.age);
  }
  return employeesAges;
}
console.log(getemployeesAges(employees));

function getNameSalary(employees) {
  let employeesNameSalary = [];
  for (let emp of employees) {
    employeesNameSalary.push(`${emp.name}-${emp.salary}`);
  }
  return employeesNameSalary;
}
let employeesNames = employees.map((emp) => emp.name);
let employeesAges = employees.map((emp) => emp.age);
let employeesNameSalary = employees.map((emp) => `${emp.name}-${emp.salary}`);

console.log(employeesNames);
console.log(employeesAges);
console.log(employeesNameSalary);

function getemployees(employees) {
  let employeesName = [];
  for (let emp of employees) {
    if (emp.age < 50) {
      employeesName.push(emp.name);
    }
  }
  return employeesName;
}
console.log(getemployees(employees));

function getemployeesFemale(employees) {
  let employeesFemalesName = [];
  for (let emp of employees) {
    if (emp.gender === "Female") {
      employeesFemalesName.push(emp.name);
    }
  }
  return employeesFemalesName;
}
console.log(getemployeesFemale(employees));

let employeesName = employees.filter((emp) => emp.age);
let employeesFemalesName = employees.filter((emp) => emp.gender === "Female");
console.log(employeesName);
console.log(employeesFemalesName);
