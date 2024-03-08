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

function getName(employees) {
  let name = [];
  for (let emp of employees) {
    name.push(emp.name);
  }
  return name;
}
console.log(getName(employees));

function getAge(employees) {
  let age = [];
  for (let emp of employees) {
    age.push(emp.age);
  }
  return age;
}
console.log(getAge(employees));

function getNameSalary(employees) {
  let array = [];
  for (let emp of employees) {
    array.push(`${emp.name} - ${emp.salary}`);
  }
  return array;
}
console.log(getNameSalary(employees));

let name = employees.map((emp) => emp.name);
console.log(name);
let age = employees.map((emp) => emp.age);
console.log(age);
let nameage = employees.map((emp) => `${emp.name} - ${emp.salary}`);
console.log(nameage);
